import Questions from "./Questions";
function Analysis({ answers }) {
  return (
    <>
      <div className="mt-10 border-b-2 px-5">
        <h1 className="text-heading text-xl md:text-4xl font-bold">
          Question Analysis
        </h1>
        <Questions answers={answers} />
      </div>
    </>
  );
}

export default Analysis;
