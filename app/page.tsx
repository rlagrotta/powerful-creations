"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="container mx-auto px-4">
       <div className="logo"><Image src="/images/logo.svg" alt="logo" width={300} height={300} /></div>

    <div className="menu_container">
      <button onClick={toggleMenu} className={`menu_container__menu-title ${isOpen ? "open" : ""}`}>
        {`${isOpen ? "x" : "☰"}`} Menu
      </button>

      <div className={`menu_container__menu-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
    </div>

       

    </div>
  );
}