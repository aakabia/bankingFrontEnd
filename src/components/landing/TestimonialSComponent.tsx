import type { Testimonials } from "@/data/testimonials";
import type { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  testimonials: Testimonials[];
}

const TestimonialSComponent: React.FC<TestimonialProps> = ({
  testimonials,
}) => {
  const visibleElements = useSelector(
    (state: RootState) => state.elmentVisibility
  );

  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-[#0b3d91] to-purple-600 bg-clip-text text-transparent">
                {" "}
                Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about SwiftSpend
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",
                  visibleElements.testimonials
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0b3d91] to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSComponent;
