import logo from "./logo.svg";
import {
  Dollar,
  JoinTalent,
  Info,
  AmfamAlertTriangleFill1,
  Notification,
} from "./components/index";
import "./App.css";

function App() {
  return (
    <>
      {/* It's working :: without title attribute */}
      <Dollar />

      {/* It's working :: without title attribute */}
      <JoinTalent />

      {/* It's working :: without title attribute */}
      <Info />

      {/* It's working :: without title attribute */}
      <AmfamAlertTriangleFill1 title="AMFAM Triangle" />

      {/* It's working :: with title attribute */}
      <Notification title="Stop Notification" />
    </>
  );
}

export default App;
