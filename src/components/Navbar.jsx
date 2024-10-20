import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between border-b-[1px] border-zinc-700">
    
      <div className="nleft flex items-center w-full justify-between md:justify-start">
        <img className="w-[5rem]" src={logo} alt="" />
        
        <div className="block md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="links hidden md:flex gap-8 ml-0 md:ml-24">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            elem.length === 0 ? 
            <span className="w-[1px] h-6 bg-zinc-600"></span> : 
            <a key={index} className="font-regular flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.50em #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
