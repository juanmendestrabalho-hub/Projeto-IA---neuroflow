import Dashboard from "@/components/Dashboard";
import FlowBuilder from "@/components/FlowBuilder";
import Logs from "@/components/Logs";

export default function Page() {
  return (
    <main className="p-6 grid grid-cols-3 gap-4">
      <Dashboard />
      <FlowBuilder />
      <Logs />
    </main>
  );
}
