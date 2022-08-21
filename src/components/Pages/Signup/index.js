import { useState } from "react";
import { AiOutlineMail, AiOutlineUnlock, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) return setError("Password don't match!");

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/", { replace: true });
    } catch (error) {
      setError("Failed to create an account!");
    }
  }

  return (
    <div className="px-5">
      <h1 className="text-left font-bold text-xl">Create an account</h1>
      <div className="flex flex-wrap justify-between items-center text-xs">
        <Illustration />
        <Form
          className="w-full md:w-1/2 flex flex-col gap-5 "
          onSubmit={handleSubmit}
        >
          <TextInput
            type="text"
            placeholder="Enter name"
            required
            value={username}
            icon={<AiOutlineUser size={20} />}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            type="email"
            placeholder="Enter email"
            required
            value={email}
            icon={<AiOutlineMail size={20} />}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="text"
            placeholder="Enter password"
            required
            value={password}
            icon={<AiOutlineUnlock size={20} />}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            type="text"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            icon={<AiOutlineUnlock size={20} />}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-md">{error}</p>}
          <CheckBox
            text="I agree to the Term &amp; Condition"
            required
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <Button disabled={loading} type="submit">
            Sign up
          </Button>

          <div className="flex gap-2 justify-center items-center font-medium">
            Already have an account?
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
            instead.
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
