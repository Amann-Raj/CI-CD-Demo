import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Backend not reachable"));
  }, []);

  return (
    <div>
      <h1>🚀 MERN CI/CD LIVE</h1>
      <p>Backend Status: {status}</p>
    </div>
  );
}

export default App;
