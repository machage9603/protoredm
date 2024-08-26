import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/UI/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to READMEaker</h1>
      <p className="mb-8">
        Create professional README files for your projects with ease.
      </p>
      <Button asChild>
        <Link to="/generator">Get Started</Link>
      </Button>
    </div>
  );
}
