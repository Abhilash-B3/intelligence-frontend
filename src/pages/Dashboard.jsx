import { useEffect, useState } from "react";
import DocumentList from "../components/DocumentList";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use mock documents instead of API call
    setTimeout(() => {
      setDocuments([
        {
          id: 1,
          title: "Sample PDF Document",
          file_type: "pdf",
          pages: 3,
          created_at: new Date().toISOString(),
          status: "processed",
        },
        {
          id: 2,
          title: "Project Specs",
          file_type: "docx",
          pages: 6,
          created_at: new Date().toISOString(),
          status: "processing",
        }
      ]);
      setLoading(false);
    }, 800); // Simulate loading
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Uploaded Documents</h1>
      {loading ? <Loader /> : <DocumentList documents={documents} />}
    </div>
  );
}