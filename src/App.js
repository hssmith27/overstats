import './App.css';
import { useState } from 'react';

function App() {
  const [stats, setStats] = useState({
    endorsementIcon: "https://static.playoverwatch.com/img/pages/career/icons/endorsement/5-8697f241ca.svg#icon",
    gamesLost: 0,
    gamesWon: 0,
    icon: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c3090e3a1dccc58f143ff53801bc0cecb139f0eb1278f157d0b5e29db9104bed.png",
    name: "Player Name"
  })

  return (
    <div id = "app">
      <InputID stats = {stats} setStats = {setStats}/>
      <PlayerSummary stats = {stats}/>
    </div>
  );
}

/**
 * Component to allow user to submit their BattleNet ID
 */
function InputID({stats, setStats}) {
  return (
      <input id = "tag-input" type = "text" 
      placeholder = "Enter a BattleTag#1234..." 
      onKeyDown = {(e) => 
          {if (e.key === "Enter") {
              const battleNetID = e.target.value.replace("#", "-");
              fetch('/stats/' + battleNetID).then(res => res.json()).then(data => setStats(data["stats"])).then(
                document.getElementById("player-summary").style.display = "block"
              );
          }}
      }
      />
  );
}

function PlayerSummary({stats}) {
  return (
    <div id = "player-summary">
      <div id = "player-banner">
        <img id = "icon" src = {stats.icon} class></img>
        <h1>{stats.name}</h1>
        <img id = "endorsement" src = {stats.endorsementIcon}></img>
      </div>
    </div>
  )
}

export default App;
