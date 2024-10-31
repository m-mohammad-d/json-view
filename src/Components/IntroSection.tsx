import { Link } from "react-router-dom";
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
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            JSON Viewer
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            A simple and powerful tool to view and format JSON data
            effortlessly. Explore your JSON data with ease and efficiency.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 mt-8 rounded-md hover:bg-blue-600 transition">
            <Link
              to="/editor"
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className="mb-8 md:mt-0 md:w-1/2 w-full flex justify-center">
          <div className="w-full md:w-auto overflow-auto rounded-lg">
            <SyntaxHighlighter
              language="json"
              style={solarizedDarkAtom}
              className="rounded-lg"
            >
              {sampleCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
