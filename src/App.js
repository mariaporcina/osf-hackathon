import "./App.css";
import Routing from './components/routes'

export const customerId = window.location.search;

function App() {
  return (
    <Routing />
  );
}

export default App;
