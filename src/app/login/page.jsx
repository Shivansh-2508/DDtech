import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative bg-white shadow-lg rounded-3xl w-96 p-10">
        {/* Top Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 bg-white p-4 rounded-full shadow-md">
          {/* Icon Code */}
        </div>

        {/* Form Header */}
        <h2 className="text-center text-2xl font-semibold">Sign in</h2>
        <p className="text-center text-gray-500 mt-2 text-sm">
          Welcome back! Please enter your credentials to log in.
        </p>

        {/* Display Error Message */}
        {/* {error && <p className="text-red-500 text-center mt-2">{error}</p>} */}

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mt-6 relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-3 bg-gray-100 rounded-lg text-gray-600 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-4 relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-3 bg-gray-100 rounded-lg text-gray-600 focus:outline-none"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center mt-6 space-x-3">
          <span className="flex-grow h-px bg-gray-300"></span>
          <span className="text-gray-500 text-sm">Or sign in with</span>
          <span className="flex-grow h-px bg-gray-300"></span>
        </div>

        {/* Social Sign-In Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="p-3 bg-gray-100 rounded-full"
            aria-label="Sign in with Google"
          >
            <FaGoogle className="text-red-500 text-lg" />
          </button>
          <button
            className="p-3 bg-gray-100 rounded-full"
            aria-label="Sign in with Facebook"
          >
            <FaFacebookF className="text-blue-600 text-lg" />
          </button>
          <button
            className="p-3 bg-gray-100 rounded-full"
            aria-label="Sign in with Apple"
          >
            <FaApple className="text-black text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
