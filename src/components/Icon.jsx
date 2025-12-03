import React from "react";
import "./Icon.css";

export default function Icon({ country }) {
  const drapeau = {
    Maroc: "https://flagsapi.com/MA/flat/32.png",
    France: "https://flagsapi.com/FR/flat/32.png",
    Espagne: "https://flagsapi.com/ES/flat/32.png",
    Italie: "https://flagsapi.com/IT/flat/32.png",
    USA: "https://flagsapi.com/US/flat/32.png",
    International:"https://flagsapi.com/AL/shiny/64.png",
    Japon:"https://flagsapi.com/JP/shiny/64.png",
    Mexique:"https://flagsapi.com/MX/shiny/64.png",
     Bresil:"https://flagsapi.com/BR/shiny/64.png",
     Inde:"https://flagsapi.com/IN/shiny/64.png" ,
     Thaïlande:"https://flagsapi.com/TH/shiny/64.png",
    "Middle East":"https://flagsapi.com/PS/shiny/64.png"
  };

  const drapeauUrl = drapeau[country] || "https://flagsapi.com/UN/flat/32.png"; 

  return <img className="drapeau" src={drapeauUrl} alt={country} />;
}

