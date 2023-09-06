import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode,setDarkMode] = useState(false)
  const handleMode = () => {
    setDarkMode(!darkMode)
  }

  const appClass = darkMode ? "App Dark" : "App Light"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{darkMode ? "App Dark" : "App Light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
