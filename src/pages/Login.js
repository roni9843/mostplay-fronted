import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaTimes, FaEye } from "react-icons/fa";
import logo from "../assets/logo.png";
import { loginUser } from "../features/auth/authThunks";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #EFEFF0;

  @media (min-width: 769px) {
    padding-top: 50px;
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }
  

`;

const TopBar = styled.div`
  background-color: #194298;
  color: white;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;




const CloseIcon = styled(FaTimes)`
  cursor: pointer;
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  background-color: white;
  padding-bottom: 2rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #5D9AE5;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  font-size: 0.875rem;
  color: #000;
  margin-bottom: 0.25rem;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: #F2F2F2;
  ${props =>
    props.error &&
    `
      border-color: red;
    `}
`;

const ClearIcon = styled(FaTimes)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  cursor: pointer;
  font-size: 0.875rem;
`;

const EyeIcon = styled(FaEye)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  cursor: pointer;
  font-size: 0.875rem;
`;

const ForgotPassword = styled.a`
  color: #3b82f6;
  text-align: right;
  display: block;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #9ca3af;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: not-allowed;
  &:not(:disabled) {
    background-color: #3b82f6;
    cursor: pointer;
    &:hover {
      background-color: #2563eb;
    }
  }
`;

const SignUpLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color: #000;
  a {
    color: #3b82f6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validation
    if (email.length < 4 || email.length > 15) {
      setValidationError("ব্যবহারকারীর নাম ৪-১৫ অক্ষর হতে হবে।");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      setValidationError("পাসওয়ার্ড ৬-২০ অক্ষর বা সংখ্যা হতে হবে।");
      return;
    }
    
    setValidationError(""); // Clear previous errors
    await dispatch(loginUser ({ email, password }));
    
    if (isAuthenticated) navigate("/dashboard");
  };

  const handleClear = (field) => {
    if (field === "email") setEmail("");
    if (field === "password") setPassword("");
  };


useEffect(() => {
  return () => {
    // Reset the error state when the component unmounts
    dispatch({ type: 'auth/clearError' });
  };
}, [dispatch]);


  return (
    <Container>
      <div>
        <LoginBox>
          <TopBar>
            <div style={{ flex: 1, textAlign: "center", fontSize: "20px" }}>লগইন</div>
            <CloseIcon onClick={() => navigate("/")} />
          </TopBar>

          <div>
            <img src={logo} className="mt-5 pt-5 mb-3" alt="mostplay" width="150px" />
            <Form onSubmit={handleLogin} style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "10px", margin: "10px" }}>
              <Label>ব্যবহারকারীর নাম</Label>
              <InputWrapper>
                <Input
                  placeholder="৪-১৫ অক্ষর নাম্বার এলাউ"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  error={validationError.includes("ব্যবহারকারীর নাম")}
                />
              </InputWrapper>
              {validationError.includes("ব্যবহারকারীর নাম") && (
                <ErrorMessage>{validationError}</ErrorMessage>
              )}

              <Label>ব্যবহারকারীর পাসওয়ার্ড</Label>
              <InputWrapper>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="৬-২০ অক্ষর বা সংখ্যা"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  error={validationError.includes("পাসওয়ার্ড")}
                />
                {password ? (
                  <ClearIcon onClick={() => handleClear("password")} />
                ) : (
                  <EyeIcon onClick={() => setShowPassword(!showPassword)} />
                )}
              </InputWrapper>
              {validationError.includes("পাসওয়ার্ড") && (
                <ErrorMessage>{validationError}</ErrorMessage>
              )}

              <ForgotPassword href="#">পাসওয়ার্ড ভুলে গেছেন?</ForgotPassword>

              <Button type="submit" disabled={loading}>
                {loading ? <LoadingSpinner /> : "লগইন"}
              </Button>
            </Form>

            <SignUpLink onClick={() => navigate("/register")}>
            একটি একাউন্ট আছে কি না? <Link to="/register">রেজিস্টার</Link>
            </SignUpLink>

            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>
        </LoginBox>
      </div>
    </Container>
  );
}

