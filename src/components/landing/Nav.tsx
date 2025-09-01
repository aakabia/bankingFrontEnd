import { useEffect } from "react";
import type { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X } from "lucide-react";
import { changeIsShowing } from "@/state/landing/mobileMenu/mobileMenuSlice";
import { changeScrollY } from "@/state/landing/mobileMenu/screenHeightSlice";
import { showLoginModal } from "@/state/landing/loginModal/loginModalSlice";
import { cn } from "@/lib/utils";

const Nav = () => {
  const isMobileMenuShowing = useSelector(
    (state: RootState) => state.mobileMenuShowing.value
  );
  const scrollY = useSelector((state: RootState) => state.scrollY.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleScroll = () => dispatch(changeScrollY(window.scrollY));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b3d91] to-[#00a8b5] flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] bg-clip-text text-transparent">
                SwiftSpend
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-[#0b3d91] transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#0b3d91] transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#0b3d91] transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#0b3d91] transition-colors"
              >
                Pricing
              </a>
              <button
                onClick={() => dispatch(showLoginModal())}
                className="bg-[#0b3d91] text-white px-6 py-2 rounded-full hover:bg-[#0a3580] transition-all transform hover:scale-105"
              >
                Login
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => dispatch(changeIsShowing())}
            >
              {isMobileMenuShowing ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuShowing && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-gray-700 hover:text-[#0b3d91]"
              >
                Features
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-[#0b3d91]"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block text-gray-700 hover:text-[#0b3d91]"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block text-gray-700 hover:text-[#0b3d91]"
              >
                Pricing
              </a>
              <button
                className="w-full bg-[#0b3d91] text-white py-3 rounded-full"
                onClick={() => dispatch(showLoginModal())}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
