import "./App.css";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
