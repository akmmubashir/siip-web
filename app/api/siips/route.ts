import { NextResponse } from "next/server";

const UPSTREAM_URL =
  "https://multi-project-form-email-api.vercel.app/api/siips";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const upstream = await fetch(UPSTREAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();
    const isJson = upstream.headers
      .get("content-type")
      ?.includes("application/json");
    const body = isJson ? JSON.parse(text || "{}") : text;

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error: body || "Upstream request failed",
        },
        { status: upstream.status },
      );
    }

    return NextResponse.json(body, { status: upstream.status });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
