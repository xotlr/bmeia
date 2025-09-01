"use client";

import { useState, useEffect } from "react";
import { Question } from "@/lib/quiz-data";
import { CheckCircle, XCircle, ChevronRight } from "lucide-react";

interface QuizCardProps {
  question: Question;
  onAnswer: (questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuizCard({ question, onAnswer, questionNumber, totalQuestions }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswered(false);
  }, [question.id]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setAnswered(true);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === question.correctAnswer;
    onAnswer(question.id, selectedAnswer, isCorrect);
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return "bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 hover:bg-stone-50 dark:hover:bg-stone-700 transition-all duration-200 cursor-pointer";
    }
    
    if (index === question.correctAnswer) {
      return "bg-green-50 border-2 border-green-500 text-green-700";
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-red-50 dark:bg-red-900/20 border-2 border-red-500 text-red-700 dark:text-red-400";
    }
    
    return "bg-stone-100 dark:bg-stone-700 border-2 border-stone-300 dark:border-stone-600 text-stone-500 dark:text-stone-400";
  };

  const getOptionIcon = (index: number) => {
    if (!showResult) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-600" />;
    }
    
    return null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-stone-800 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-700 p-4 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Frage {questionNumber} von {totalQuestions}
          </span>
          <div className="w-32 h-2 bg-stone-200 dark:bg-stone-700 rounded-full">
            <div 
              className="h-full bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={answered}
            className={`w-full p-3 sm:p-4 rounded-xl text-left text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-between transform hover:scale-101 min-h-[48px] ${getOptionStyle(index)}`}
          >
            <span>{option}</span>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>
      
      {showResult && (
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-green-600 font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Richtig!
                </span>
              ) : (
                <span className="text-red-600 font-semibold">
                  Leider falsch. Die richtige Antwort ist: <strong>{question.options[question.correctAnswer]}</strong>
                </span>
              )}
            </p>
          </div>
          <button
            onClick={handleNext}
            className="w-full p-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Weiter</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}