import React from "react";

const Button = ({ btnLabel, onClick }: { btnLabel: string; onClick: any }) => {
  return (
    <button
      className="font-bold hover:bg-gray-100 py-2 px-4 border-2 border-black rounded-md active:scale-95 ease-out transition-transform"
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
