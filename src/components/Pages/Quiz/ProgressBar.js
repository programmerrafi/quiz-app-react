import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Button from "./Button";
function ProgressBar({ next, prev, progress, submit }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const tooltipHandler = () => {
    if (tooltip) {
      setTooltip((o) => !o);
      tooltipRef.current.classList.remove("opacity-100", "visible");
      tooltipRef.current.classList.add("opacity-0", "invisible");
    } else {
      setTooltip((o) => !o);
      tooltipRef.current.classList.remove("opacity-0", "invisible");
      tooltipRef.current.classList.add("opacity-100", "visible");
    }
  };
  return (
    <div className="w-11/12 h-16 flex justify-between items-center gap-5 bg-white fixed left-1/2 -translate-x-1/2 bottom-5 shadow rounded-md px-3">
      <Button onClick={prev}>
        <BsArrowLeft size={20} />
      </Button>
      <div className="w-full h-1 bg-gray-200">
        <div
          className="flex items-center justify-end h-1 bg-slate-900 cursor-pointer transition-all"
          style={{ width: `${progress}%` }}
          onMouseOver={tooltipHandler}
          onMouseOut={tooltipHandler}
        >
          <span className="relative h-3 w-3 bg-slate-900 rounded-full">
            <span
              ref={tooltipRef}
              className="tooltip text-white text-center w-36 p-2"
            >
              {progress}% completed
            </span>
          </span>
        </div>
      </div>

      <Button onClick={progress === 100 ? submit : next}>
        <BsArrowRight size={20} />
      </Button>
    </div>
  );
}

export default ProgressBar;
