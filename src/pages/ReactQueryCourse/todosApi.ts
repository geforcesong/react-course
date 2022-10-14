const BASE_URL = 'http://localhost:3080';

export const getTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  return await response.json();
};

export const addTodo = async (todo: any) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return await response.json();
};

// export const addTodo = async (todo:any) => {
//     return await todosApi.post("/todos", todo)
// }

// export const updateTodo = async (todo) => {
//     return await todosApi.patch(`/todos/${todo.id}`, todo)
// }

export const deleteTodo = async (id: any) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  return await response.json();
};
