import React from "react";

function Video({ title, id, noq }) {
  return (
    <div href="#!">
      <div className="w-80 2xl:w-96 h-fit bg-white border-2 border-gray-300 rounded-md cursor-pointer p-3 hover:shadow-lg">
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="Video title"
          className="w-full object-cover"
        />
        <p className="text-base font-semibold truncate mt-2">{title}</p>
        <div className="flex justify-between pr-2">
          <p className="text-sm font-normal">{noq} Questions</p>
          <p className="text-sm font-normal ">Score :{noq * 5}</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
