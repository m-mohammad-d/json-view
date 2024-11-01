import { Editor } from "@monaco-editor/react";

interface JsonEditorProps {
  jsonInput: string;
  setJsonInput: (value: string) => void;
}

function JsonEditor({ jsonInput, setJsonInput }: JsonEditorProps) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <Editor
        height="100vh"
        defaultLanguage="json"
        value={jsonInput}
        onChange={(value) => setJsonInput(value || "")}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          fontSize: 14,
          lineHeight: 24,
          scrollbar: {
            vertical: "visible",
            horizontal: "visible",
          },
        }}
      />
    </div>
  );
}

export default JsonEditor;
