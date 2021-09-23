import React from 'react'
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

export const ModuleList = (props) => {
  const { modules, makers, selectedFilters } = props;

  return (
    <div className="p-grid">
      {modules
      .filter((module) => !selectedFilters.function || selectedFilters.function.length === 0 || selectedFilters.function.filter((fctn) => module.function.indexOf(fctn) >= 0).reduce((p,c) => p || c, false))
      .filter((module) => !selectedFilters.type || selectedFilters.type.length === 0 || selectedFilters.type.filter((t) => module.type.indexOf(t) >= 0).reduce((p,c) => p || c, false))
      .filter((module) => !selectedFilters.width || selectedFilters.width.length === 0 || selectedFilters.width.indexOf(module.width) >= 0)
      .filter((module) => !selectedFilters.makerId || selectedFilters.makerId.length === 0 || selectedFilters.makerId.indexOf(module.makerId) >= 0)
      .map(module => {
        return (
          <div className="p-col-12 p-md-6 p-lg-4" key={module.id}>
            <Card>
              <div className="p-grid">
                <div className="p-col-6">
                  <img width="100%" src={module.imageLink} alt={`${module.name} - ${module.description}`} />
                </div>
                <div className="p-d-flex p-col-6 p-flex-column p-jc-between">
                  <div>
                    <h4>
                      <a href={module.link} target="_blank" rel="noreferrer">
                        {module.name}
                      </a>
                    </h4>
                    <h5>{makers.find((maker) => maker.id === module.makerId).name}</h5>
                    <p>{module.description}</p>
                  </div>
                  <div>
                    <div className="p-mt-2">
                      <Tag severity="info" className="p-mr-2 p-mt-2" value={`${module.width} cm`} />
                      {
                        module.function.map((fctn) => <Tag key={fctn} className="p-mr-2 p-mt-2" value={fctn}/>)
                      }
                      {
                        module.type.map((type) => <Tag key={type} severity="success" className="p-mr-2 p-mt-2" value={type}/>)
                      }
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}