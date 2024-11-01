import { useState } from "react";
import JsonEditor from "../Components/JsonEditor";

function EditorPage() {
  const [jsonInput, setJsonInput] = useState<string>(`{ "name": "John" }`);

  return (
    <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/2">
        <JsonEditor jsonInput={jsonInput} setJsonInput={setJsonInput} />
      </div>
    </div>
  );
}

export default EditorPage;
