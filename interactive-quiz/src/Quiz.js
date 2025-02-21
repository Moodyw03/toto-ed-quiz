import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import questions from "./data";
import Confetti from "react-confetti";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const getResultMessage = (score) => {
    if (score <= 3) {
      return "It looks like some questions were tricky, but that's completely okay. Every expert starts somewhere!";
    } else if (score <= 6) {
      return "Great job! You're making solid progress. With a bit more practice, you'll be unstoppable!";
    } else {
      return "Outstanding work! You're really on top of things. Keep shining and continue learning!";
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000); // Show confetti for 1 second
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // Short delay before moving to the next question
      setTimeout(() => setCurrentQuestion(nextQuestion), 1000);
    } else {
      // End quiz after a delay to let the student see the result
      setTimeout(() => setQuizFinished(true), 1000);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setShowConfetti(false);
  };

  if (quizFinished) {
    return (
      <div className="result">
        <h2>Quiz Finished!</h2>
        <p className="score">
          Your score: {score} out of {questions.length}
        </p>
        <p className="result-message">{getResultMessage(score)}</p>
        <button className="answer-button" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {showConfetti && <Confetti />}
      <QuestionCard
        question={questions[currentQuestion].question}
        answers={questions[currentQuestion].options.map((option) => ({
          text: option,
          isCorrect: option === questions[currentQuestion].correctAnswer,
        }))}
        handleAnswer={handleAnswer}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
}

export default Quiz;
