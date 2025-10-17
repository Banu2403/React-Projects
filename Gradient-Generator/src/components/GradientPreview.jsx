import React from "react";

export default function GradientPreview({ gradient }) {
  return (
    <div className="gradient-preview" style={{ background: gradient }}></div>
  );
}
