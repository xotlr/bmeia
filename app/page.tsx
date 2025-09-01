"use client";

import { useState } from "react";
import { quizData, Question } from "@/lib/quiz-data";
import { SectionSelector } from "@/components/section-selector";
import { QuizCard } from "@/components/quiz-card";
import { ResultsDashboard } from "@/components/results-dashboard";

interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  question: string;
  correctAnswer: string;
  selectedAnswerText: string;
}

export default function Home() {
  const [currentView, setCurrentView] = useState<"home" | "quiz" | "results">("home");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [currentSectionId, setCurrentSectionId] = useState<string | undefined>();

  const handleSectionSelect = (sectionId: string) => {
    const section = quizData.find(s => s.id === sectionId);
    if (section) {
      setCurrentQuestions(section.questions);
      setCurrentSectionId(sectionId);
      setCurrentQuestionIndex(0);
      setResults([]);
      setCurrentView("quiz");
    }
  };

  const handleStartFullQuiz = () => {
    const allQuestions = quizData.flatMap(section => section.questions);
    setCurrentQuestions(allQuestions);
    setCurrentSectionId(undefined);
    setCurrentQuestionIndex(0);
    setResults([]);
    setCurrentView("quiz");
  };

  const handleAnswer = (questionId: number, selectedAnswer: number, isCorrect: boolean) => {
    const question = currentQuestions.find(q => q.id === questionId);
    if (question) {
      const result: QuizResult = {
        questionId,
        selectedAnswer,
        isCorrect,
        question: question.text,
        correctAnswer: question.options[question.correctAnswer],
        selectedAnswerText: question.options[selectedAnswer],
      };
      
      setResults(prev => [...prev, result]);
      
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentView("results");
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setResults([]);
    setCurrentView("quiz");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setCurrentQuestionIndex(0);
    setResults([]);
    setCurrentQuestions([]);
    setCurrentSectionId(undefined);
  };

  if (currentView === "home") {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 relative">
        <SectionSelector
          sections={quizData}
          onSectionSelect={handleSectionSelect}
          onStartFullQuiz={handleStartFullQuiz}
        />
      </div>
    );
  }

  if (currentView === "quiz" && currentQuestions.length > 0) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex items-center justify-center p-4">
        <QuizCard
          question={currentQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={currentQuestions.length}
        />
      </div>
    );
  }

  if (currentView === "results") {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 relative">
        <ResultsDashboard
          results={results}
          sections={quizData}
          onRestart={handleRestart}
          onBackToHome={handleBackToHome}
          sectionId={currentSectionId}
        />
      </div>
    );
  }

  return null;
}
