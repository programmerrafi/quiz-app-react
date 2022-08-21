import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import Analyzing from "./Analysis";
import Summary from "./Summary";

function Result() {
  const { id } = useParams();
  const location = useLocation();
  const qna = location.state;

  const { loading, error, answers } = useAnswers(id);
  function calculate() {
    let score = 0;
    answers?.forEach((question, index1) => {
      let correctIndexes = [];
      let checkIndexes = [];
      question?.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }
  const userScore = calculate();
  return (
    <div>
      {loading && <p className="text-md">Loading...</p>}
      {error && <p className="text-red-500 text-md">There was an error!</p>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analyzing answers={answers} />
        </>
      )}
    </div>
  );
}

export default Result;
