import { useState } from "react";
import { AiOutlineLock, AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../Signup/TextInput";

function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/", { replace: true });
    } catch (error) {
      setError("Password not match!");
    }
  }

  const showPasswordHandler = () => {
    setShowPassword((o) => !o);
  };

  return (
    <div className="px-5">
      <h1 className="text-left font-bold text-xl">Login to your account</h1>
      <div className="flex flex-wrap justify-between items-center text-xs">
        <Illustration />
        <Form
          className="w-full md:w-1/2 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <TextInput
            type="email"
            placeholder="Enter email"
            required
            value={email}
            icon={<AiOutlineMail size={20} />}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type={showPassword ? "password" : "text"}
            placeholder="Enter password"
            required
            value={password}
            icon={
              showPassword ? (
                <AiOutlineLock size={20} />
              ) : (
                <AiOutlineUnlock size={20} />
              )
            }
            onClickToShowPassword={showPasswordHandler}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-md">{error}</p>}
          <Button disabled={loading} type="submit">
            Login
          </Button>

          <div className="flex gap-2 justify-center items-center font-medium">
            Do not have an account?
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
            instead.
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
