import React from 'react';
import { ModuleListContainer } from './ModuleListContainer';

import './layout/flags/flags.css';
import './layout/layout.scss';

import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
  return (
    <div className="layout-wrapper">
      <div className="layout-main-container">
        <div className="layout-main">
          <h1>Kosmodular Grid</h1>
          <ModuleListContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
