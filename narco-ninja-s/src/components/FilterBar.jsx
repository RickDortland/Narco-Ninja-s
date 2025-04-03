import React from "react";
import "../css/Medicatie.css";

function FilterBar({ search, setSearch, filter, setFilter }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Zoek medicijnen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-buttons">
        <button
          className={filter === "Alle" ? "active" : ""}
          onClick={() => setFilter("Alle")}
        >
          Alle
        </button>
        <button
          className={filter === "Op recept" ? "active" : ""}
          onClick={() => setFilter("Op recept")}
          disabled
        >
          Op recept
        </button>
        <button
          className={filter === "Zelfzorg" ? "active" : ""}
          onClick={() => setFilter("Zelfzorg")}
          disabled
        >
          Zelfzorg
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
