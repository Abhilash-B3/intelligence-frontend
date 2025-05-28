export default function DocumentList({ documents, onSelect, selectedId }) {
  if (!documents.length) return <div>No documents uploaded yet.</div>;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {documents.map(doc => (
        <div
          key={doc.id}
          className={`border rounded-lg px-4 py-3 shadow-md cursor-pointer ${selectedId === doc.id ? "border-blue-500 bg-blue-50" : "hover:border-blue-400"}`}
          onClick={() => onSelect && onSelect(doc)}
        >
          <div className="font-semibold text-lg">{doc.title}</div>
          <div className="text-sm text-gray-600">
            Type: {doc.file_type.toUpperCase()}<br />
            Pages: {doc.pages}<br />
            Uploaded: {new Date(doc.created_at).toLocaleString()}
          </div>
          <div className={`mt-2 text-xs px-2 py-1 rounded ${doc.status === "processed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {doc.status === "processed" ? "Ready" : doc.status}
          </div>
        </div>
      ))}
    </div>
  );
}