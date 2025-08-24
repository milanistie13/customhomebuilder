import React from 'react';

const ProcessTimeline: React.FC = () => {
  const processSteps = [
    {
      title: "Discovery & Consultation",
      description: "We start by understanding your vision, goals, and requirements through detailed discussions.",
      icon: "🔍"
    },
    {
      title: "Planning & Strategy",
      description: "Our team creates a comprehensive project plan with timelines, milestones, and technical specifications.",
      icon: "📋"
    },
    {
      title: "Design & Prototyping",
      description: "We design intuitive user interfaces and create interactive prototypes for your approval.",
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Our developers build your solution using modern technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your application is bug-free and performs optimally.",
      icon: "🧪"
    },
    {
      title: "Deployment & Launch",
      description: "We deploy your solution and provide ongoing support and maintenance.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, collaborative approach that ensures your project's success from concept to launch
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                {step.icon}
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-purple-300 ml-7 mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
