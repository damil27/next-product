import { NextRequest, NextResponse } from "next/server";
import schema from "../schema"
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json(
      { error: "Resources can not be found" },
      { status: 400 }
    );
  }
  return NextResponse.json({ id: 1, name: "Damilare" });
}

export async function PUT(request: NextRequest, {params}:{params:{id:number}}){
    const body = await request.json()
    const validation = schema.safeParse(body)
   
    if (!validation.success) return NextResponse.json( validation.error.errors, {status:400})
    
    if(params.id > 10) return NextResponse.json({error:" User can not found!"}, {status:404})
    return NextResponse.json({id:2, name}, {status:201})
}

export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
    if (params.id > 10) return NextResponse.json({ error: "user can not be found" }, { status: 404 })
    return NextResponse.json({})
}