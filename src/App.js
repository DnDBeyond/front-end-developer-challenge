import React from 'react';
import Loadout from "./components/Loadout";
import './styles/App.scss';

function App() {
  return (
    <div className="rune-mastery">
      <Loadout totalPoints={6} />
    </div>
  );
}

export default App;
