import logo from './logo.svg';
import Task from './components/Task';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash the dishes.">
        
      </Task>
      <Task title="Tidy" deadline="Tomorrow" description="Tidy rubbish and clean room.">
        
      </Task>
      <Task title="Laundry" deadline="The Day After" description="Fold the laundry.">
        
      </Task>
    </div>
  );
}

export default App;
