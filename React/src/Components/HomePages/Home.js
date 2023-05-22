import React from "react";
import Img1 from "../Images/Home.png";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Img1})`,
          height: "87.5vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="img-fluid"
      ></div>
    </>
  );
}
