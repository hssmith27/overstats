import './App.css';
import { useState } from 'react';

function App() {
  const [stats, setStats] = useState({
    endorsementIcon: "https://static.playoverwatch.com/img/pages/career/icons/endorsement/5-8697f241ca.svg#icon",
    gamesLost: 1,
    gamesWon: 1,
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
              )
          }}
      }
      />
  );
}

function PlayerSummary({stats}) {
  return (
    <div id = "player-summary">
      <TitleCard stats = {stats} />
      <WinRate stats = {stats} />
    </div>
  )
}

function TitleCard({stats}) {
  return (
    <div id = "player-banner">
        <img id = "icon" src = {stats.icon} class></img>
        <h1>{stats.name}</h1>
        <img id = "endorsement" src = {stats.endorsementIcon}></img>
      </div>
  );
}

function WinRate({stats}) {
  return (
    <div id = "win-rate">
      <h3>Win Rate </h3>
      <hr />
      <div id = "win-rate-graph">{Math.round(stats.gamesWon/(stats.gamesWon + stats.gamesLost) * 10000) / 100}%</div>
      <h4>Total Games: {stats.gamesWon + stats.gamesLost}</h4>
    </div>
  );
}

export default App;
