import React, { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CloseIcon from '@mui/icons-material/Close';

const FilterBar = ({ onSortSelect, onFilterClick, onVegToggle }) => {
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Relevance");

  const sortOptions = ["Relevance", "Rating", "Cost: Low to High", "Cost: High to Low"];

  return (
    <div className="action-buttons">
      {/* 1. Filter Button */}
      <button className="f-btn" onClick={onFilterClick}><TuneIcon /> Filters</button>

      {/* 2. Sort Button & Popup */}
      <button className="f-btn" onClick={() => setShowSort(true)}>
        <SwapVertIcon /> Sort By {selectedSort !== "Relevance" && `(${selectedSort})`}
      </button>

      {showSort && (
        <div className="modal-overlay" onClick={() => setShowSort(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Sort By</h3>
              <CloseIcon onClick={() => setShowSort(false)} style={{ cursor: 'pointer' }} />
            </div>
            <div className="options-list">
              {sortOptions.map((opt) => (
                <div 
                  key={opt} 
                  className="option-item" 
                  onClick={() => {
                    setSelectedSort(opt);
                    onSortSelect(opt);
                    setShowSort(false);
                  }}
                >
                  <span>{opt}</span>
                  <div className={`radio-circle ${selectedSort === opt ? 'checked' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Static Action Buttons */}
      <button className="f-btn"><MyLocationIcon /> Near By</button>
      <button className="f-btn" onClick={() => onVegToggle(false)}>
        <RadioButtonCheckedIcon style={{ color: "#d32f2f" }} /> Non Veg
      </button>
      <button className="f-btn" onClick={() => onVegToggle(true)}>
        <RadioButtonCheckedIcon style={{ color: "#2e7d32" }} /> Pure Veg
      </button>
    </div>
  );
};

export default FilterBar;