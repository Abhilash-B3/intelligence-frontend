// API abstraction for all backend calls
const BASE_URL = "http://localhost:8000/api"; // Change if your backend differs

// Helper for GET requests
export const apiGet = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

// Helper for POST (optionally multipart)
export const apiPost = async (endpoint, data, isForm = false) => {
  let options;
  if (isForm) {
    options = {
      method: "POST",
      body: data,
    };
  } else {
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  }
  const res = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};