
import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";


const Todo = () => {
    return (
        <div>
          <Container>
          <h1 className="text-center my-5 text-3xl font-sans font-semibold uppercase">Todo Application </h1>
            <TodoContainer/>
          </Container>
        </div>
    );
};

export default Todo;