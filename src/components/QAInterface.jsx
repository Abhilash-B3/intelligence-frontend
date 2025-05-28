import { useState } from "react";
import Loader from "./Loader";

export default function QAInterface({ documents }) {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleAsk(e) {
    e.preventDefault();
    setError("");
    setAnswer(null);
    if (!selectedDoc || !question.trim()) {
      setError("Please select a document and enter your question.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setAnswer(
        `This is a mock answer for your question: "${question}" about document "${selectedDoc.title}".`
      );
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="bg-white rounded p-6 shadow-md w-full max-w-2xl mx-auto mt-8">
      <div className="mb-4">
        <label className="block font-semibold mb-2">Choose Document</label>
        <select
          className="w-full border rounded px-2 py-1"
          value={selectedDoc ? selectedDoc.id : ""}
          onChange={e => setSelectedDoc(documents.find(d => d.id === Number(e.target.value)))}
        >
          <option value="">-- Select Document --</option>
          {documents.map(doc => (
            <option key={doc.id} value={doc.id}>{doc.title} ({doc.file_type.toUpperCase()})</option>
          ))}
        </select>
      </div>
      <form onSubmit={handleAsk}>
        <label className="block font-semibold mb-2">Your Question</label>
        <textarea
          className="w-full border rounded px-2 py-2 mb-4"
          rows={3}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask anything about the document..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 disabled:opacity-60"
          disabled={loading}
        >
          Submit
        </button>
      </form>
      {loading && <Loader text="Thinking..." />}
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {answer && (
        <div className="mt-6">
          <label className="block font-semibold mb-2">Answer</label>
          <div className="bg-gray-100 border rounded p-4 whitespace-pre-wrap">{answer}</div>
        </div>
      )}
    </div>
  );
}