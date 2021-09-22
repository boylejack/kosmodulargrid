import React, { useEffect, useState } from 'react'
import { ModuleFilter } from './ModuleFilter';
import { ModuleList } from './ModuleList'

export const ModuleListContainer = () => {

  const [modules, setModules] = useState([]);
  const [makers, setMakers] = useState([]);
  const [modulesLoading, setModulesLoading] = useState(true);
  const [makersLoading, setMakersLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    function: [],
    makerId: [],
    width: [],
    type: []
  });

  const handleChange = (filters) => {
    console.log(filters);
    setSelectedFilters(filters);
  }

  useEffect(() => {
    fetch("/data/modules.json")
    .then((response) => response.json())
    .then((data) => {
      setModules(data);
      setModulesLoading(false);
    })
    .catch((error) => setError(true))
  }, []);

  useEffect(() => {
    fetch("/data/makers.json")
    .then((response) => response.json())
    .then((data) => {
      setMakers(data);
      setMakersLoading(false);
    })
    .catch((error) => setError(true))
  }, []);

  if (!modulesLoading && !makersLoading && !error) {
    return (
      <>
        <ModuleFilter modules={modules} makers={makers} handleChange={handleChange} />
        <ModuleList makers={makers} modules={modules} selectedFilters={selectedFilters} />
      </>
    )
  } else if (error) {
    return (
      <h5>Something went wrong</h5>
    )
  } else {
    return <h5>Loading...</h5>
  }
}