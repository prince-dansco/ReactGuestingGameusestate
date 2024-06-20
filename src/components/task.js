import React, { useState, useEffect } from "react";
import questions from "./questions"; // Ensure the import statement matches the filename

function Task() { // Use consistent component name
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
    const timer = setTimeout(() => setGameOver(true), 120000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setCorrectAttempts(correctAttempts + 1);
    } else {
      setIncorrectAttempts(incorrectAttempts + 1);
    }
    setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
    setUserAnswer("");
  };

  return gameOver ? (
    <div>
      <h1>Game Over</h1>
      <p>Attempts: {attempts}</p>
      <p>Correct Attempts: {correctAttempts}</p>
      <p>Incorrect Attempts: {incorrectAttempts}</p>
    </div>
  ) : (
    <div>
      <h1>Guessing Game</h1>
      <p>{currentQuestion.question}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>Attempts: {attempts}</p>
      <p>Correct Attempts: {correctAttempts}</p>
      <p>Incorrect Attempts: {incorrectAttempts}</p>
    </div>
  );
}

export default Task;