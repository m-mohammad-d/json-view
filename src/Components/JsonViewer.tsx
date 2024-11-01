// JsonViewer.tsx
import React, { useState } from "react";
import parseJson from "../utils/ParseJson";

interface JsonViewerProps {
  jsonData: string;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ jsonData }) => {
  const parsedData = parseJson(jsonData);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleNode = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderJson = (data: any, path = ""): JSX.Element => {
    if (data === null) {
      return <span className="text-gray-500">null</span>;
    }

    if (Array.isArray(data) || typeof data === "object") {
      const isExpanded = expanded[path];
      const type = Array.isArray(data) ? "Array" : "Object";
      const toggleText = isExpanded ? "-" : "+";

      return (
        <div className="ml-5">
          <span
            onClick={() => toggleNode(path)}
            className="cursor-pointer font-bold text-blue-500 mr-2"
          >
            {toggleText}
          </span>
          <span className="text-gray-300 font-semibold">
            {type} {Array.isArray(data) ? `[${data.length}]` : `{}`}
          </span>
          {isExpanded && (
            <ul className="list-disc ml-5 mt-1">
              {Object.entries(data).map(([key, value], index) => (
                <li key={key || index} className="my-1">
                  <span className="font-bold text-blue-500">{key}:</span>{" "}
                  {renderJson(value, `${path}-${key}`)}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    if (typeof data === "string") {
      return <span className="text-green-500">"{data}"</span>;
    } else if (typeof data === "boolean") {
      return <span className="text-purple-500">{data ? "true" : "false"}</span>;
    } else {
      return <span>{data}</span>;
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg h-screen overflow-y-auto max-h-[100vh] custom-scroll">
      <h2 className="text-xl font-bold text-white">JSON Viewer</h2>
      {parsedData && parsedData.error ? (
        <div className="text-red-500 font-bold mt-2">{parsedData.error}</div>
      ) : (
        <div className="text-white">{renderJson(parsedData)}</div>
      )}
    </div>
  );
};

export default JsonViewer;
