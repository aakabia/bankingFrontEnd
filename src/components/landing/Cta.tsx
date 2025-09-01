import { showLoginModal } from "@/state/landing/loginModal/loginModalSlice";
import { showSignUpModal } from "@/state/landing/loginModal/signupModalSlice";
import type { AppDispatch } from "@/state/store";
import { ChevronRight, CheckCircle } from "lucide-react";
import { useDispatch } from "react-redux";

const Cta = () => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleSignUpModal = () => {
    dispatch(showLoginModal());
    dispatch(showSignUpModal());
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#0b3d91] to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Financial Future?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust SwiftSpend
            for secure, fast, and intelligent financial solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="bg-white text-[#0b3d91] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center group"
              onClick={toggleSignUpModal}
            >
              Start Your Free Trial
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <div className="flex items-center text-white/90">
              <CheckCircle className="mr-2" size={20} />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
