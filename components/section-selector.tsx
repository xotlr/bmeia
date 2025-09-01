"use client";

import { QuizSection } from "@/lib/quiz-data";
import { ChevronRight, Target, Flag, Globe, Users, MapPin, Calendar, Scale, BookOpen, TrendingUp } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface SectionSelectorProps {
  sections: QuizSection[];
  onSectionSelect: (sectionId: string) => void;
  onStartFullQuiz: () => void;
}

export function SectionSelector({ sections, onSectionSelect, onStartFullQuiz }: SectionSelectorProps) {
  const getSectionIcon = (sectionId: string) => {
    switch (sectionId) {
      case "austrian-politics":
        return <Flag className="w-6 h-6" />;
      case "european-union":
        return <Globe className="w-6 h-6" />;
      case "international-organizations":
        return <Users className="w-6 h-6" />;
      case "geography-neighbors":
        return <MapPin className="w-6 h-6" />;
      case "current-affairs":
        return <Calendar className="w-6 h-6" />;
      case "austrian-law-constitution":
        return <Scale className="w-6 h-6" />;
      case "history-culture":
        return <BookOpen className="w-6 h-6" />;
      case "economics-development":
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      {/* Header */}
      <div className="w-full border-b border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                BMEIA Test
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Fachdienst C-Préalable
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8 pt-8 sm:pt-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Österreichischer Außendienst</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
            Bereite dich perfekt vor
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto">
            Teste dein Wissen für den BMEIA Fachdienst C-Préalable mit unserem interaktiven Quiz
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white dark:bg-stone-800 rounded-3xl shadow-xl border border-stone-200 dark:border-stone-700 p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                Vollständiger Test
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                50 zufällig ausgewählte Fragen aus allen 8 Bereichen
              </p>
            </div>
            <button
              onClick={onStartFullQuiz}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-2xl font-semibold text-lg py-4 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <span>Test starten</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Practice Sections */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
              Gezielt üben
            </h3>
            <p className="text-stone-600 dark:text-stone-400">
              Wähle einen spezifischen Bereich zum Vertiefen
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className="group bg-white dark:bg-stone-800 rounded-3xl border border-stone-200 dark:border-stone-700 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300 hover:shadow-xl hover:shadow-red-100 dark:hover:shadow-red-900/20 transform hover:scale-[1.02] p-6 text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors">
                  {getSectionIcon(section.id)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-1">
                    {section.title}
                  </h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                    {section.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-700 px-2 py-1 rounded-full">
                      {section.questions.length} Fragen
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Scoring Info */}
        <div className="bg-gradient-to-r from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-700 rounded-3xl border border-stone-200 dark:border-stone-600 p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              Bewertungsskala
            </h3>
            <p className="text-stone-600 dark:text-stone-400">
              So wird dein Ergebnis bewertet
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { range: "45-50", label: "Exzellent vorbereitet!", color: "green" },
              { range: "40-44", label: "Sehr gut, du bist ready!", color: "blue" },
              { range: "35-39", label: "Gut, nochmal Schwachstellen anschauen", color: "yellow" },
              { range: "30-34", label: "Besser nochmal intensiv lernen", color: "orange" },
              { range: "< 30", label: "Alarm! Lernguide nochmal durchgehen!", color: "red" },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-stone-700 rounded-2xl p-4 border border-stone-200 dark:border-stone-600">
                <div className={`text-sm font-bold mb-1 ${
                  item.color === 'green' ? 'text-green-600' :
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'yellow' ? 'text-yellow-600' :
                  item.color === 'orange' ? 'text-orange-600' :
                  'text-red-600'
                }`}>
                  {item.range} Punkte
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}