import { Link } from "react-router-dom";
import useVideoList from "../../Hooks/UseVideoList";
import Video from "./Video";
function Videos() {
  const { loading, error, videos } = useVideoList();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center gap-5 2xl:gap-x-16">
      {videos?.length > 0 &&
        videos?.map((video) =>
          video.noq > 0 ? (
            <Link
              to={`/quiz/${video.youtubeID}`}
              state={video?.title}
              key={video.youtubeID}
            >
              <Video
                title={video?.title}
                id={video?.youtubeID}
                noq={video?.noq}
              />
            </Link>
          ) : (
            <Video
              key={video.youtubeID}
              title={video?.title}
              id={video?.youtubeID}
              noq={video?.noq}
            />
          )
        )}

      {!loading && videos?.length === 0 && (
        <p className="text-red-500 text-md">Video not found!</p>
      )}
      {error && <p className="text-red-500 text-md">Error to play video</p>}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Videos;
