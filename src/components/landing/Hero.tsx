import type { AppDispatch, RootState } from "@/state/store";
import { TrendingUp, Star, ArrowRight, Smartphone, Globe } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { Stats } from "@/data/stats";
import { cn } from "@/lib/utils";
import { showLoginModal } from "@/state/landing/loginModal/loginModalSlice";
import { showSignUpModal } from "@/state/landing/loginModal/signupModalSlice";

interface HeroProps {
  stats: Stats[];
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  const visibleElements = useSelector(
    (state: RootState) => state.elmentVisibility
  );

  const dispatch = useDispatch<AppDispatch>();

  const toggleSignUpModal = () => {
    dispatch(showLoginModal());
    dispatch(showSignUpModal());
  };

  return (
    <>
      <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* "transition-all" combination with opacity conditional is often used in animations like fade-ins or slide-ins */}
            <div
              className={cn(
                "transition-all duration-2000 delay-200",
                visibleElements.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0b3d91]/10 to-purple-600/10 border border-[#0b3d91]/20 mb-6">
                <span className="text-[#0b3d91] text-sm font-semibold">
                  🚀 Now live in 150+ countries
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                The Future of
                <span className="bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] bg-clip-text text-transparent block">
                  Digital Finance
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience lightning-fast transactions, bank-level security, and
                AI-powered insights. Join millions who trust SwiftSpend for
                their digital financial needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  className="bg-[#0b3d91] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0a3580] transition-all transform hover:scale-105 flex items-center justify-center group"
                  onClick={toggleSignUpModal}
                >
                  Start Free Trial
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <button className="border-2 border-[#0b3d91] text-[#0b3d91] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0b3d91] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#0b3d91]">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={cn(
                "relative transition-all duration-1000 delay-300",
                visibleElements.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d91]/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="bg-gradient-to-br from-[#0b3d91] to-[#00a8b5] rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-semibold">
                        Account Balance
                      </span>
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div className="text-white text-3xl font-bold">
                      $24,892.50
                    </div>
                    <div className="text-white/80 text-sm">
                      +12.5% this month
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="text-green-600" size={20} />
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold">Investment Return</div>
                          <div className="text-sm text-gray-600">
                            Portfolio Growth
                          </div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">+$1,250</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="text-blue-600" size={20} />
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold">
                            International Transfer
                          </div>
                          <div className="text-sm text-gray-600">To Europe</div>
                        </div>
                      </div>
                      <div className="text-blue-600 font-bold">-$500</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="text-white" size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
