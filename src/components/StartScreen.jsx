import {  useEffect } from 'react';

function StartScreen({ dispatch }) {

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/questions');
        const data = await res.json();
        dispatch({ type: 'dataReceived', payload: data });
      } catch {
        (e) => dispatch({ type: 'dataFailed', payload: e.message });
      }
    }

    fetchData();
  }, []);

  return (
    <div className="text-center text-2xl m-20 space-y-5">
      <h1 className="uppercase text-blue-400 p-5 mb-10  text-6xl font-bold m-auto ">
        the react quiz
      </h1>
      <p className="text-green-400 italic">Welcome to The React Quiz! </p>
      <p>X questions to test your react mastery</p>
      <button
        className="px-4 py-2 rounded-full bg-gray-600 hover:bg-neutral-400 hover:text-gray-600"
        onClick={() => dispatch({ type: 'startQuiz' })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
