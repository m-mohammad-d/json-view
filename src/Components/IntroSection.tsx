import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function IntroSection() {
  const sampleData = {
    name: "JSON Viewer",
    description:
      "A simple and powerful tool to view and format JSON data effortlessly.",
    features: ["View JSON", "Format JSON", "Explore data with ease"],
  };

  const sampleCode = JSON.stringify(sampleData, null, 2);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">JSON Viewer</h1>
          <p className="text-lg text-gray-700">
            A simple and powerful tool to view and format JSON data
            effortlessly. Explore your JSON data with ease and efficiency.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <SyntaxHighlighter language="json" style={solarizedDarkAtom}>
            {sampleCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
