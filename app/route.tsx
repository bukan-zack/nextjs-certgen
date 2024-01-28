import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const tinos = await fetch(
        new URL("../public/Tinos.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());
    const { searchParams } = request.nextUrl;
    const name = searchParams.get("name") || "you";
    const reason = searchParams.get("reason") || "being single";
    
    return new ImageResponse(
        <div
            style={{
                fontFamily: "Tinos",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
                backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-diploma-border-frame_23-2151199907.jpg?w=740&t=st=1706442136~exp=1706442736~hmac=9e4649286a686c2919521b6e3ca82c453a172de459ea42ef193c628539983133')",
            }}
        >
            <h1
                style={{
                    color: "black",
                    fontSize: "4.5rem",
                }}
            >
                Award of Excellence
            </h1>
            <p
                style={{
                    textTransform: "uppercase",
                    fontSize: "1.4rem",
                }}
            >
                is hereby presented to:
            </p>
            <p
                style={{
                    textTransform: "uppercase",
                    fontSize: "2rem",
                    fontStyle: "italic",
                }}
            >
                {name}
            </p>
            <p
                style={{
                    textTransform: "uppercase",
                    fontSize: "1.4rem",
                }}
            >
                For:
            </p>
            <p
                style={{
                    textTransform: "uppercase",
                    fontSize: "2rem",
                    fontStyle: "italic",
                }}
            >
                {reason}
            </p>
        </div>,
        {
            width: 1280,
            height: 720,
            fonts: [
                {
                    name: "Tinos",
                    data: tinos,
                    weight: 400,
                    style: "normal",
                },
            ],
        },
    );
}