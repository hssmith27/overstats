import './App.css';

function App() {
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
              const battleNetID = e.target.value.replace("#", "-");
              fetch('/stats/' + battleNetID).then(res => res.json()).then(data => console.log(data));
          }}
      }
      />
  );
}

export default App;
