import { Fragment } from "react";
import Option from "./Option";

function Answers({ options = [], input, handleChange }) {
  return (
    <div className="grid md:grid-cols-2 mt-5 gap-x-2 gap-y-5">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Option
              key={index}
              type="checkbox"
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
              className={`w-full flex gap-2 p-4 bg-gray-200 text-slate-900 font-semibold rounded cursor-pointer hover:bg-gray-300 transition`}
            />
          ) : (
            <Option
              key={index}
              value={index}
              text={option.title}
              defaultChecked={option.checked}
              type="hidden"
              disable="true"
              className={`w-full flex gap-2 p-4 text-slate-900 font-semibold rounded cursor-pointer ${
                option.correct
                  ? "bg-green-300"
                  : option.checked
                  ? "bg-red-300"
                  : "bg-gray-200"
              }`}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Answers;
