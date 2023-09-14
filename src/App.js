import { Dollar, Info } from "./components/js/index";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Icon Demo</h1>

      <section className="demo">
        {/* It's working :: without title attribute, but it will show <title> tag with default value as component name */}
        <Dollar />

        {/* It's working :: with title attribute */}
        <Info title="Important Information" />
      </section>
    </div>
  );
}

export default App;
