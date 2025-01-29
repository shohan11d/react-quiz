import { useReducer } from 'react';
import StartScreen from './components/StartScreen';
import StartQuestion from './components/displayQuestion';
import EndPage from './components/EndPage';

const initialState = {
  questions: [],
  status: 'idle',
  error: null,
  index: 0,
  score: 0,
  maxPoints: 0,
};

function reducer(state, action) {
  // status: idile, start
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        status: 'idle',
        questions: action.payload,
        maxPoints: action.payload.reduce((acc, curr) => acc + curr.points, 0),
      };
    case 'dataFailed':
      return { ...state, status: 'error', error: action.payload };
    case 'startQuiz':
      return { ...state, status: 'start' };
    case 'nextQuestion':
      return { ...state, index: state.index + 1 };
    case 'correct':
      return { ...state, score: state.score + action.payload };
    case 'wrong':
      return { ...state, score: state.score + action.payload };
    case 'endQuiz':
      return { ...state, status: 'end' };
    default:
      return state;
  }
}

function App() {
  const [{ questions, score, maxPoints, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log(status);
  return (
    <div>
      {status === 'idle' && <StartScreen dispatch={dispatch} />}
      {status === 'start' && (
        <StartQuestion
          dispatch={dispatch}
          index={index}
          questions={questions}
        />
      )}
      {status === 'end' && <EndPage score={score} maxPoints={maxPoints} />}
    </div>
  );
}

export default App;
