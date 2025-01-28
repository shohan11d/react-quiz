function QuestionOptions({ questionContainer }) {
  return (
    <div>
      <p>
        {questionContainer.options.map((item, i) => (
          <button className="text-2xl p-5 m-5" key={questionContainer.id}>
            {i + 1}. {item}
          </button>
        ))}
      </p>
    </div>
  );
}

export default QuestionOptions;
