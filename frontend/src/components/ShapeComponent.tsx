import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ นำเข้า useNavigate สำหรับเปลี่ยนหน้า

import Shape1 from "../../public/shape1.svg?react";
import Shape2 from "../../public/shape2.svg?react";
import Shape3 from "../../public/shape3.svg?react";
import Shape4 from "../../public/shape4.svg?react";
import Shape5 from "../../public/shape5.svg?react";
import Shape6 from "../../public/shape6.svg?react";

interface ShapeProps {
  id: number; // ✅ ใช้ id แยก Shape
}

const ShapeComponent: React.FC<ShapeProps> = ({ id }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const shape = document.getElementById(`shape-${id}`);
    if (shape) {
      shape.style.animation = hovered
        ? "expandOnHover 0.5s forwards"
        : "floating 3s infinite ease-in-out";
    }
  }, [hovered, id]);

  switch (id) {
    case 1:
      return (
        <div
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Shape1
            id={`shape-${id}`}
            onClick={() => navigate("/service/centralize-management")}
            width="100px"
            height="100px"
            style={{
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
          />
          <span className="shape-text">Centralize Management</span>
        </div>
      );
    case 2:
      return (
        <Shape2
          id={`shape-${id}`}
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      );
    case 3:
      return (
        <Shape3
          id={`shape-${id}`}
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      );
    case 4:
      return (
        <Shape4
          id={`shape-${id}`}
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      );
    case 5:
      return (
        <Shape5
          id={`shape-${id}`}
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      );
    case 6:
      return (
        <Shape6
          id={`shape-${id}`}
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      );
    default:
      return (
        <Shape1
          id={`shape-${id}`}
          className="shape"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      ); // ✅ ถ้าไม่มี id ที่ตรง ให้ใช้ Shape1
  }

  //   return (
  //     <Shape1
  //       id={`shape-${id}`}
  //       className="shape"
  //       onMouseEnter={() => setHovered(true)}
  //       onMouseLeave={() => setHovered(false)}
  //       style={{
  //         cursor: "pointer",
  //         transition: "transform 0.3s ease-in-out",
  //       }}
  //     />
  //   );
};

export default ShapeComponent;
