import React from "react";

export default function Header() {
  return (
    <div className="flex">
      <div>Logo</div>
      <div className="flex">
       <input type="text"/>
       <button>Search</button>
       <img src="src/assets/cart.png" className="w-12 h-12" />
      </div>
    </div>
  );
}
