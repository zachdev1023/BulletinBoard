import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/AppNavbar";
import Posts from "./components/Post/Post";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AppNavbar />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
