export const dynamic = 'force-dynamic';

export async function GET() {
    return Response.json({ data: "A message from the server-side." })
  }