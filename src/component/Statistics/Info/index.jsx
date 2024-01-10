const Info = ({ count, text }) => {
  return (
    <div
      className="text-center">
      <h2 className="mb-4 text-[2rem] leading-9 font-semibold">{count}</h2>
      <span className="text-base text-text-color font-semibold  leading-[28px]">
        {text}
      </span>
    </div>
  );
};

export default Info;
