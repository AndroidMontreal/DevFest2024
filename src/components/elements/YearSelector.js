import React, { useState } from 'react';
import YearChip from '@/components/elements/YearChip';
import { v4 as uuidv4 } from 'uuid';

const YearSelector = ({ years, selectedYear, handleYearChange }) => {
  return (
    <div className="mb-4 flex gap-2">
      {years.map(year => (
        <YearChip key={uuidv4()} year={year} selectedYear={selectedYear} handleYearChange={handleYearChange} />))}
    </div>
  );
};

export default YearSelector;
