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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <div className={contactStyles.card}>
      <form onSubmit={handleSubmit} className={contactStyles.form}>
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
