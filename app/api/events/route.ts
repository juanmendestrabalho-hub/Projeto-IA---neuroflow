import { NextResponse } from "next/server";
import { runEvent } from "@/lib/engine";

export async function POST(req: Request) {
  const { event } = await req.json();

  await runEvent(event);

  return NextResponse.json({ ok: true });
}
