"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [flows, setFlows] = useState([]);

  useEffect(() => {
    fetch("/api/flows")
      .then(res => res.json())
      .then(setFlows);
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-xl mb-2">Flows</h2>
      <ul>
        {flows.map((f: any) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}
