"use client";
import { useState } from "react";

export default function FlowBuilder() {
  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState("");
  const [action, setAction] = useState("");

  const create = async () => {
    await fetch("/api/flows", {
      method: "POST",
      body: JSON.stringify({ name, trigger, action })
    });

    location.reload();
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2>Criar Flow</h2>

      <input placeholder="Nome" onChange={e => setName(e.target.value)} className="w-full text-black"/>
      <input placeholder="Trigger" onChange={e => setTrigger(e.target.value)} className="w-full text-black"/>
      <input placeholder="Action" onChange={e => setAction(e.target.value)} className="w-full text-black"/>

      <button onClick={create} className="bg-blue-500 p-2 mt-2">
        Criar
      </button>
    </div>
  );
}
