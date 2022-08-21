import { useState } from "react";
import ReactPlayer from "react-player/lazy";

import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
function Player({ id, title }) {
  const [popupPLayer, setPopupPlayer] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className="fixed right-5 bottom-24">
      {!popupPLayer ? (
        <button
          className="w-14 h-14 bg-slate-900 hover:bg-green-400 text-green-400 hover:text-slate-900 flex justify-center items-center rounded-full transition-all"
          onClick={() => setPopupPlayer((o) => !o)}
        >
          <AiFillPlayCircle size="25" />
        </button>
      ) : (
        <div className="w-80 bg-white border-2 p-2 rounded-md relative">
          <ReactPlayer
            url={videoUrl}
            className="animate-scale"
            width="300px"
            height="168px"
            playing={popupPLayer}
            controls
          />
          <p className="text-slate-900 text-sm font-medium py-2">{title}</p>
          <button className="bg-white border-2 p-1 absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 rounded-full ">
            <AiOutlineClose
              size={20}
              onClick={() => setPopupPlayer((o) => !o)}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Player;
