import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { useTranslation } from 'react-i18next';
import { DEVELOPER_PROFILE } from '../../lib/constants';
import { usePortfolioStore } from '../../store/usePortfolioStore';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactSection: React.FC = () => {
  const { incrementMessageCount } = usePortfolioStore();
  const { t } = useTranslation(['portfolio', 'common']);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      incrementMessageCount();
      toast.success(`Thank you ${data.name}! Your message has been sent successfully.`);
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-violet-400 border border-blue-600/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('contact.title')}{' '}
            <span className="gradient-text-primary">{t('contact.highlight')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800">
                {t('contact.infoTitle')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">{t('contact.emailLabel')}</span>
                    <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors text-sm sm:text-base">
                      {DEVELOPER_PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">{t('contact.phoneLabel')}</span>
                    <a href={`tel:${DEVELOPER_PROFILE.phone}`} className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors text-sm sm:text-base">
                      {DEVELOPER_PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">{t('contact.locationLabel')}</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      {t('hero.location')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <span className="block text-xs font-semibold uppercase text-slate-400">{t('contact.follow')}</span>
                <div className="flex gap-3">
                  <a href={DEVELOPER_PROFILE.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={DEVELOPER_PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={DEVELOPER_PROFILE.twitter} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && <p className="text-xs text-rose-500 font-medium">{errors.name.message}</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-xs text-rose-500 font-medium">{errors.email.message}</p>}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.form.subjectLabel')}
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.subject && <p className="text-xs text-rose-500 font-medium">{errors.subject.message}</p>}
                </div>

                {/* Budget Select */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.form.budgetLabel')}
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select range...</option>
                    <option value="< $3k">&lt; $3,000</option>
                    <option value="$3k - $6k">$3,000 - $6,000</option>
                    <option value="$6k - $12k">$6,000 - $12,000</option>
                    <option value="> $12k">&gt; $12,000+</option>
                  </select>
                </div>

              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {t('contact.form.messageLabel')}
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                {errors.message && <p className="text-xs text-rose-500 font-medium">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-heading font-bold text-base text-white bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t('common:buttons.sending', 'Sending Message...')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('common:buttons.sendMessage', 'Send Message')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
