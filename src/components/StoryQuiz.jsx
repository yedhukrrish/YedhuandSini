import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Award } from 'lucide-react';

const StoryQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const questions = [
        {
            question: "How long was the 'famous rant' that I went on?",
            options: ["1 Hour", "2 Hours", "3 Hours", "All Night"],
            correct: 2
        },
        {
            question: "How many times did I (stubbornly) say no before matching your commitment?",
            options: ["10 Times", "25 Times", "49 Times", "Lost Count"],
            correct: 2
        },
        {
            question: "When did I finally realize you were the one I wanted forever with?",
            options: ["Our First Snap", "Jan 1, 2023", "Sister's Wedding", "Paris Airport"],
            correct: 1
        },
        {
            question: "Which platform did our story first begin on?",
            options: ["Instagram", "WhatsApp", "Snapchat", "Telegram"],
            correct: 2
        },
        {
            question: "What is the secret to our journey?",
            options: ["My Stubbornness", "Your Patience", "Both", "Magic"],
            correct: 1
        }
    ];

    const handleAnswer = (index) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(index);
        const correct = index === questions[currentStep].correct;
        setIsCorrect(correct);
        if (correct) setScore(score + 1);

        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setIsFinished(true);
            }
        }, 1500);
    };

    return (
        <div className="w-full max-w-2xl bg-wednesday-purple-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-wednesday-purple-500/30 shadow-2xl">
            <AnimatePresence mode="wait">
                {!isFinished ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="flex justify-between items-center text-wednesday-purple-400 font-medium">
                            <span className="uppercase tracking-widest text-sm">Question {currentStep + 1}/{questions.length}</span>
                            <span>Score: {score}</span>
                        </div>

                        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-wednesday-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                            />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            {questions[currentStep].question}
                        </h3>

                        <div className="grid gap-4">
                            {questions[currentStep].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    disabled={selectedAnswer !== null}
                                    className={`p-6 rounded-2xl text-left transition-all border-2 flex items-center justify-between ${selectedAnswer === index
                                            ? (index === questions[currentStep].correct ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-red-500/20 border-red-500 text-red-400')
                                            : (selectedAnswer !== null && index === questions[currentStep].correct ? 'border-green-500 text-green-400' : 'bg-white/5 border-transparent text-gray-300 hover:bg-white/10')
                                        }`}
                                >
                                    <span className="text-lg font-medium">{option}</span>
                                    {selectedAnswer === index && (
                                        index === questions[currentStep].correct ? <CheckCircle size={24} /> : <XCircle size={24} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-8"
                    >
                        <Award className="w-24 h-24 text-yellow-400 mx-auto animate-bounce" />
                        <h3 className="text-4xl font-cursive text-white">Quiz Complete!</h3>
                        <div className="text-6xl font-bold text-wednesday-purple-400">
                            {score}/{questions.length}
                        </div>
                        <p className="text-xl text-gray-300 italic">
                            {score === questions.length
                                ? "You know me better than anyone. I'm so lucky! ❤️"
                                : score > 3
                                    ? "Almost perfect! Your memory is as beautiful as you are. 💕"
                                    : "You were too busy looking at me to pay attention to the details, huh? 😉"}
                        </p>
                        <button
                            onClick={() => {
                                setCurrentStep(0);
                                setScore(0);
                                setIsFinished(false);
                                setSelectedAnswer(null);
                                setIsCorrect(null);
                            }}
                            className="text-wednesday-purple-400 hover:text-white transition-colors underline underline-offset-8"
                        >
                            Try Again?
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StoryQuiz;
