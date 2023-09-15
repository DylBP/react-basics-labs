import './App.css';
import Task from './components/Task.js';

function App() {
  return (
    <div className="container">
      <h1>Lab 01</h1>
      <Task title="Dishes" deadline="Today" description="Wash the dishes, or else they will get dirty.">
      </Task>
      <Task title="Laundry" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" description="God damn you are messy!"/>
    </div>
  );
}

export default App;
