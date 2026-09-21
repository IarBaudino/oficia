import { NextResponse } from "next/server";
import { saveServiceRequest } from "@/lib/backend/data";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.service || !body.zone || !body.description) {
    return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
  }

  const record = await saveServiceRequest({
    firstName: String(body.firstName),
    lastName: String(body.lastName),
    email: String(body.email),
    phone: String(body.phone),
    serviceLabel: String(body.service),
    zoneLabel: String(body.zone),
    description: String(body.description),
    preferredDate: body.preferredDate ? String(body.preferredDate) : undefined,
    extraInfo: body.extra ? String(body.extra) : undefined,
  });

  return NextResponse.json({ id: record.id });
}
