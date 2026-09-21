import { NextResponse } from "next/server";
import { saveTestimonial } from "@/lib/backend/data";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.authorName || !body.experience) {
    return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
  }

  const record = await saveTestimonial({
    authorName: String(body.authorName),
    experience: String(body.experience),
    serviceLabel: body.service ? String(body.service) : undefined,
  });

  return NextResponse.json({ id: record.id });
}
