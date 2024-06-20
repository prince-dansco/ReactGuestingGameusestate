import { useEffect, useState } from "react";
import QuestionList from "./question";

function App() {
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [wrongGuest, setWrongGuest] = useState(0);
  const [correctGuest, setCorrectGuest] = useState(0);
  const [showCongratsMessage, setShowCongratsMessage] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleNextClick = () => {
    setCurrentQuestIndex((prevIndex) => (prevIndex + 1) % QuestionList.length);
    setShowCongratsMessage(null);
  };

  const handleClickY = () => {
    if (gameOver) return;
    setAttempt(attempt + 1);
    if (QuestionList[currentQuestIndex].answer === "true") {
      setShowCongratsMessage(true);
      setCorrectGuest(correctGuest + 1);
    } else {
      setShowCongratsMessage(false);
      setWrongGuest(wrongGuest + 1);
    }
  };
  const handlePlayAgain = () => {
    setCurrentQuestIndex(0);
    setShowCongratsMessage(null);
    setAttempt(0);
    setWrongGuest(0);
    setCorrectGuest(0);
    setTimeLeft(60);
    setGameOver(false);
  };
  const handleClickN = () => {
    if (gameOver) return;
    setAttempt(attempt + 1);
    if (QuestionList[currentQuestIndex].answer === "false") {
      setShowCongratsMessage(true);
      setCorrectGuest(correctGuest + 1);
    } else {
      setShowCongratsMessage(false);
      setWrongGuest(wrongGuest + 1);
    }
  };

  return (
    <div className="bg-custom w-full min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md ">
        <h1 className="md:text-3xl sm:text-[2rem] font-bold mb-4 text-center">
          Guessing Game🍎🍎
        </h1>
        <p className="text-lg mb-6 text-center">Guess the correct answer</p>

        {gameOver ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Game Over</h1>
            <p className="text-lg mb-3">Attempts: {attempt}</p>
            <p className="text-lg">Correct Answers: {correctGuest}</p>
            <p className="text-lg">Wrong Answers: {wrongGuest}</p>
            <p className="text-lg ">Time left: {timeLeft}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none mt-3 "
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <span className="block text-center mb-6 sm:text-lg md:text-xl font-semibold">
              {QuestionList[currentQuestIndex].question}
            </span>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
                onClick={handleClickY}
              >
                Yes
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
                onClick={handleClickN}
              >
                No
              </button>
            </div>

            {showCongratsMessage !== null &&
              (showCongratsMessage ? (
                <div
                  className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Congratulations!</strong>
                  <span className="block sm:inline">
                    Your answer is correct.✔✔
                  </span>
                </div>
              ) : (
                <div
                  className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Oh no!</strong>
                  <span className="block sm:inline">
                    You lose. Try again.❌❌
                  </span>
                </div>
              ))}

            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={handleNextClick}
            >
              Next
            </button>

            <p className="text-center">
              time left : {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </p>
            <p className="text-center"> attempt : {attempt}</p>
            <p className="text-center text-lg">
              {" "}
              correct Guess : {correctGuest}
            </p>
            <p className="text-center">
              {" "}
              number of wrong guessing: {wrongGuest}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
