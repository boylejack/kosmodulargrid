import React from 'react'

export const ModuleList = (props) => {
  const { modules, makers } = props;

  return (
    makers.map((maker) => {
      return (
        <div key={maker.id}>
          <h3>{maker.name}</h3>
          <h4>Modules</h4>
          {modules.filter((module) => module.makerId === maker.id).map((module) => {
            return (
              <div>
                <h5>{module.name}</h5>
                <p>{module.description}</p>
              </div>
            )
          })}
        </div>
      )
    })
  )
}