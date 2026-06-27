"use client";
import { useEffect, useState } from "react";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/api/execute")
      .then(res => res.json())
      .then(setLogs);
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2>Logs</h2>
      <ul>
        {logs.map((l: any) => (
          <li key={l.id}>{l.message}</li>
        ))}
      </ul>
    </div>
  );
}
