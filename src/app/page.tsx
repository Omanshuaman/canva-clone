"use client";
import { Canvas, Textbox } from "fabric";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [canvasIntance, setCanvasIntance] = useState<Canvas | null>(null);

  useEffect(() => {
    const canvasContainer = document.getElementById("canvas-container");
    if (!canvasContainer) return;
    const newCanvasElement = document.createElement("canvas");
    canvasContainer.appendChild(newCanvasElement);

    const fabricCanvasObj = new Canvas(newCanvasElement, {
      width: 500,
      height: 500,
    });
    const text = new Textbox("Hello World", {
      left: 100,
      top: 100,
      width: 200,
    });
    fabricCanvasObj.add(text);
    fabricCanvasObj.backgroundColor = "#fff";
    fabricCanvasObj.renderAll();
    setCanvasIntance(fabricCanvasObj);
  }, []);
  return (
    <div className="w-full h-screen bg-gray-300">
      <div
        id="canvas-container"
        className="flex flex-col items-center gap-5 w-full p-2">
        {/* canvas */}
      </div>
    </div>
  );
}
