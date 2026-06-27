import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const logs = await prisma.log.findMany({
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(logs);
}
