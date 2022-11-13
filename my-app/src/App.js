import logo from "./logo.svg";
import "./App.css";
import { HomepageNavbar } from "./Component/HomepageNavbar/HomepageNavbar";
import { ShowSec } from "./Component/ShowSec/showSec";

function App() {
  return (
    <div className="App">
      <HomepageNavbar />
      <ShowSec/>
    </div>
  );
}

export default App;
