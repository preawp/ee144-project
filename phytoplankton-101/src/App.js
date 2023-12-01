// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [showBasicInfo, setShowBasicInfo] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

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

  const handleShowBasicInfo = () => {
    setShowBasicInfo(true);
  };

  const handleGoBack = () => {
    setShowBasicInfo(false);
    setShowQuiz(false);
  };

  const handleStartQuiz = () => {
    setShowBasicInfo(false);
    setShowQuiz(true);
  };

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
      setShowQuiz(false);
      setShowBasicInfo(true);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {showBasicInfo ? (
          <div className="BasicInfo">
            <h2>Basic Information about Phytoplankton</h2>
            <ul>
              <li>
                <h3>Diatoms</h3>
                <p>Diatoms are a major group of algae, and are among the most common types of phytoplankton.</p>
              </li>
              <li>
                <h3>Dinoflagellates</h3>
                <p>Dinoflagellates are a diverse group of single-celled organisms that are common in marine environments.</p>
              </li>
              {/* Add more information about different types of phytoplankton */}
            </ul>
            <button className="App-button" onClick={handleGoBack}>
              Back to Previous Page
            </button>
            <button className="App-button" onClick={handleStartQuiz}>
              Take Quiz
            </button>
          </div>
        ) : showQuiz ? (
          <div className="Quiz">
            <h2>{questions[currentQuestion].question}</h2>
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
            {selectedOption && (
              <p>{selectedOption === questions[currentQuestion].answer ? 'Correct!' : 'Wrong!'}</p>
            )}
            <button className="App-button" onClick={handleNextQuestion} disabled={!selectedOption}>
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        ) : (
          <div>
            <h1>Welcome to Phytoplankton 101</h1>
            <p>
              Explore the fascinating world of phytoplankton and their significance in marine ecosystems.
            </p>
            <button className="App-button" onClick={handleShowBasicInfo}>
              Next Page: Basic Info
            </button>
          </div>
        )}
      </header>
      {/* Other components or sections related to phytoplankton content can be added here */}
    </div>
  );
}

export default App;
