import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import useQuestions from "../../Hooks/useQuestions";
import Answers from "./Answers";
import Player from "./player";
import ProgressBar from "./ProgressBar";
function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const data = useLocation();

  const initialState = null;
  // console.log(questions);
  const reducer = (state, action) => {
    switch (action.type) {
      case "questions":
        action.value.forEach((question) => {
          question.options.forEach((option) => (option.checked = false));
        });
        return action.value;
      case "answer":
        const questions = _.cloneDeep(state);
        questions[action.questionID].options[action.optionIndex].checked =
          action.value;
        return questions;
      default:
        return state;
    }
  };

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  function nextQuestion() {
    if (currentQuestion < questions.length)
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
  }
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length)
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
  }
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  async function submitQuiz() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/result/${id}`, { replace: true, state: qna });
  }
  return (
    <div className="px-5 pb-20 md:pb-0">
      {loading && <p className="text-md">Loading...</p>}
      {error && <p className="text-red-500 text-md">There was an error!</p>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold text-heading font-Montserrat">
            {qna[currentQuestion].title}
          </h1>
          <h4 className="text-md font-semibold text-slate-400 font-Montserrat border-b border-slate-200 mt-3 pb-2">
            Question can have multiple answers
          </h4>

          <Answers
            input={true}
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submitQuiz}
          />
          <Player id={id} title={data.state} />
        </>
      )}
    </div>
  );
}

export default Quiz;
