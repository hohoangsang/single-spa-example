import React from "react";

export default function Navbar(props: any) {
  return (
    <header className="flex">
      <nav className="nav">
        <a href="/page1/123/index" className="link">
          Page 1
        </a>
        <a href="/page2" className="link">
          Page 2
        </a>
      </nav>
    </header>
  );
}
