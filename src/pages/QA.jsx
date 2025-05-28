import { useEffect, useState } from "react";
import QAInterface from "../components/QAInterface";
import Loader from "../components/Loader";

export default function QA() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDocuments([
        {
          id: 1,
          title: "Sample PDF Document",
          file_type: "pdf",
          pages: 3,
          created_at: new Date().toISOString(),
          status: "processed",
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>
      {loading ? <Loader /> : <QAInterface documents={documents} />}
    </div>
  );
}