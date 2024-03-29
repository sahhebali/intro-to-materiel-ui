import './App.css';
import { Button, Rating } from '@mui/material';
import NewsPaper from './components/NewsPaper/NewsPaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">My First Button</Button>
      <Rating name="read-only" value={4} readOnly />
      <NewsPaper></NewsPaper>
    </div>
  );
}

export default App;
