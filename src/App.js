import logo from "./logo.svg";
import { Dollar, Notification } from "./components/index";
import "./App.css";

function App() {
  return (
    <>
      {/* I want: Default without adding title attribute in DOM it should render title with value as componentName Example: title="dollar" */}
      <Dollar />

      {/* It's working */}
      <Notification title="Stop Notification" />
    </>
  );
}

export default App;
