import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TTodo {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

interface TInitialState {
    todos: TTodo[];
}

const initialState: TInitialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false });
            // Sort to ensure incomplete todos are first
            state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const updatedTodo = state.todos.find((todo) => todo.id === action.payload);
            if (updatedTodo) {
                updatedTodo.isCompleted = !updatedTodo.isCompleted;
            }
            // Sort to ensure incomplete todos are first
            state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
        },

            updateTodo: (state, action:PayloadAction<TTodo>) => {
            const updatedTodo = state.todos.find((todo) => todo.id === action.payload.id);
            if(updatedTodo){
                updatedTodo.title = action.payload.title;
                updatedTodo.description = action.payload.description;
              
            }
        },



    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
