import type { Stats } from "@/data/stats";

interface StatsProps {
  stats: Stats[];
}

const StatsComponent: React.FC<StatsProps> = ({ stats }) => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#0b3d91] mb-2 group-hover:bg-gradient-to-r group-hover:from-[#0b3d91] group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsComponent;
