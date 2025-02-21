import React from "react";

function QuestionCard({
  question,
  answers,
  handleAnswer,
  questionNumber,
  totalQuestions,
}) {
  return (
    <div className="question-card">
      <p style={{ color: "#666", marginBottom: "1rem" }}>
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2>{question}</h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswer(answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
