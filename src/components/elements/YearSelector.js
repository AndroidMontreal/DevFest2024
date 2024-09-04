import React, { useState } from 'react';
import YearChip from '@/components/elements/YearChip';

const YearSelector = ({ years, selectedYear, handleYearChange }) => {
  return (
    <div className="mb-4 flex gap-2">
      {years.map(year => (<YearChip key={year} year={year} selectedYear={selectedYear} handleYearChange={handleYearChange} />))}
    </div>
  );
};

export default YearSelector;