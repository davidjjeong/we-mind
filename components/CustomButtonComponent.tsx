import React from "react";
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '700',
  subsets: ['latin'],
});

interface Props {
  borderWidth?: string;
  borderColor?: string;
  bgColor?: string;
  fontColor?: string;
  fontSize?: string;
  height?: string;
  width?: string;
  radius?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  borderWidth,
  borderColor,
  bgColor,
  fontColor,
  fontSize,
  height,
  width,
  radius,
  onClick,
  children
}) => {
  return (
    <button
      className={raleway.className}
      style={{
        borderWidth: borderWidth,
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: fontColor,
        fontSize: fontSize,
        height: height,
        width: width,
        borderRadius: radius
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;