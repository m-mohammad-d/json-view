import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function JsonExamples() {
  const examples = [
    { name: "Example 1", json: '{"name": "John", "age": 30}' },
    { name: "Example 2", json: '{"city": "New York", "country": "USA"}' },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">JSON Examples</h2>
        {examples.map((example, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-blue-600">
              {example.name}
            </h3>
            <SyntaxHighlighter
              language="json"
              style={atomDark}
              className="rounded border border-gray-300"
            >
              {example.json}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JsonExamples;
