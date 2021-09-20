import React from 'react'
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';

export const ModuleList = (props) => {
  const { modules, makers } = props;

  return (
    modules.map(module => {
      return (
        <Card style={{ width: "30rem" }}>
          <div className="p-d-flex">
            <div>
              <img height="230px" src={module.imageLink} alt={`${module.name} - ${module.description}`} />
            </div>
            <div className="p-ml-4">
              <h4>{module.name}</h4>
              <h5>{makers.find((maker) => maker.id === module.makerId).name}</h5>
              <p>{module.description}</p>
              <div className="p-mt-2">
                <Chip className="p-mr-2" label={`${module.hp} hp`} />
                {
                  module.function.map((fctn) => <Tag className="p-mr-2" value={fctn}/>)
                }
              </div>
            </div>
          </div>
        </Card>
      )
    })
  )
}