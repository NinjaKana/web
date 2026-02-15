"use client";

import { useState, useEffect } from "react";
import { generateQuizQuestions, type Kana } from "@/lib/kana-data";

type Question = {
  kana: Kana;
  options: string[];
  correctAnswer: string;
};

type QuizState = "intro" | "playing" | "result";

export default function Quiz() {
  const [state, setState] = useState<QuizState>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const startQuiz = () => {
    setQuestions(generateQuizQuestions(10));
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setState("playing");
  };

  const handleAnswer = (answer: string) => {
    if (showFeedback) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === questions[currentIndex].correctAnswer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setState("result");
      }
    }, 1000);
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage <= 30) {
      return {
        title: "Tu débutes !",
        message: "NinjaKana est fait pour toi. En 30 jours, tu maîtriseras tous les kana.",
        emoji: "🌱",
      };
    } else if (percentage <= 70) {
      return {
        title: "Pas mal !",
        message: "Tu as des bases, mais tu peux progresser rapidement avec NinjaKana.",
        emoji: "💪",
      };
    } else {
      return {
        title: "Impressionnant !",
        message: "Tu maîtrises déjà bien les kana. Prêt pour les kanji ?",
        emoji: "🔥",
      };
    }
  };

  if (state === "intro") {
    return (
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 text-center">
        <div className="text-6xl mb-6">🎯</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Teste ton niveau de kana
        </h3>
        <p className="text-indigo-200 mb-8 max-w-md mx-auto">
          10 questions pour évaluer ta connaissance des hiragana et katakana.
          Ça prend moins de 2 minutes.
        </p>
        <button
          onClick={startQuiz}
          className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-indigo-100 transition-all hover:scale-105"
        >
          Commencer le quiz
        </button>
      </div>
    );
  }

  if (state === "playing" && questions.length > 0) {
    const question = questions[currentIndex];
    return (
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <span className="text-indigo-300 font-medium">
            Question {currentIndex + 1}/{questions.length}
          </span>
          <span className="text-indigo-300 font-medium">
            Score: {score}/{currentIndex + (showFeedback ? 1 : 0)}
          </span>
        </div>

        <div className="text-center mb-8">
          <div className="text-8xl md:text-9xl font-bold text-white mb-4">
            {question.kana.character}
          </div>
          <p className="text-indigo-300">
            {question.kana.type === "hiragana" ? "Hiragana" : "Katakana"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {question.options.map((option) => {
            let buttonClass = "p-4 rounded-xl font-bold text-lg transition-all ";

            if (showFeedback) {
              if (option === question.correctAnswer) {
                buttonClass += "bg-green-500 text-white";
              } else if (option === selectedAnswer) {
                buttonClass += "bg-red-500 text-white";
              } else {
                buttonClass += "bg-white/20 text-white/50";
              }
            } else {
              buttonClass +=
                "bg-white/20 text-white hover:bg-white/30 hover:scale-105 cursor-pointer";
            }

            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < currentIndex
                    ? "bg-indigo-400"
                    : i === currentIndex
                    ? "bg-white"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (state === "result") {
    const result = getResultMessage();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 text-center">
        <div className="text-6xl mb-6">{result.emoji}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {result.title}
        </h3>
        <div className="text-5xl font-bold text-indigo-300 mb-4">
          {score}/{questions.length}
        </div>
        <p className="text-indigo-200 mb-8 max-w-md mx-auto">{result.message}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="https://apps.apple.com/app/id6757958764"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.apprendre.japonais"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Play Store
          </a>
        </div>

        <button
          onClick={startQuiz}
          className="text-indigo-300 hover:text-white transition-colors"
        >
          Refaire le quiz
        </button>
      </div>
    );
  }

  return null;
}
