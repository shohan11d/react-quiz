import QuestionOptions from './QuestionOptions';

function displayQuestion({ questions, index, dispatch }) {
  const questionContainer = questions[index];
  //   [question, options, correctOption, PointerEvent, id] = questions;

  function handleAnswer(option) {
    if (option === questionContainer.correctOption) {
      dispatch({ type: 'correct', payload: questionContainer.points });
    } else {
      dispatch({ type: 'wrong', payload: 0 });
    }
  }

  function handleNext() {
    index + 1 < questions.length && dispatch({ type: 'nextQuestion' });
    index + 1 === questions.length && dispatch({ type: 'endQuiz' });
  }
  return (
    <div>
      <h2 className="text-4xl p-5 mt-10 text-blue-400">
        {questionContainer.question}
      </h2>

      <div className="flex justify-between ">
        <div>
          <p className="px-2 text-xl  mx-5">
            Question: {index + 1}/{questions.length}
          </p>
          <p className="px-2 text-xl  mx-5">
            Points: {questionContainer.points}
          </p>
        </div>
        <p className="px-2 text-xl text-green-300  mx-5">Score: 0</p>
      </div>

      <QuestionOptions
        questionContainer={questionContainer}
        handleAnswer={handleAnswer}
      />

      <button
        onClick={handleNext}
        className="text-black bg-blue-400 p-5 m-5 hover:bg-blue-800 "
      >
        Next
      </button>
    </div>
  );
}

export default displayQuestion;
