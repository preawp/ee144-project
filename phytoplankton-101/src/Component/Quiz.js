// Quiz.js

import React, { useState } from 'react';
import './Quiz.css'; // Import your quiz styles if you have separate styles

const questions = [
  {
    question: 'What is the primary pigment used by phytoplankton for photosynthesis?',
    options: ['Chlorophyll a', 'Chlorophyll b', 'Carotenoids', 'Phycocyanin'],
    answer: 'Chlorophyll a'
  },
  {
    question: 'Which type of phytoplankton is responsible for causing bioluminescence in the ocean?',
    options: ['Diatoms', 'Dinoflagellates', 'Coccolithophores', 'Cyanobacteria'],
    answer: 'Dinoflagellates'
  },
  {
    question: 'What environmental factor is crucial for the growth of phytoplankton?',
    options: ['Low temperatures', 'Low salinity', 'High nutrient levels', 'Low light intensity'],
    answer: 'High nutrient levels'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="Quiz">
      {showScore ? (
        <div className="Quiz-score">
          <h2>Your Score: {score} out of {questions.length}</h2>
          <button className="App-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="Quiz-question">
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="Quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`App-button ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="App-button" onClick={handleNextQuestion} disabled={!selectedOption}>
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
