
import { useState } from "react";
import JsonEditor from "../Components/JsonEditor";
import JsonViewer from "../Components/JsonViewer";

function EditorPage() {
  const [jsonInput, setJsonInput] = useState<string>(`{ "name": "John" }`);

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0  m-4 md:m-0">
      <div className="w-full md:w-1/2">
        <JsonEditor jsonInput={jsonInput} setJsonInput={setJsonInput} />
      </div>

      <div className="w-full md:w-1/2">
        <JsonViewer jsonData={jsonInput} />
      </div>
    </div>
  );
}

export default EditorPage;
