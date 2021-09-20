import React, { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';

export const ModuleFilter = (props) => {
  const [selectedFilters, setSelectedFilters] = useState(null);

  const types = [
    {
      label: "Filter",
      value: "filter"
    },
    {
      label: "VCA",
      value: "vca"
    }
  ]
  return (
    <>
      <h5>Function</h5>
      <MultiSelect name="Function" options={types} value={selectedFilters} onChange={(e) => setSelectedFilters(e.value)} />
    </>
  )
}