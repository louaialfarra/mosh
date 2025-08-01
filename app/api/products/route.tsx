import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
const ghrad = [
  { id: 1, name: "milk", price: 2.5 },
  { id: 2, name: "bread", price: 2.5 },
];
export function GET(request: NextRequest) {
  return NextResponse.json(ghrad);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error._zod, { status: 400 });
  return NextResponse.json({ id: 55, name: body.name, price: body.price });
}
