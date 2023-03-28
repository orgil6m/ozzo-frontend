import React from "react";

const CoverPhoto = ({ src: img }) => {
  return (
    <div
      className="w-full md:bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${img.src}` }}
    >
      <div className="p-32 w-full h-[30rem] flex justify-center items-center"></div>
    </div>
  );
};

export default CoverPhoto;
