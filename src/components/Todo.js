import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTask,updateTask,deleteTask } from '../utils/todoSlice';
import {v4 as uuidv4} from 'uuid'

const Todo = () => {
    const dispatch=useDispatch();
    const tasks=useSelector((state)=>state.todo?.tasks);


    const [taskInput, setTaskInput] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [filter, setFilter] = useState('all');

    const handleAddTask=()=>{
        if(taskInput.trim()!==''){
            dispatch(
                addTask({
                    id:uuidv4(),
                    title:taskInput,
                    completed:false,
                })
            );
            setTaskInput('');
        }
    };

    const handleEditTask = (id, title) => {
        setEditingId(id);
        setTaskInput(title);
    };
    
    const handleSaveEdit = () => {
        dispatch(updateTask({ id: editingId, title: taskInput, completed: false }));
        setEditingId(null);
        setTaskInput('');
    };
    
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };
    
    const handleToggleComplete = (task) => {
        dispatch(updateTask({ ...task, completed: !task.completed }));
    };
    


    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
      });
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Todo Management</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e)=>setTaskInput(e.target.value)}
          placeholder="Enter a new Task..."
          className="px-3 py-2 border border-gray-300 rounded-lg w-full"
        />
        {editingId?(
        <button
          onClick={handleSaveEdit}
          className='mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg'
        >
            Save Edit
        </button>
        ):(
            <button
            onClick={handleAddTask}
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Add Task
          </button>
        )}
      </div>

        <div className="flex gap-4 mb-4">
            <button onClick={()=>setFilter("all")} className="text-blue-500">
                All
            </button>
            <button onClick={()=>setFilter("completed")} className="text-blue-500">
                Completed
            </button>
            <button onClick={()=>setFilter('pending')} className="text-blue-500">
                Pending
            </button>
        </div>

        <ul className="space-y-4">
            {filteredTasks.map((task)=>(
                <li key={task.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                    <div>
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={()=>handleToggleComplete(task)}
                          className="mr-2"
                        />
                        <span className={task.completed?"line-through":""}>{task.title}</span>
                    </div>
                    <div>
                        <button
                         onClick={()=>handleEditTask(task.id,task.title)}
                         className="text-yellow-500 mr-2"
                        >
                            Edit

                        </button>

                        <button
                          onClick={()=>handleDeleteTask(task.id)}
                          className="text-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Todo