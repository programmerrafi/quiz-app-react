import { BiHelpCircle } from "react-icons/bi";
import Answer from "../Quiz/Answers";
function Questions({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className="mt-3 bg-slate-50 p-3" key={index}>
      <h3 className="text-heading text-lg font-semibold flex items-center gap-2">
        <BiHelpCircle size={25} className="text-green-500 cursor-text" />
        {answer.title}
      </h3>
      <Answer input={false} options={answer.options} />
    </div>
  ));
}

export default Questions;
