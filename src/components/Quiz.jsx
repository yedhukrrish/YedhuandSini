import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, X, HelpCircle, Trophy } from 'lucide-react';

const questions = [
    {
        question: "Where did we first connect?",
        options: ["Instagram", "Snapchat", "College", "Through Friends"],
        correct: 1
    },
    {
        question: "How long was your first rant about not being an alcoholic?",
        options: ["10 minutes", "30 minutes", "3 hours", "All night"],
        correct: 2
    },
    {
        question: "How many times did I reject your proposal (for fun)?",
        options: ["10", "49", "100", "0"],
        correct: 1
    },
    {
        question: "In which year did I finally propose to you?",
        options: ["2022", "2023", "2024", "2025"],
        correct: 2
    },
    {
        question: "What month am I joining you in Paris in 2026?",
        options: ["January", "June", "September", "December"],
        correct: 2
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleOptionClick = (index) => {
        if (selectedOption !== null) return; // Prevent double clicks

        setSelectedOption(index);
        const correct = index === questions[currentQuestion].correct;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 }
            });
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
                if (score + (correct ? 1 : 0) === questions.length) {
                    // Big confetti for perfect score
                    const end = Date.now() + 3000;
                    // Go crazy (confetti loop)
                    (function frame() {
                        confetti({
                            particleCount: 5,
                            angle: 60,
                            spread: 55,
                            origin: { x: 0 }
                        });
                        confetti({
                            particleCount: 5,
                            angle: 120,
                            spread: 55,
                            origin: { x: 1 }
                        });
                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    }());
                }
            }
        }, 1500);
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    return (
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-cursive text-love-red mb-8">How well do you know us?</h2>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-pink-100 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                    {/* Decoration Circles */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-love-pink rounded-full opacity-20"></div>

                    {showScore ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h3>
                            <p className="text-xl text-gray-600 mb-8">
                                You scored <span className="text-love-red font-bold">{score}</span> out of {questions.length}
                            </p>
                            <p className="font-cursive text-2xl text-love-pink mb-8">
                                {score === questions.length ? "Perfect! You know everything! ❤️" : "Not bad, but maybe we need more dates? 😉"}
                            </p>
                            <button
                                onClick={restartQuiz}
                                className="bg-love-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg"
                            >
                                Play Again
                            </button>
                        </motion.div>
                    ) : (
                        <div className="w-full">
                            <div className="flex justify-between items-center mb-8 text-gray-400 text-sm font-bold uppercase tracking-widest">
                                <span>Question {currentQuestion + 1}/{questions.length}</span>
                                <span>Score: {score}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-8 h-20 flex items-center justify-center">
                                {questions[currentQuestion].question}
                            </h3>

                            <div className="grid gap-4">
                                {questions[currentQuestion].options.map((option, index) => {
                                    let btnClass = "bg-gray-50 border-2 border-gray-100 hover:border-pink-200 hover:bg-pink-50 text-gray-700";
                                    if (selectedOption !== null) {
                                        if (index === questions[currentQuestion].correct) {
                                            btnClass = "bg-green-100 border-green-400 text-green-800";
                                        } else if (index === selectedOption) {
                                            btnClass = "bg-red-100 border-red-400 text-red-800";
                                        } else {
                                            btnClass = "opacity-50";
                                        }
                                    }

                                    return (
                                        <motion.button
                                            key={index}
                                            whileHover={selectedOption === null ? { scale: 1.02 } : {}}
                                            whileTap={selectedOption === null ? { scale: 0.98 } : {}}
                                            onClick={() => handleOptionClick(index)}
                                            disabled={selectedOption !== null}
                                            className={`w-full p-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-between ${btnClass}`}
                                        >
                                            <span>{option}</span>
                                            {selectedOption !== null && index === questions[currentQuestion].correct && <Check size={20} />}
                                            {selectedOption === index && index !== questions[currentQuestion].correct && <X size={20} />}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Quiz;
