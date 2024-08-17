import './App.css';
import { useState } from 'react';

/**
 * Main component, state gives filler stats that are updated
 * when player enters their username
 */
function App() {
  const [stats, setStats] = useState({
    endorsement: { 
      frame: "https://static.playoverwatch.com/img/pages/career/icons/endorsement/5-8697f241ca.svg#icon",
    },
    general: {
      games_lost: 1,
      games_won: 1,
      winrate: 50
    },
    avatar: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c3090e3a1dccc58f143ff53801bc0cecb139f0eb1278f157d0b5e29db9104bed.png",
    username: "Player Name",
    title: "Default Title",
    namecard: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2238c652dbc8b3983c49023eb5acd8a17baad5711f065bb1af81dfb96b71b42e.png"
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
              fetch('/summary/' + battleNetID).then(res => res.json()).then(data => setStats(data)).then(document.getElementById("player-summary").style.display = "inline-block");
          }}
      }
      />
  );
}

/**
 * Component that encloses whole player summary
 */
function PlayerSummary({stats}) {
  return (
    <div id = "player-summary">
      <TitleCard stats = {stats} />
      <WinRate stats = {stats} />
      <NameCard stats = {stats} />
    </div>
  )
}

/**
 * Component that shows a player's icon and endorsement level
 */
function TitleCard({stats}) {
  return (
    <div id = "player-banner">
        <img id = "icon" src = {stats.avatar} class></img>
        <h1>{stats.username}</h1>
        <img id = "endorsement" src = {stats.endorsement.frame}></img>
      </div>
  );
}

/**
 * Component that showcases a player's win rate
 */
function WinRate({stats}) {
  return (
    <div id = "win-rate">
      <h3>Win Rate </h3>
      <hr />
      <h3>{stats.general.winrate}%</h3>
      <h4>Total Games: {stats.general.games_won + stats.general.games_lost}</h4>
    </div>
  );
}

/**
 * Component that showcases a player's name card and title
 */
function NameCard({stats}) {
  return (
    <div id = "name-card">
      <h3>{stats.title}</h3>
      <img id = "namecard" src = {stats.namecard} />
    </div>
  )
}

export default App;