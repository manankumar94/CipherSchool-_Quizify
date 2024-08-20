import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Camera from '../components/Camera';

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('/api/test/start', {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        setQuestions(res.data.questions);
      } catch (error) {
        console.error('Error fetching questions: ', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        '/api/test/submit',
        { userAnswers },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      
    } catch (error) {
      console.error('Error submitting test: ', error);
    }
  };

  return (
    <div>
      <Camera />
      <h2>MCQ Test</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          {question.options.map((option, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Test</button>
    </div>
  );
};

export default Test;
