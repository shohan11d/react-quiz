import QuestionOptions from './QuestionOptions';

function StartQuestion({ questions, index }) {
  const questionContainer = questions[index];
  //   [question, options, correctOption, PointerEvent, id] = questions;
  return (
    <div>
      <h2 className="text-4xl p-5 mt-10 text-blue-400">
        {questionContainer.question}
      </h2>

      <QuestionOptions questionContainer={questionContainer} />
      <button className='text-black bg-blue-400 p-5 m-5'>Next</button>
      <button className='text-black bg-blue-400 p-5 m-5'>Next</button>
    </div>
  );
}

export default StartQuestion;
