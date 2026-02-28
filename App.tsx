import React, { useState } from 'react';
import { TUTORIAL_MODULES } from './constants';
import { ViewState } from './types';
import Header from './components/Header';
import ModuleCard from './components/ModuleCard';
import TutorialViewer from './components/TutorialViewer';
import LinksModal from './components/LinksModal';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('dashboard');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [linksModalModuleId, setLinksModalModuleId] = useState<string | null>(null);

  const activeModule = TUTORIAL_MODULES.find(m => m.id === activeModuleId);
  const linksModule = TUTORIAL_MODULES.find(m => m.id === linksModalModuleId);

  const handleModuleSelect = (id: string) => {
    setActiveModuleId(id);
    setViewState('tutorial');
  };

  const handleGoHome = () => {
    setViewState('dashboard');
    setActiveModuleId(null);
  };

  const renderDashboard = () => (
    <motion.div
      key="dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center mb-12">

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Tutoriais e-SUS APS
        </h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Selecione um módulo abaixo para iniciar o treinamento interativo sobre as funcionalidades do sistema.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {TUTORIAL_MODULES.map((module, index) => (
          <div key={module.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
            <ModuleCard
              module={module}
              index={index}
              onClick={() => handleModuleSelect(module.id)}
              onOpenLinks={setLinksModalModuleId}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderTutorial = () => {
    if (!activeModule) return null;

    return (
      <motion.div
        key="tutorial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full"
      >
        <TutorialViewer
          module={activeModule}
          onComplete={handleGoHome}
        />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header onGoHome={handleGoHome} isHome={viewState === 'dashboard'} />

      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          {viewState === 'dashboard' ? renderDashboard() : renderTutorial()}
        </AnimatePresence>

        {/* Links Modal */}
        <LinksModal
          isOpen={!!linksModule}
          onClose={() => setLinksModalModuleId(null)}
          title={linksModule?.title || ''}
          links={linksModule?.links}
          videos={linksModule?.videos}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Treinamento e-SUS APS. Baseado na documentação oficial.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;