import React from "react";

interface NavbarLogoProps {
  imageUrl: string;
}

function NavbarLogo({ imageUrl }: NavbarLogoProps) {
  return (
    <img
      src={imageUrl}
      alt="Logo"
      className="w-[91px] h-[91px] absolute left-0 top-[11px]"
    />
  );
}

export default NavbarLogo;