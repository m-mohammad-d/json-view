import { FaFileCode, FaCode, FaSearch, FaExclamationTriangle } from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      title: "JSON Formatting",
      description: "Easily format your JSON data for better readability.",
      icon: <FaFileCode className="text-blue-500 text-4xl" />,
    },
    {
      title: "Syntax Highlighting",
      description: "Colors and highlights make it easier to distinguish different parts of the JSON.",
      icon: <FaCode className="text-blue-500 text-4xl" />,
    },
    {
      title: "Collapsible Sections",
      description: "Expand and collapse sections to view or hide nested data.",
      icon: <FaSearch className="text-blue-500 text-4xl" />,
    },
    {
      title: "Error Detection",
      description: "Automatically detects and highlights JSON syntax errors.",
      icon: <FaExclamationTriangle className="text-blue-500 text-4xl" />,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
