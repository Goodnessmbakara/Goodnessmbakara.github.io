'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <Card className="bg-slate-800/50 border-emerald-500/20">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea 
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none transition-colors"
              placeholder="Tell me about your project..."
              disabled={isSubmitting}
            />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className={`flex items-center space-x-2 p-3 rounded-lg ${
              submitStatus === 'success' 
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' 
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}>
              {submitStatus === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="text-sm">{statusMessage}</span>
            </div>
          )}
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}