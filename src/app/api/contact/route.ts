import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/backend/data";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
  }

  const record = await saveContactMessage({
    name: String(body.name),
    email: String(body.email),
    message: String(body.message),
  });

  return NextResponse.json({ id: record.id });
}
