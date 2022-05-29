import "./App.css";
import Routing from './components/routes'

export const searchParams = window.location.search;

function App() {
  return (
    <Routing />
  );
}

export default App;
