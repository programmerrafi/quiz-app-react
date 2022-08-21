import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      // database related works
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot?.exists()) {
          setVideos(Object.values(snapshot?.val()));
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    setTimeout(() => {
      fetchVideos();
    }, 1000);
  }, []);

  return {
    loading,
    error,
    videos,
  };
}
