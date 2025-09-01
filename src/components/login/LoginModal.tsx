import React, { useState } from "react";
import { X, Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import SignUpModal from "./SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/state/store";
import { changeSignUpModalState } from "@/state/landing/loginModal/signupModalSlice";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LoginFormData {
  username: string;
  password: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const signUpState = useSelector(
    (state: RootState) => state.signUpModalState.value
  ); // .property when dealing with objects
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleMode = () => {
    setFormData({
      username: "",
      password: "",
    });
    dispatch(changeSignUpModalState());
  };

  
  if (!isOpen) return null;

  return (
    <>
      {!signUpState ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
            >
              <X size={20} className="text-gray-600" />
            </button>

            <div className="px-8 pt-12 pb-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0b3d91] to-[#00a8b5] flex items-center justify-center">
                <Lock className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-gray-600">
                Sign in to your SwiftSpend account
              </p>
            </div>

            <div className="px-8 pb-8">
              <div className="space-y-6">
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 transition-all outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 transition-all outline-none text-gray-900 placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-[#0b3d91] hover:underline">
                    Forgot Username?
                  </a>
                  <a href="#" className="text-[#0b3d91] hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                >
                  Sign In
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-[#0b3d91] hover:underline font-semibold ml-2"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SignUpModal isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};

export default LoginModal;
