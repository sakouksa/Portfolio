import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { DEVELOPER_PROFILE } from '../../lib/constants';
import { usePortfolioStore } from '../../store/usePortfolioStore';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const { selectedService, incrementMessageCount } = usePortfolioStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: selectedService ? selectedService.title : '',
      budget: '$5,000 - $10,000',
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    incrementMessageCount();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    toast.success('Message sent successfully!', {
      description: `Thank you ${data.name}, I will respond to your inquiry within 24 hours.`,
    });

    reset();
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Let's Build Something <span className="gradient-text-primary">Extraordinary</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project in mind, lead role opportunity, or technical question? Drop me a message below.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-violet-400 group-hover:bg-white group-hover:text-blue-600 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Email</span>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-white">
                      {DEVELOPER_PROFILE.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${DEVELOPER_PROFILE.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 group-hover:bg-white group-hover:text-violet-600 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Phone</span>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-white">
                      {DEVELOPER_PROFILE.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Location</span>
                    <span className="font-semibold text-sm text-slate-900 dark:text-white">
                      {DEVELOPER_PROFILE.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="block text-xs font-semibold text-slate-400 uppercase mb-3">
                  Follow & Connect:
                </span>
                <div className="flex gap-3">
                  <a
                    href={DEVELOPER_PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={DEVELOPER_PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={DEVELOPER_PROFILE.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 gradient-border shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-500">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-500">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      placeholder="Project Inquiry / Lead Role"
                      className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                    />
                    {errors.subject && (
                      <span className="text-xs text-rose-500">{errors.subject.message}</span>
                    )}
                  </div>

                  {/* Budget Dropdown */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Estimated Budget
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                    >
                      <option value="< $5,000">&lt; $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Project Details & Message *
                  </label>
                  <textarea
                    rows={5}
                    {...register('message')}
                    placeholder="Tell me about your product goals, timeline, and requirements..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
