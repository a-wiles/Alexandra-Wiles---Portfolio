import React from "react";
import resume from "../../assets/alexsresume.pdf";

export default function index() {
    return (
    <object 
    className="resume" 
    width="65%" 
    height="100%" 
    data={resume} 
    type="application/pdf" aria-label="resume-pdf"         
    ></object>);
}