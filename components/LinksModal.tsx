import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Book, SquarePlay, FileText, MonitorPlay } from 'lucide-react';
import { ResourceLink } from '../types';

interface LinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  links?: ResourceLink[];
  videos?: ResourceLink[];
}

const LinksModal: React.FC<LinksModalProps> = ({ isOpen, onClose, title, links, videos }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[85vh]"
          >
            <div className="flex items-center justify-between mb-6 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Book className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Links Úteis</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-500 mb-6 flex-shrink-0">
              Recursos complementares para o módulo: <br />
              <span className="font-semibold text-slate-700">{title}</span>
            </p>

            <div className="overflow-y-auto pr-1 space-y-6">
              {links && links.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-3 h-3" />
                    Documentação
                  </h4>
                  <div className="space-y-2">
                    {links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {videos && videos.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <MonitorPlay className="w-3 h-3" />
                    Vídeos
                  </h4>
                  <div className="space-y-2">
                    {videos.map((video, idx) => (
                      <a
                        key={idx}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-all group"
                      >
                        <SquarePlay className="w-4 h-4 text-slate-400 group-hover:text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">
                          {video.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end flex-shrink-0">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LinksModal;