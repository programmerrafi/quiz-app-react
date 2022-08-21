import useFetch from "../../Hooks/useFetch";
function Summary({ score, noq }) {
  const getKeyword = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  };
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    { Authorization: process.env.REACT_APP_PIXELS_API_KEY }
  );
  const image = result
    ? result?.photos[0].src.medium
    : "/assets/images/success.png";
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-20">
      <h5 className="text-black text-xl font-semibold w-36 text-center">
        Your score is {score} out of {noq * 5}
      </h5>
      {loading && <div className="w-96">Loading Your Badge </div>}
      {error && <div className="w-96">An error occurred!</div>}
      {!loading && !error && (
        <img src={image} alt="success" className="w-96 object-cover" />
      )}
    </div>
  );
}
export default Summary;
