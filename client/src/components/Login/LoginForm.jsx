import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { setCredentials } from "../../redux/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 2000)); // Simulated delay
      const data = await loginUser(formData);
      dispatch(setCredentials(data));
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      navigate("/");
      alert(error.response?.data?.message || "Login failed");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/14 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-md outfit border border-white/30 transition-all"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-3 tracking-wide">
        Welcome Back!
      </h2>
      <p className="text-gray-200 text-center text-sm mb-8">
        Log in to continue explore powerful Excel insights.
      </p>

      <div className="space-y-5">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          onChange={handleChange}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={handleChange}
            required
          />
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </span>
        </div>
      </div>

      <div className="text-sm text-right mt-3 mb-6">
        <Link
          to="/register"
          className="text-white hover:underline hover:text-blue-500"
        >
          New user? Register Here
        </Link>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-xl bg-gray-900 hover:bg-green-600 text-white font-semibold tracking-wide transition-all disabled:opacity-50"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
