import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const flows = await prisma.flow.findMany();
  return NextResponse.json(flows);
}

export async function POST(req: Request) {
  const data = await req.json();

  const flow = await prisma.flow.create({
    data
  });

  return NextResponse.json(flow);
}
