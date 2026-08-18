import { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Right Side */}
        <div className="login-form-container">
          <div className="login-form">

            <h2>Welcome Back</h2>
            <p className="login-subtitle">
              Sign in to your account
            </p>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="email"
                  placeholder="Username or Email"
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>

              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;