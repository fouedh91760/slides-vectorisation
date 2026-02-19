"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizClientProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
  slug: string;
}

export default function QuizClient({ title, description, questions, slug }: QuizClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const progress = ((currentQuestion + (hasAnswered ? 1 : 0)) / totalQuestions) * 100;

  const handleValidate = useCallback(() => {
    if (selectedOption === null) return;
    setHasAnswered(true);
    if (selectedOption === question.correctIndex) {
      setScore((prev) => prev + 1);
    }
  }, [selectedOption, question.correctIndex]);

  const handleNext = useCallback(() => {
    if (currentQuestion + 1 >= totalQuestions) {
      setIsFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  }, [currentQuestion, totalQuestions]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsFinished(false);
  }, []);

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "Excellent ! Vous etes pret pour l'examen !";
    if (percentage >= 60) return "Bien ! Continuez a reviser pour ameliorer votre score.";
    if (percentage >= 40) return "Des efforts sont necessaires. Revisez les cours et reessayez.";
    return "Il est recommande de suivre une formation pour mieux preparer l'examen.";
  };

  const getScoreColor = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  // Final score screen
  if (isFinished) {
    return (
      <>
        {/* Hero */}
        <section className="hero-gradient text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-extrabold mb-2">
              Quiz {title} - Resultats
            </h1>
            <p className="text-gray-300">{description}</p>
          </div>
        </section>

        <section className="py-16 bg-[var(--cab-gray)]">
          <div className="max-w-xl mx-auto px-4">
            <div className="card text-center border-2 border-[var(--cab-gold)]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--cab-gray)] flex items-center justify-center">
                <svg className={`w-10 h-10 ${getScoreColor()}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {(score / totalQuestions) >= 0.6 ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-[var(--cab-blue)] mb-2">Quiz termine !</h2>
              <p className="text-gray-500 mb-6">{title}</p>

              <div className={`text-5xl font-extrabold mb-2 ${getScoreColor()}`}>
                {score}/{totalQuestions}
              </div>
              <div className="text-gray-500 mb-4">
                {Math.round((score / totalQuestions) * 100)}% de bonnes reponses
              </div>

              <p className="text-gray-600 mb-8 font-medium">{getScoreMessage()}</p>

              {/* Score bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(score / totalQuestions) * 100}%`,
                    backgroundColor:
                      (score / totalQuestions) >= 0.8
                        ? "#22c55e"
                        : (score / totalQuestions) >= 0.6
                        ? "#eab308"
                        : "#ef4444",
                  }}
                />
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={handleRestart} className="btn-gold text-center cursor-pointer">
                  Recommencer le quiz
                </button>
                <Link href="/quiz" className="btn-blue text-center">
                  Choisir un autre quiz
                </Link>
                <Link
                  href="/demande-de-devis"
                  className="text-sm text-[var(--cab-gold)] font-semibold hover:underline"
                >
                  Preparez-vous avec nos formations VTC &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Quiz in progress
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-2">
            Quiz {title}
          </h1>
          <p className="text-gray-300">{description}</p>
        </div>
      </section>

      <section className="py-12 bg-[var(--cab-gray)] min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} sur {totalQuestions}
              </span>
              <span className="text-sm font-medium text-[var(--cab-gold)]">
                Score : {score}/{currentQuestion + (hasAnswered ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[var(--cab-gold)] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className="card border border-gray-100">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1 bg-[var(--cab-blue)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Question {currentQuestion + 1}
              </div>
              <h2 className="text-lg lg:text-xl font-bold text-[var(--cab-blue)]">
                {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => {
                let optionClasses =
                  "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-start gap-3";

                if (hasAnswered) {
                  if (index === question.correctIndex) {
                    optionClasses += " border-green-500 bg-green-50 text-green-800";
                  } else if (index === selectedOption && index !== question.correctIndex) {
                    optionClasses += " border-red-500 bg-red-50 text-red-800";
                  } else {
                    optionClasses += " border-gray-200 bg-gray-50 text-gray-400 cursor-default";
                  }
                } else {
                  if (index === selectedOption) {
                    optionClasses +=
                      " border-[var(--cab-blue)] bg-blue-50 text-[var(--cab-blue)]";
                  } else {
                    optionClasses +=
                      " border-gray-200 bg-white text-gray-700 hover:border-[var(--cab-blue-light)] hover:bg-blue-50/50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => !hasAnswered && setSelectedOption(index)}
                    disabled={hasAnswered}
                    className={optionClasses}
                  >
                    <span
                      className={`w-7 h-7 shrink-0 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                        hasAnswered && index === question.correctIndex
                          ? "border-green-500 bg-green-500 text-white"
                          : hasAnswered && index === selectedOption && index !== question.correctIndex
                          ? "border-red-500 bg-red-500 text-white"
                          : index === selectedOption
                          ? "border-[var(--cab-blue)] bg-[var(--cab-blue)] text-white"
                          : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {hasAnswered && index === question.correctIndex ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : hasAnswered && index === selectedOption && index !== question.correctIndex ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </span>
                    <span className="pt-0.5">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation (shown after answering) */}
            {hasAnswered && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  selectedOption === question.correctIndex
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {selectedOption === question.correctIndex ? (
                    <>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-green-700">Bonne reponse !</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-red-700">Mauvaise reponse</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{question.explanation}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between">
              <Link href="/quiz" className="text-sm text-gray-500 hover:text-[var(--cab-blue)]">
                &larr; Retour aux quiz
              </Link>
              {!hasAnswered ? (
                <button
                  onClick={handleValidate}
                  disabled={selectedOption === null}
                  className={`btn-gold cursor-pointer ${
                    selectedOption === null ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Valider
                </button>
              ) : (
                <button onClick={handleNext} className="btn-blue cursor-pointer">
                  {currentQuestion + 1 >= totalQuestions ? "Voir les resultats" : "Question suivante"} &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
