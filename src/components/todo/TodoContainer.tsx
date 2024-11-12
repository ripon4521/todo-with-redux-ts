
import { useAppSelector } from "@/redux/hook";
import  { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import {  TodoFilter } from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { error } from "console";

const TodoContainer = () => {
    // const { todos } = useAppSelector((state) => state.todos);
//   console.log(todos)

const {data: todos, isError, isLoading} = useGetTodosQuery(undefined);
console.log(todos)
if (isLoading) {
   return <p>Loading....</p>
}
if (isError) {
    return <p>Error 404 ...</p>
}

    return (
        <div>
            <div className="flex justify-between mb-5">
               
                   <AddTodoModal/>
           <TodoFilter/>
            </div>
            <div className="bg-primary-gradient w-full h-full p-[5px] rounded-xl">
           {/* <div className="text-center flex justify-center items-center bg-white p-3 rounded-xl text-xl font-semibold">
            <p>There is no records here.</p>
           </div> */}
           <div className="bg-white  rounded-lg space-y-3 p-5 w-full h-full">
            {
                todos?.todos?.map((item, index) => (
                    <TodoCard key={index} {...item}  />
                ))
            }
          
           </div>
        
            </div>
        </div>
    );
};

export default TodoContainer;