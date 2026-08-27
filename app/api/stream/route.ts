import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Proxy endpoint to allow HTTPS clients to listen to the HTTP Icecast stream without Mixed Content blocks
export async function GET(req: NextRequest) {
  const remoteStreamUrl = "http://64.177.41.185:8000/live";

  try {
    const response = await fetch(remoteStreamUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; RadioDocesMemorias/1.0)",
        Accept: "*/*",
      },
      cache: "no-store",
    });

    if (!response.ok || !response.body) {
      return new Response("Erro ao conectar com o servidor da rádio", {
        status: 502,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Access-Control-Allow-Origin": "*",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Erro no proxy de áudio da rádio:", error);
    return new Response("Erro ao transmitir sinal de áudio", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
