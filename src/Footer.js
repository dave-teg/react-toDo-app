import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p>{length} todo {length === 1 ? "item" : "items"}</p>
    </footer>
  );
};

export default Footer;
