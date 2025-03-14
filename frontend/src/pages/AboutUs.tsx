import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // ✅ นำเข้า useNavigate สำหรับเปลี่ยนหน้า
// import MyNavbar from "../components/MyNavbar";
// import Particles from "@tsparticles/react";
import ParticlesComponent from "../components/ParticlesComponent.";
import ShapeComponent from "../components/ShapeComponent";

import Floor from "../../public/floor.svg?react";

const AboutUs: React.FC = () => {
  useEffect(() => {
    // ✅ ตัวอย่างการใช้งาน useEffect ในการทำ interactive บนหน้าเว็บ
    const interBuble: HTMLDivElement =
      document.querySelector<HTMLDivElement>(".interactive")!;
    let curX: number = 0;
    let curY: number = 0;
    let tgX: number = 0;
    let tgY: number = 0;

    if (!interBuble) return;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBuble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (e: MouseEvent) => {
      tgX = e.clientX;
      tgY = e.clientY;
    });

    move();
  }, []);

  const memoizedParticles = useMemo(
    () => <ParticlesComponent id="about" height="500px" />,
    []
  );

  const navigate = useNavigate(); // ✅ ใช้ navigate สำหรับเปลี่ยนหน้า

  return (
    <div>
      <div className="about">
        <div className="about-content">
          <h1>The Excellent</h1>
          <div className="about-text">
            <p>
              The Excellent Communication Company Limited was founded in 2007.
              to be an IT Solution and Engineering company who provide product,
              solution including design and Engineering we continuously develop
              all our solutions to be the most stability, efficiency and data
              safe.
            </p>
          </div>
        </div>
        <div className="about-particles">
          {/* <ParticlesComponent id="about" height="500px" /> */}
          {memoizedParticles}
        </div>
      </div>
      <div className="floating-container">
        <div className="gradient-bg">
          <div className="service-content">
            <h1>
              Service
              <br />
              and <br />
              Solution
            </h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>

        {/* ✅ Shape1 SVG ที่มี Hover Effect */}
        {/* ✅ สร้าง Shape หลายอันโดยใช้ id */}
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <ShapeComponent key={id} id={id} />
        ))}

        <Floor className="floor "></Floor>
      </div>
    </div>
  );
};

export default AboutUs;
