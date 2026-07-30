import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Users, 
  Clock, 
  Zap, 
  MessageSquare, 
  Globe2, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { useTranslation } from 'react-i18next';

export const DevDashboardSection: React.FC = () => {
  const visitorAnalytics = usePortfolioStore((state) => state.visitorAnalytics);
  const { t } = useTranslation(['portfolio', 'common']);

  return (
    <section id="dashboard" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span>{t('dashboard.badge', 'Developer Telemetry')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t('dashboard.title', 'Live System & Portfolio')}{' '}
            <span className="gradient-text-primary">{t('dashboard.highlight', 'Analytics')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t('dashboard.subtitle', 'Real-time telemetry showing site performance, active connections, and visitor metrics.')}
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Total Visitors */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400">
                {t('dashboard.totalVisitors', 'Total Visitors')}
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              {visitorAnalytics.totalVisitors.toLocaleString()}
            </div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t('dashboard.vsMonth', '+12% vs last month')}
            </p>
          </div>

          {/* Card 2: Active Now */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400">
                {t('dashboard.activeNow', 'Active Now')}
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              {visitorAnalytics.activeNow}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-semibold">
              {t('dashboard.liveSessions', 'Live sessions connected')}
            </p>
          </div>

          {/* Card 3: System Uptime */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400">
                {t('dashboard.systemUptime', 'System Uptime')}
              </span>
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              {visitorAnalytics.systemUptime}
            </div>
            <p className="text-xs text-slate-400 font-semibold">
              {t('dashboard.network', 'Vercel Global Edge Network')}
            </p>
          </div>

          {/* Card 4: API Latency */}
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 glow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400">
                {t('dashboard.edgeLatency', 'Edge Latency')}
              </span>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              {visitorAnalytics.apiLatencyMs} ms
            </div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 font-semibold">
              {t('dashboard.sub50ms', 'Sub-50ms Response Speed')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
