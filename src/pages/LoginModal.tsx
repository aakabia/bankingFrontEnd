import React, { useState } from 'react';
import { X, Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
  };

  if (!isOpen) return null;

  return (
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
          <h2 className="text-3xl font-bold mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-600">
            {isSignUp 
              ? 'Join thousands of users who trust SwiftSpend' 
              : 'Sign in to your SwiftSpend account'
            }
          </p>
        </div>

        <div className="px-8 pb-8">
          <div className="space-y-6">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 transition-all outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 transition-all outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
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

            {isSignUp && (
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 transition-all outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
            )}

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-[#0b3d91] focus:ring-[#0b3d91]" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#0b3d91] hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center group"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="w-full py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center">
                <div className="w-5 h-5 mr-2 bg-blue-600 rounded"></div>
                <span className="text-gray-700 font-medium">Google</span>
              </button>
              <button className="w-full py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center">
                <div className="w-5 h-5 mr-2 bg-gray-900 rounded"></div>
                <span className="text-gray-700 font-medium">Apple</span>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                onClick={toggleMode}
                className="text-[#0b3d91] hover:underline font-semibold"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;