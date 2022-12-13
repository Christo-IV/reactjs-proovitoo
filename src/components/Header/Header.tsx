import React from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <h2 className="heading">{title}</h2>
      <span className="divider"></span>
    </div>
  );
};
