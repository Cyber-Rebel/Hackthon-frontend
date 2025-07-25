
import React from 'react';
const Books = ({img}) => {
  return (
     <div
      style={{
        width: "200px",
        height: "260px",
        margin: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "900px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "260px",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: "rotateY(-30deg)",
          transition: "transform 0.75s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(-30deg)";
        }}
      >
        <img
          src={`${img}`}
          alt="Book Cover"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderTopRightRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem",
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Approximating "shadow-image-shadow"
          }}
        />
        <div
          style={{
            backgroundColor: "#fff",
            height: "248px", // 260px - 2 * 6px
            width: "50px",
            position: "absolute",
            top: "3px",
            transform: "translateX(190px) rotateY(90deg)",
            transformOrigin: "left",
          }}
        />
        <div
          style={{
            backgroundColor: "#01060f",
            height: "260px",
            width: "200px",
            position: "absolute",
            left: 0,
            borderTopRightRadius: "0.25rem",
            borderBottomRightRadius: "0.25rem",
            transform: "translateZ(-1px)",
            boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.3)", // Approximating back cover shadow
          }}
        />
      </div>
    </div>
  );
}

export default Books;