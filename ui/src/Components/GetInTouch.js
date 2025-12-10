import React, { useState } from "react";
import { MapPin, Mail, Linkedin, Github, Send } from "lucide-react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  // Formspree Configuration
  // Get your form endpoint from https://formspree.io/
  // After signing up, create a new form and copy the endpoint URL
  // Example: https://formspree.io/f/YOUR_FORM_ID
  const FORMSPREE_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT"; // Replace with your Formspree endpoint

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email using Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This allows you to reply directly to the sender
        }),
      });

      if (response.ok) {
        // Success
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly at bishtjeet89@gmail.com",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = {
    location: "Bangalore, India",
    email: "bishtjeet89@gmail.com",
  };

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/jeetraj-bisht-9aa969211/",
    github: "https://github.com/jeetb89",
    email: `mailto:${contactInfo.email}`,
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Let's discuss your next project or just say hello
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Let's Connect */}
          <div className="bg-[#1f2937] border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-white transition-colors border border-gray-700"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-white transition-colors border border-gray-700"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.email}
                  className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-white transition-colors border border-gray-700"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Available for Work */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-white font-medium">Available for Work</p>
              </div>
              <p className="text-gray-400 text-sm">
                I'm currently open to new opportunities and exciting projects. Let's discuss how we can work together!
              </p>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="bg-[#1f2937] border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-900/50 border border-green-500/50 text-green-300"
                    : "bg-red-900/50 border border-red-500/50 text-red-300"
                }`}
              >
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

