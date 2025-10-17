import { useState } from "react"
import GradientPreview from "./components/GradientPreview";
import { Box, Button, Link } from "@chakra-ui/react"
import ColorPicker from "./components/ColorPiker";
import "./App.css"

export default function App() {
  const [color1, setColor1] = useState("#ff7b00");
  const [color2, setColor2] = useState("#6a00ff");
  const [angle, setAngle] = useState(90);

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradient);
    alert("Gradient CSS copied!");
  };

  return (
    <>
     <Box>
      <div className="app">
        <h1 className="title">Gradient Generator</h1>
        <GradientPreview gradient={gradient} />

        <div className="picker-container">
          <ColorPicker label="Color 1" color={color1} onChange={setColor1} />
          <ColorPicker label="Color 2" color={color2} onChange={setColor2} />
        </div>

        <div className="angle-slider">
          <label>
            <strong>Angle({angle}°):</strong>
          </label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
          />
        </div>

        <button className="copy-btn" onClick={copyToClipboard}>
          Copy CSS
        </button>

      

       
      </div>
      


    </Box>

 
    </>
   

  );
}