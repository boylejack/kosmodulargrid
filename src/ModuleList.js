import React from 'react'
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

export const ModuleList = (props) => {
  const { modules, makers } = props;

  return (
    <div className="p-grid">
      {modules.map(module => {
        return (
          <div className="p-col-12 p-md-4">
            <Card>
              <div className="p-d-flex">
                <div>
                  <img height="230px" src={module.imageLink} alt={`${module.name} - ${module.description}`} />
                </div>
                <div className="p-ml-4 p-d-flex p-flex-column p-jc-between">
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
                      <Tag severity="info" className="p-mr-2 p-mt-2" value={`${module.hp} HP`} />
                      {
                        module.function.map((fctn) => <Tag className="p-mr-2 p-mt-2" value={fctn}/>)
                      }
                      {
                        module.type.map((type) => <Tag severity="success" className="p-mr-2 p-mt-2" value={type}/>)
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