"use client";

import { QuizSection, getScoreMessage } from "@/lib/quiz-data";
import { Trophy, RotateCcw, Home, Target, CheckCircle, XCircle } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  question: string;
  correctAnswer: string;
  selectedAnswerText: string;
}

interface ResultsDashboardProps {
  results: QuizResult[];
  sections: QuizSection[];
  onRestart: () => void;
  onBackToHome: () => void;
  sectionId?: string;
}

export function ResultsDashboard({ 
  results, 
  sections, 
  onRestart, 
  onBackToHome, 
  sectionId 
}: ResultsDashboardProps) {
  const correctAnswers = results.filter(r => r.isCorrect).length;
  const totalQuestions = results.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const scoreMessage = getScoreMessage(correctAnswers, totalQuestions);

  const getSectionResults = () => {
    const sectionResults = new Map();
    
    results.forEach(result => {
      const question = sections
        .flatMap(s => s.questions)
        .find(q => q.id === result.questionId);
      
      if (question) {
        const sectionTitle = sections.find(s => s.id === question.section)?.title || "Unknown";
        if (!sectionResults.has(sectionTitle)) {
          sectionResults.set(sectionTitle, { correct: 0, total: 0 });
        }
        const stats = sectionResults.get(sectionTitle);
        stats.total += 1;
        if (result.isCorrect) stats.correct += 1;
      }
    });
    
    return Array.from(sectionResults.entries()).map(([title, stats]) => ({
      title,
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100)
    }));
  };

  const sectionResults = getSectionResults();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="flex justify-end mb-4 sm:absolute sm:top-4 sm:right-4">
        <ThemeToggle />
      </div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
          <Trophy className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">Quiz beendet!</h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400">{scoreMessage}</p>
      </div>

      <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-700 p-4 sm:p-8 mb-8">
        <div className="text-center mb-6">
          <div className="text-4xl sm:text-6xl font-bold text-red-600 mb-2">{percentage}%</div>
          <div className="text-lg text-stone-600 dark:text-stone-400">
            {correctAnswers} von {totalQuestions} Fragen richtig
          </div>
        </div>

        <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-4 mb-6">
          <div 
            className="bg-red-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {!sectionId && sectionResults.length > 1 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200 mb-4">Ergebnis nach Bereichen:</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {sectionResults.map((section, index) => (
                <div key={index} className="bg-stone-50 dark:bg-stone-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-stone-800 dark:text-stone-200">{section.title}</span>
                    <span className="text-sm text-stone-600 dark:text-stone-400">
                      {section.correct}/{section.total}
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 dark:bg-stone-600 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${section.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-700 p-6 mb-8">
        <h3 className="text-lg font-semibold text-stone-800 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Detaillierte Antworten
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
          {results.map((result, index) => (
            <div 
              key={result.questionId}
              className={`p-4 rounded-xl border-2 ${
                result.isCorrect 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                {result.isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                    Frage {index + 1}: {result.question}
                  </p>
                  <div className="text-sm">
                    <p className={`mb-1 ${result.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      <strong>Deine Antwort:</strong> {result.selectedAnswerText}
                    </p>
                    {!result.isCorrect && (
                      <p className="text-green-700">
                        <strong>Richtige Antwort:</strong> {result.correctAnswer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-200"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Nochmal versuchen</span>
        </button>
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-2 px-6 py-3 bg-stone-600 hover:bg-stone-700 text-white rounded-xl font-semibold transition-all duration-200"
        >
          <Home className="w-5 h-5" />
          <span>Zurück zur Startseite</span>
        </button>
      </div>
    </div>
  );
}