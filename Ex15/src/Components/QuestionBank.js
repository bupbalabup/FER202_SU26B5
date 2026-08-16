import React, { useReducer } from "react";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
  ],
  current: 0,
  selected: "",
  score: 0,
  showScore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selected: action.payload };
    case "NEXT_QUESTION":
      const correct =
        state.selected === state.questions[state.current].answer;
      const next = state.current + 1;
      return {
        ...state,
        score: correct ? state.score + 1 : state.score,
        current: next,
        selected: "",
        showScore: next >= state.questions.length,
      };
    case "RESTART":
      return initialState;
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const q = state.questions[state.current];

  if (state.showScore) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Quiz Finished!</h2>
        <h3>
          Your score: {state.score} / {state.questions.length}
        </h3>
        <button onClick={() => dispatch({ type: "RESTART" })}>
          Restart
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Question {state.current + 1}</h2>
      <h3>{q.question}</h3>

      <div>
        {q.options.map((opt) => (
          <button key={opt} onClick={() => dispatch({ type: "SELECT_OPTION", payload: opt })}>
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        disabled={!state.selected}
      >
        Next
      </button>
    </div>
  );
}

export default QuestionBank;
