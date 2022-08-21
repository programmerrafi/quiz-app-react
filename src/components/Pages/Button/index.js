import React from 'react';

function Button({ children }) {
  return (
    <div>
      <button className="w-full bg-green-400 text-black font-semibold text-xs uppercase py-2 px-5 flex justify-center items-center gap-3 rounded-md cursor-pointer border-0 hover:bg-green-500 hover:text-white">
        <span>{children}</span>
      </button>
    </div>
  );
}

export default Button;
