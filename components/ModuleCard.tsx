import React from 'react';
import { motion } from 'framer-motion';
import { TutorialModule } from '../types';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

interface ModuleCardProps {
  module: TutorialModule;
  onClick: () => void;
  index: number;
  onOpenLinks: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick, index, onOpenLinks }) => {
  const Icon = module.icon;
  const hasResources = (module.links && module.links.length > 0) || (module.videos && module.videos.length > 0);

  const handleLinksClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenLinks(module.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="w-full bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6 cursor-pointer flex flex-col h-full relative overflow-hidden group"
      onClick={onClick}
    >
      {/* Decoration Circle */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 ${module.color.replace('text-', 'bg-')}`} />

      <div className="mb-4">
        <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600">
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
        {module.title}
      </h3>

      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
        {module.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        {/* Start Tutorial Block */}
        <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors bg-blue-50/50 group-hover:bg-blue-50 px-4 py-2 rounded-lg">
          <span>Iniciar Tutorial</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Links Button */}
        {hasResources && (
          <button
            onClick={handleLinksClick}
            className="flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors z-10 cursor-pointer"
            title="Links e Vídeos"
          >
            <LinkIcon className="w-5 h-5 cursor-pointer" />
          </button>
        )}
      </div>

      {/* Bottom Orange Accent */}
      <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ModuleCard;
