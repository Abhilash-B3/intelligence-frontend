import UploadForm from "../components/UploadForm";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();
  function onSuccess() {
    setTimeout(() => navigate("/"), 1000);
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
      <UploadForm onSuccess={onSuccess} />
      <div className="text-xs text-gray-500 mt-4">After upload, your document will be processed for Q&A. Processing may take a few moments.</div>
    </div>
  );
}