import {createSlice} from '@reduxjs/toolkit'

const initialState={
    tasks:JSON.parse(localStorage.getItem('tasks'))||[],
};

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload);
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        },
        updateTask:(state,action)=>{
            const {id,title,completed}=action.payload;
            const task=state.tasks.find((task)=>task.id===id);
            if(task){
                task.title=title;
                task.completed=completed;
                localStorage.setItem('tasks',JSON.stringify(state.tasks))
            }
        },
        deleteTask:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload);
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        },
        setTasks:(state,action)=>{
            state.tasks=action.payload;
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        }
    }
})

export const {addTask,updateTask,deleteTask,setTasks}=todoSlice.actions;
export default todoSlice.reducer;
