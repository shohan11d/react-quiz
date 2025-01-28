import { useReducer } from 'react';
import StartScreen from './components/StartScreen';
import StartQuestion from './components/QuestionPage';

const initialState = {
  questions: [],
  status: 'idle',
  error: null,
  index: 0,
};

function reducer(state, action) {
  // status: idile, start
  switch (action.type) {
    case 'dataReceived':
      return { ...state, status: 'idle', questions: action.payload };
    case 'dataFailed':
      return { ...state, status: 'error', error: action.payload };
    case 'startQuiz':
      return { ...state, status: 'start' };
    default:
      return state;
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);

  console.log(status)
  return (
    <div>
      {status === 'idle' && <StartScreen dispatch={dispatch} />}
      {status === 'start' && <StartQuestion dispatch={dispatch} index={index} questions={questions} />}
    </div>
  );
}

export default App;
