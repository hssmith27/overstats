import './App.css';

function App() {
  // fetch('/endorsement').then(res => res.json()).then(data => {setCurrentEndorsement(data.endorsement);});

  return (
    <div className="App">
      <InputID />
    </div>
  );
}

/**
 * Component to allow user to submit their BattleNet ID
 */
function InputID() {
  return (
      <input className = "tag-input" type = "text" 
      placeholder = "Enter a BattleTag#1234..." 
      onKeyDown = {(e) => 
          {if (e.key === "Enter") {
              const battleNetID = e.target.value.split("#");
              const battleNetIDDict = {name:battleNetID[0], tag:battleNetID[1]};
          }}
      }
      />
  );
}

export default App;
