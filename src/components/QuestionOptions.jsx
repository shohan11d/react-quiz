function QuestionOptions({ questionContainer, handleAnswer }) {
  return (
    <div>
      <p>
        {questionContainer.options.map((item, i) => (
          <button onClick={()=>handleAnswer(i)} className="text-2xl p-5 m-5" key={Date.now() + i}>
            {i + 1}. {item}
          </button>
        ))}
      </p>
    </div>
  );
}

export default QuestionOptions;
