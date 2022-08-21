function Button({ children, ...rest }) {
  return (
    <button className="bg-green-400 p-3 rounded-md mx-1" {...rest}>
      {children}
    </button>
  );
}

export default Button;
