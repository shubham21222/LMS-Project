import React from "react";
import { Monitor, Smartphone, Headphones, MousePointerClick } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Monitor className="w-10 h-10 mb-4 text-white" />,
      title: "Fast Performance",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 2,
      icon: <Smartphone className="w-10 h-10 mb-4 text-white" />,
      title: "Perfect Responsive",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 3,
      icon: <Headphones className="w-10 h-10 mb-4 text-white" />,
      title: "Fast & Friendly Support",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 4,
      icon: <MousePointerClick className="w-10 h-10 mb-4 text-white" />,
      title: "Easy to Use",
      description: "It is a long established fact that a reader will be distracted.",
    },
  ];

  return (
    <div className="colour rounded-lg shadow-2xl p-6 container mx-auto px-4 max-w-[1180px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="relative flex flex-col items-center text-center p-6 transition-all hover:mt-[-10px] duration-500 hover:bg-black hover:text-white rounded-lg"
          >
            {feature.icon}
            <h3 className="text-lg text-white font-semibold">{feature.title}</h3>
            <p className="text-sm text-white mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
