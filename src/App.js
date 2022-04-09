// Components
import TaskReader from './components/TaskReader'
//import TaskEditor from './components/TaskEditor'
import TaskCard from './components/TaskCard'

function App() {
  const sampleData = {
    "name": "Task name",
    "description": "Description of this task"
  }

  return (
    <div className='my-10'>
      <TaskCard data={sampleData} />
    </div>
  );
}

export default App;
