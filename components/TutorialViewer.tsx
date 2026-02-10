import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TutorialModule } from '../types';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
  Map,
  Users,
  Star,
  Merge,
  Settings,
  Calendar,
  User,
  Home,
  Lock,
  List,
  Filter,
  BarChart,
  Search,
  Stethoscope,
  Syringe,
  FileText,
  ClipboardList,
  CheckSquare
} from 'lucide-react';

interface TutorialViewerProps {
  module: TutorialModule;
  onComplete: () => void;
}

const TutorialViewer: React.FC<TutorialViewerProps> = ({ module, onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = module.steps[currentStepIndex];
  const isLastStep = currentStepIndex === module.steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // Helper to render dynamic icons based on string ID
  const renderIcon = (iconName?: string) => {
    const className = "w-12 h-12 text-blue-600 mb-4";
    switch (iconName) {
      case 'info': return <Info className={className} />;
      case 'check': return <CheckCircle2 className={className} />;
      case 'star': return <Star className={className} />;
      case 'merge': return <Merge className={className} />;
      case 'check-circle': return <CheckCircle2 className={className} />;
      case 'settings': return <Settings className={className} />;
      case 'calendar': return <Calendar className={className} />;
      case 'user-search': return <Search className={className} />;
      case 'lock': return <Lock className={className} />;
      case 'home': return <Home className={className} />;
      case 'users': return <Users className={className} />;
      case 'user': return <User className={className} />;
      case 'alert': return <AlertTriangle className={className} />;
      case 'bar-chart': return <BarChart className={className} />;
      case 'list': return <List className={className} />;
      case 'filter': return <Filter className={className} />;
      case 'map': return <Map className={className} />;
      // New icons for Atendimentos
      case 'stethoscope': return <Stethoscope className={className} />;
      case 'syringe': return <Syringe className={className} />;
      case 'file-text': return <FileText className={className} />;
      case 'clipboard': return <ClipboardList className={className} />;
      case 'check-square': return <CheckSquare className={className} />;
      default: return <Info className={className} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-[calc(100vh-64px)] flex flex-col">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          <span>{module.title}</span>
          <span>Passo {currentStepIndex + 1} de {module.steps.length}</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStepIndex + 1) / module.steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12"
          >
            <div className="flex flex-col items-center text-center mb-8">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                {renderIcon(currentStep.icon)}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {currentStep.title}
              </h2>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {currentStep.content.map((paragraph, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start"
                >
                  <div className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-orange-500" />
                  <p className="text-slate-600 text-lg leading-relaxed text-left">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>

            {currentStep.note && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg max-w-2xl mx-auto"
              >
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-800 font-medium">
                    {currentStep.note}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex justify-between items-center max-w-4xl mx-auto w-full">
        <button
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
            currentStepIndex === 0 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Anterior
        </button>

        <button
          onClick={handleNext}
          className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm font-medium"
        >
          {isLastStep ? 'Concluir' : 'Próximo'}
          {isLastStep ? (
            <CheckCircle2 className="w-4 h-4 ml-2" />
          ) : (
            <ChevronRight className="w-4 h-4 ml-2" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TutorialViewer;