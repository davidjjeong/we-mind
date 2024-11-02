import React from "react";
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '700',
  subsets: ['latin'],
});

interface Props {
  id?: string;
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
  type?: string;
}

const Button: React.FC<Props> = ({
  id,
  borderWidth,
  borderColor,
  bgColor,
  fontColor,
  fontSize,
  height,
  width,
  radius,
  onClick,
  children,
  type
}) => {
  return (
    <button
      id={id}
      className={raleway.className}
      type={type}
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