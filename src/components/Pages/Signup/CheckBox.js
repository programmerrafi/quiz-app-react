function CheckBox({ text, ...rest }) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </div>
  );
}

export default CheckBox;
