export default function parseJson(jsonData: string) {
  try {
    return JSON.parse(jsonData);
  } catch (error) {
    return { error: "Invalid JSON format. Please check the syntax." };
  }
}
