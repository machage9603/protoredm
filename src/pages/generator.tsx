import React from "react";
import ReadMeGenerator from "../Components/ReadMeGenerator/ReadMeGenerator";

export default function GeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">README Generator</h1>
      <ReadMeGenerator />
    </div>
  );
}
