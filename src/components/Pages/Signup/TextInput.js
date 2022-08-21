function TextInput({ icon, onClickToShowPassword, ...rest }) {
  return (
    <div className="w-full h-14 bg-white flex items-center rounded-md border border-b-2 border-gray-100 p-1">
      <input
        {...rest}
        className="border-0 outline-0 h-full w-full py-1 px-3 bg-white text-base font-medium"
      />
      <span
        className="w-10 h-10 flex items-center justify-center cursor-pointer"
        onClick={onClickToShowPassword}
      >
        {icon}
      </span>
    </div>
  );
}

export default TextInput;
