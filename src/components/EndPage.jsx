function EndPage({ score, maxPoints }) {
  return (
    <div>
      <h1 className="text-4xl p-5 mt-10 text-blue-400">End of Quiz</h1>
      <p className="text-xl p-5">
        Your score is: {score}/ {maxPoints}
      </p>
      <p className="text-xl p-5">Thank you for taking the quiz</p>
    </div>
  );
}

export default EndPage;
