import { NextResponse } from "next/server";
import { saveJoinRequest } from "@/lib/backend/data";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.trade || !body.specialties || !body.experience || !body.workZone) {
    return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
  }

  const record = await saveJoinRequest({
    firstName: String(body.firstName),
    lastName: String(body.lastName),
    email: String(body.email),
    phone: String(body.phone),
    trade: String(body.trade),
    specialties: String(body.specialties),
    experience: String(body.experience),
    education: body.education ? String(body.education) : undefined,
    workZone: String(body.workZone),
    availability: body.availability ? String(body.availability) : undefined,
    bio: body.bio ? String(body.bio) : undefined,
  });

  return NextResponse.json({ id: record.id });
}
