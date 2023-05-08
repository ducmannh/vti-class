import ListAccounts from "./components/ListAccounts";
import ListItemAccount from "./store/ListItemAccount";

function App() {
  return (
      <ListItemAccount>
        <ListAccounts />
      </ListItemAccount>
  );
}

export default App;
