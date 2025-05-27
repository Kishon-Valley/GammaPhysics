import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader, Mail, Clock, ChevronDown, ChevronUp, ExternalLink, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      alert('Please fill in all fields');
      return;
    }

    try {
      console.log('Attempting to send email via EmailJS...');
      
      // Send email using EmailJS with direct template parameters
      const templateParams = {
        from_name: formData.name,
        email: formData.email,         // Changed from reply_to to email
        subject: formData.subject,
        message: formData.message,
        to_name: 'LMTsoftware Team'
      };
      
      console.log('Sending with template params:', templateParams);
      
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('EmailJS result:', result.text);
      
      if (result.text === 'OK') {
        console.log('Email sent successfully');
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.warn('Unexpected response from EmailJS');
        setStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I access the physics simulations?",
      answer: "Our interactive physics simulations are available on the Simulations page. Click on any simulation to start exploring physics concepts visually."
    },
    {
      question: "Are the study materials suitable for university-level physics?",
      answer: "Yes, our content is designed for university students studying physics, with materials covering first-year to fourth-year topics in appropriate depth."
    },
    {
      question: "Can I suggest new topics or content?",
      answer: "Absolutely! We welcome suggestions for new topics. Please use the contact form on this page to send us your ideas."
    },
    {
      question: "Is the content regularly updated?",
      answer: "Yes, we continuously update our content to ensure accuracy and to add new topics and simulations based on user feedback and advances in physics education."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      {/* Header Section */}
      <div className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white relative overflow-hidden">
        {/* Subtle decorative pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%221%22 fill-rule=%22evenodd%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Oval container for content */}
            <div className="relative mx-auto max-w-3xl">
              {/* Oval background */}
              <div className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/20 shadow-lg border border-blue-200 dark:border-blue-700/30 animate-pulse"></div>
              
              {/* Content inside oval */}
              <div className="relative py-12 px-10">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 text-gray-800 dark:text-white">
                  Get in Touch
                </h1>
                <div className="flex justify-center items-center mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
                  <div className="mx-3 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700/50 rounded-full">CONTACT US</div>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
                </div>
                <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Have questions about physics concepts or suggestions for our platform?
                  <br />
                  <span className="font-medium text-gray-800 dark:text-white">We're here to help you succeed.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Reach out to us through any of these channels or use the form to send us a message.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <Mail className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">lmtsoftwares@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">WhatsApp The Team</h3>
                  <a 
                    href="https://wa.me/233592836387" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    <span>0592836387</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Chat Now</span>
                  </a>
                </div>
                <Clock className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office Hours</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <span className="font-medium">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We'll get back to you as soon as possible.
                </p>

                {/* Status Messages */}
                {status !== 'idle' && (
                  <div className={`mt-6 p-4 rounded-md ${
                    status === 'success' 
                      ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : status === 'error'
                      ? 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    <div className="flex items-center">
                      {status === 'success' ? (
                        <CheckCircle className="mr-2 w-5 h-5" />
                      ) : status === 'error' ? (
                        <AlertCircle className="mr-2 w-5 h-5" />
                      ) : (
                        <Loader className="mr-2 w-5 h-5 animate-spin" />
                      )}
                      <p>
                        {status === 'success' 
                          ? 'Message sent successfully! We\'ll get back to you soon.'
                          : status === 'error'
                          ? 'Failed to send message. Please try again.'
                          : 'Sending message...'}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="block mt-1 w-full px-4 py-3 rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="block mt-1 w-full px-4 py-3 rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="block mt-1 w-full px-4 py-3 rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="What's your message about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="block mt-1 w-full px-4 py-3 rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex justify-center items-center px-6 py-3 w-full text-white bg-blue-600 rounded-md border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="mr-2 w-5 h-5" />
                        Message Sent!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <AlertCircle className="mr-2 w-5 h-5" />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
                
                {/* Discord Channel Link */}
                <div className="mt-8 p-5 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100 dark:border-indigo-800">
                  <div className="flex items-center mb-3">
                    <ExternalLink className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Join Our Community</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    For faster responses and to connect with other physics students, join our Discord channel.
                  </p>
                  <a
                    href="https://discord.gg/f82VNHpynP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Join Discord Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}