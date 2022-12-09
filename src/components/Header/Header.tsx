import React from "react";
import "./Header.css";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <div className="header">
      <h2 className="heading">{title}</h2>
      <span className="divider"></span>
    </div>
  );
};
