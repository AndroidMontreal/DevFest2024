import React from 'react';

const YearChip = ({ year, selectedYear, handleYearChange }) => {
  return (
    <button
      className={`py-2 px-4 border rounded-full ${selectedYear === year ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      onClick={() => handleYearChange(year)}
    >
      {year}
    </button>
  );
};

export default YearChip;