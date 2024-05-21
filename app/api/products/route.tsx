import { NextRequest, NextResponse } from "next/server";
import productSchema from "./productSchema"
export function GET(request: NextRequest) {

  return NextResponse.json([
    { id: 1, product: "milk", price: 20 },
    { id: 2, product: "bread", price: 15 },
  ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = productSchema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })
    return NextResponse.json({data: body}, {status:201})

}