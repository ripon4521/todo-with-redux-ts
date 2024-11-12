import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { deleteTodo, toggleTodo } from "@/redux/feauters/todoSlice";

interface TTodoCardProps {
  id: string,
  title: string,
  description: string,
  isCompleted?: boolean,
}

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleTodo(id));
    
  };



  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-md border">
      <input
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id={`complete-${id}`}
        checked={isCompleted} // Controlled checkbox
      />
      <h1>{title}</h1>
      <div>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p>{description}</p>

      <div className="flex gap-2">
        <Button
          onClick={() => dispatch(deleteTodo(id))}
          className="bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9M9.26 9l-.346 9m9.968-3.21c.342.052.682.107 1.022.166M5.75 5.79a48.108 48.108 0 0 1 3.478-.397M9.26 5.79v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>

        <Button className="bg-[#5C53FE]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
