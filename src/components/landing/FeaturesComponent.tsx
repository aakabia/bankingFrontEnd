import type { Features } from "@/data/features";
import { cn } from "@/lib/utils";
import type { RootState } from "@/state/store";
import { useSelector } from "react-redux";

interface FeaturesProps {
  features: Features[];
}

const FeaturesComponent: React.FC<FeaturesProps> = ({ features }) => {
  const visibleElements = useSelector(
    (state: RootState) => state.elmentVisibility
  );

  return (
    <>
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-[#0b3d91] to-[#00a8b5] bg-clip-text text-transparent">
                {" "}
                SwiftSpend
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the modern economy with cutting-edge technology and
              uncompromising security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
                  visibleElements.features
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0b3d91] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesComponent;
