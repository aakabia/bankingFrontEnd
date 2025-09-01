import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/state/store";
import { hideLoginModal } from "@/state/landing/loginModal/loginModalSlice";
import { setIsVisbile } from "@/state/landing/elementVisibility/elementVisibility";
import { resetModalState } from "@/state/landing/loginModal/signupModalSlice";
import LoginModal from "../components/login/LoginModal";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import StatsComponent from "@/components/landing/StatsComponent";
import FeaturesComponent from "@/components/landing/FeaturesComponent";
import TestimonialSComponent from "@/components/landing/TestimonialSComponent";
import Cta from "@/components/landing/Cta";
import LandingFooter from "@/components/landing/LandingFooter";
import { features } from "@/data/features";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";






export const Landing = () => {
  // const visibleElements = useSelector(
  //   (state: RootState) => state.elmentVisibility
  // );
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.loginModalShowing.value
  );
  const dispatch = useDispatch<AppDispatch>();

  const closeLoginModal = () => {
    dispatch(hideLoginModal());
    dispatch(resetModalState());
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // apply to each entry, remember each entry is non-serializable so best to pass object with certain data as payload
          dispatch(
            setIsVisbile({
              // pass data from our "entry to our reducer and action" as our payload
              target: { id: entry.target.id },
              isIntersecting: entry.isIntersecting,
            })
          );
        });
      },
      { threshold: 0.1 } // allows for on screen animation (0.1 = 10% of element visible)
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el)); // get all elements with an id attribute and call "observe" function on each
    return () => observer.disconnect();
  }, []);

  //console.log(visibleElements); for elements we are observing with observer

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}

        <Nav />

        {/* Hero Section */}
        <Hero stats={stats} />

        {/* Stats Section */}
        <StatsComponent stats={stats} />

        {/* Features Section */}
        <FeaturesComponent features={features} />

        {/* Testimonials Section */}
        <TestimonialSComponent testimonials={testimonials} />

        {/* CTA Section */}
        <Cta />

        {/* Footer */}
        <LandingFooter />

        {/* Login modal */}
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </div>
    </>
  );
};
