"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import contactStyles from "./ContactSection.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("🚀 Form submission started");
    console.log("📝 Form data:", formData);

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      console.error("❌ Form validation failed - missing required fields");
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      console.log("📤 Sending POST request to /api/send-email");
      console.log("📦 Request payload:", JSON.stringify(formData, null, 2));

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Response received");
      console.log("📊 Response status:", response.status);
      console.log("📊 Response ok:", response.ok);
      console.log(
        "📊 Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      let data;
      try {
        data = await response.json();
        console.log("📄 Response data:", data);
      } catch (parseError) {
        console.error("❌ Failed to parse response JSON:", parseError);
        const textResponse = await response.text();
        console.log("📄 Raw response text:", textResponse);
        throw new Error("Invalid response format from server");
      }

      if (response.ok) {
        console.log("✅ Email sent successfully");
        setSubmitStatus("success");
        setStatusMessage(
          data.message ||
            "Message sent successfully! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("❌ Email sending failed");
        console.error("❌ Error details:", data);
        setSubmitStatus("error");
        setStatusMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("❌ Network or parsing error:", error);
      setSubmitStatus("error");
      setStatusMessage("Network error. Please try again.");
    } finally {
      console.log("🏁 Form submission completed");
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <div className={contactStyles.card}>
      <form onSubmit={handleSubmit} className={contactStyles.form} noValidate>
        <div>
          <label className={contactStyles.label}>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={contactStyles.input}
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className={contactStyles.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={contactStyles.input}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className={contactStyles.label}>Message *</label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={contactStyles.textarea}
            placeholder="Tell me about your project..."
            disabled={isSubmitting}
          />
        </div>
        {/* Status Message */}
        {statusMessage && (
          <div
            className={
              submitStatus === "success"
                ? contactStyles.success
                : contactStyles.error
            }
          >
            {submitStatus === "success" ? (
              <CheckCircle
                size={18}
                style={{ marginRight: 6, verticalAlign: "middle" }}
              />
            ) : (
              <AlertCircle
                size={18}
                style={{ marginRight: 6, verticalAlign: "middle" }}
              />
            )}
            <span>{statusMessage}</span>
          </div>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          className={contactStyles.button}
        >
          {isSubmitting ? (
            <>
              <Loader2
                size={18}
                style={{ marginRight: 6, verticalAlign: "middle" }}
                className={contactStyles.spinner}
              />
              Sending...
            </>
          ) : (
            <>
              <Send
                size={18}
                style={{ marginRight: 6, verticalAlign: "middle" }}
              />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
