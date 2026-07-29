import React from 'react';
import { 
  FaReact, 
  FaLaravel, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaFontAwesome,
  FaBootstrap
} from 'react-icons/fa6';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiRedis, 
  SiVercel, 
  SiNextdotjs, 
  SiGraphql, 
  SiStripe, 
  SiVite, 
  SiAntdesign,
  SiExpress,
  SiSocketdotio
} from 'react-icons/si';
import { 
  Code2, 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe 
} from 'lucide-react';

interface TechTagBadgeProps {
  tag: string;
  size?: 'sm' | 'md';
}

export const TechTagBadge: React.FC<TechTagBadgeProps> = ({ tag, size = 'sm' }) => {
  const normalized = tag.toLowerCase().trim();

  const getIcon = () => {
    if (normalized.includes('react')) return <FaReact className="text-[#61DAFB] shrink-0" />;
    if (normalized.includes('laravel')) return <FaLaravel className="text-[#FF2D20] shrink-0" />;
    if (normalized.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4] shrink-0" />;
    if (normalized.includes('typescript')) return <SiTypescript className="text-[#3178C6] shrink-0" />;
    if (normalized.includes('postgresql') || normalized.includes('postgres')) return <SiPostgresql className="text-[#4169E1] shrink-0" />;
    if (normalized.includes('zustand')) return <Zap className="text-[#F59E0B] shrink-0 w-3.5 h-3.5" />;
    if (normalized.includes('rest') || normalized.includes('api')) return <Code2 className="text-[#10B981] shrink-0 w-3.5 h-3.5" />;
    if (normalized.includes('html')) return <FaHtml5 className="text-[#E34F26] shrink-0" />;
    if (normalized.includes('css3') || normalized.includes('css')) return <FaCss3Alt className="text-[#1572B6] shrink-0" />;
    if (normalized.includes('javascript') || normalized.includes('js')) return <FaJs className="text-[#F7DF1E] shrink-0" />;
    if (normalized.includes('vercel')) return <SiVercel className="text-slate-900 dark:text-white shrink-0" />;
    if (normalized.includes('responsive')) return <Smartphone className="text-[#8B5CF6] shrink-0 w-3.5 h-3.5" />;
    if (normalized.includes('fontawesome')) return <FaFontAwesome className="text-[#528DD7] shrink-0" />;
    if (normalized.includes('node')) return <FaNodeJs className="text-[#5FA04E] shrink-0" />;
    if (normalized.includes('express')) return <SiExpress className="text-slate-700 dark:text-slate-200 shrink-0" />;
    if (normalized.includes('docker')) return <FaDocker className="text-[#2496ED] shrink-0" />;
    if (normalized.includes('redis')) return <SiRedis className="text-[#DC382D] shrink-0" />;
    if (normalized.includes('next')) return <SiNextdotjs className="text-slate-900 dark:text-white shrink-0" />;
    if (normalized.includes('graphql')) return <SiGraphql className="text-[#E535AB] shrink-0" />;
    if (normalized.includes('microservices')) return <Layers className="text-[#3B82F6] shrink-0 w-3.5 h-3.5" />;
    if (normalized.includes('socket')) return <SiSocketdotio className="text-slate-900 dark:text-white shrink-0" />;
    if (normalized.includes('aws')) return <FaAws className="text-[#FF9900] shrink-0" />;
    if (normalized.includes('stripe')) return <SiStripe className="text-[#635BFF] shrink-0" />;
    if (normalized.includes('oauth') || normalized.includes('auth')) return <ShieldCheck className="text-[#10B981] shrink-0 w-3.5 h-3.5" />;
    if (normalized.includes('vite')) return <SiVite className="text-[#646CFF] shrink-0" />;
    if (normalized.includes('ant design') || normalized.includes('antd')) return <SiAntdesign className="text-[#0170FE] shrink-0" />;
    if (normalized.includes('bootstrap')) return <FaBootstrap className="text-[#7952B3] shrink-0" />;

    return <Globe className="text-blue-500 shrink-0 w-3.5 h-3.5" />;
  };

  const isSmall = size === 'sm';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-lg font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-blue-400 dark:hover:border-violet-500 transition-colors ${
      isSmall ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
    }`}>
      <span className="text-xs">{getIcon()}</span>
      <span>{tag}</span>
    </span>
  );
};
