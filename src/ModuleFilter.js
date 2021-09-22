import React, { useEffect, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { uniqBy } from 'lodash';

export const ModuleFilter = (props) => {
  const {handleChange} = props;
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedHp, setSelectedHp] = useState(null);
  const [selectedMaker, setSelectedMaker] = useState(null);

  const possibleFunctions = uniqBy(props.modules.map((module) => {
    return module.function;
  }).flat(), (v) => v);

  const possibleTypes = uniqBy(props.modules.map((module) => {
    return module.type
  }).flat(), (v) => v);

  const possibleHps = uniqBy(props.modules.map((module) => {
    return module.hp
  }), (v) => v);

  useEffect(() => {
    handleChange({
      function: selectedFunction,
      type: selectedType,
      hp: selectedHp,
      maker: selectedMaker
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFunction, selectedType, selectedHp, selectedMaker])

  return (
    <div className="p-grid">
      <div className="p-col-12 p-md-3" >
        <h5>Function</h5>
        <MultiSelect style={{width: "100%"}} panelHeaderTemplate={() => (<></>)} showClear={false} showSelectAll={false} name="Function" options={possibleFunctions} value={selectedFunction} onChange={(e) => setSelectedFunction(e.value)} />
      </div>
      <div className="p-col-12 p-md-3" >
        <h5>Type</h5>
        <MultiSelect style={{width: "100%"}} panelHeaderTemplate={() => (<></>)} showClear={false} showSelectAll={false} name="Type" options={possibleTypes} value={selectedType} onChange={(e) => setSelectedType(e.value)} />
      </div>
      <div className="p-col-12 p-md-3" >
        <h5>HP</h5>
        <MultiSelect style={{width: "100%"}} panelHeaderTemplate={() => (<></>)} showClear={false} showSelectAll={false} name="HP" options={possibleHps} value={selectedHp} onChange={(e) => setSelectedHp(e.value)} />
      </div>
      <div className="p-col-12 p-md-3" >
        <h5>Maker</h5>
        <MultiSelect style={{width: "100%"}} panelHeaderTemplate={() => (<></>)} showClear={false} showSelectAll={false} name="Maker" options={props.makers.map((m) => ({value: m.id, label: m.name}))} value={selectedMaker} onChange={(e) => setSelectedMaker(e.value)} />
      </div>
    </div>
  )
}