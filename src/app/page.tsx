"use client";
import Content from "@/app/message.mdx";
import { initGoPlay } from "@/utils/goplay";
import { useEffect } from "react";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('pre+.goplay-container').forEach(initGoPlay);
  }, [])
  return (
    <main>
        <Content />
    </main>
  );
}