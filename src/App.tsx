import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

import { usePortfolioStore } from './store/usePortfolioStore';
import { ParticleBackground } from './components/3d/ParticleBackground';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/common/Navbar';
import { FloatingDock } from './components/common/FloatingDock';
import { CommandPalette } from './components/common/CommandPalette';

import { HeroSection } from './features/hero/HeroSection';
import { AboutSection } from './features/about/AboutSection';
import { SkillsSection } from './features/skills/SkillsSection';
import { ServicesSection } from './features/services/ServicesSection';
import { ProjectsSection } from './features/projects/ProjectsSection';
import { ProjectDetailModal } from './features/projects/ProjectDetailModal';
import { ExperienceSection } from './features/experience/ExperienceSection';
import { GitHubSection } from './features/github/GitHubSection';
import { TestimonialsSection } from './features/testimonials/TestimonialsSection';
import { DevDashboardSection } from './features/dashboard/DevDashboardSection';
import { BlogSection } from './features/blog/BlogSection';
import { BlogDetailModal } from './features/blog/BlogDetailModal';
import { PricingSection } from './features/pricing/PricingSection';
import { FAQSection } from './features/faq/FAQSection';
import { ContactSection } from './features/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { DEVELOPER_PROFILE } from './lib/constants';

export function App() {
  const { theme, setTheme, incrementVisitorCount } = usePortfolioStore();

  useEffect(() => {
    // Sync theme class on mount
    setTheme(theme);
    // Track visitor
    incrementVisitorCount();
  }, []);

  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-blue-600 selection:text-white transition-colors duration-300">
        
        {/* SEO Meta Tags */}
        <Helmet>
          <title>{`${DEVELOPER_PROFILE.name} - ${DEVELOPER_PROFILE.role}`}</title>
          <meta name="description" content={DEVELOPER_PROFILE.tagline} />
          <meta name="keywords" content="Software Architect, React 19, TypeScript, Senior Full Stack Engineer, Web Developer Portfolio, Next.js, Cloud Architecture, UI/UX Designer" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${DEVELOPER_PROFILE.name} - ${DEVELOPER_PROFILE.role}`} />
          <meta property="og:description" content={DEVELOPER_PROFILE.tagline} />
          <meta property="og:image" content={DEVELOPER_PROFILE.avatarUrl} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${DEVELOPER_PROFILE.name} - ${DEVELOPER_PROFILE.role}`} />
          <meta name="twitter:description" content={DEVELOPER_PROFILE.tagline} />
          <meta name="twitter:image" content={DEVELOPER_PROFILE.avatarUrl} />
        </Helmet>

        {/* Global Particle Background */}
        <ParticleBackground />

        {/* Custom Animated Cursor */}
        <CustomCursor />

        {/* Glass Navigation Header */}
        <Navbar />

        {/* Floating Dock Navigation */}
        <FloatingDock />

        {/* Command Palette (Cmd + K Modal) */}
        <CommandPalette />

        {/* Project Detail Modal */}
        <ProjectDetailModal />

        {/* Blog Article Reader Modal */}
        <BlogDetailModal />

        {/* Toast Notification Provider */}
        <Toaster position="bottom-right" richColors />

        {/* Main Content Sections */}
        <main className="relative z-10 space-y-0">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <ExperienceSection />
          <GitHubSection />
          <DevDashboardSection />
          <TestimonialsSection />
          <BlogSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </HelmetProvider>
  );
}

export default App;
