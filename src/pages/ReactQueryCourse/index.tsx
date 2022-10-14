import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Button } from '../../components/common/Button';
import { getTodos, addTodo, deleteTodo } from './todosApi';
import { AiOutlineClose } from 'react-icons/ai';

const ReactQueryCourse = () => {
  const queryClient = useQueryClient();
  const { isLoading, data: todos } = useQuery('todos', getTodos);

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData);
    addTodoMutation.mutate({
      id: Math.random(),
      userId: 1,
      title: formObject.title,
      completed: false,
    });
    (e.target as HTMLFormElement).reset();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>React Query Course</h1>
      {todos.map((todo: any) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
            <button
              className='inline-flex center'
              onClick={() => deleteTodoMutation.mutate(todo.id)}
            >
              <AiOutlineClose color='red' /> Delete
            </button>
          </div>
        );
      })}

      <section>
        <form onSubmit={handleSubmit}>
          <input style={{ backgroundColor: 'gray' }} type='text' name='title' />{' '}
          <br />
          <br />
          <Button type='submit' text='Add Todo'></Button>
        </form>
      </section>
    </main>
  );
};
export default ReactQueryCourse;
