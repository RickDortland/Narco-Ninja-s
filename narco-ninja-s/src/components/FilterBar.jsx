import React from "react";

function FilterBar() {
  return (
    <div>
      <input type="text" placeholder="Zoek medicijnen..." />
      <button>Alle</button>
      <button>Op recept</button>
      <button>Zelfzorg</button>
    </div>
  );
}

export default FilterBar;
