import React from 'react';
import {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} from '../../api/apiSlice';
import { Button } from '../../components/common/Button';
import ListCount from './ListCount';

const RtkQueryTestPage: React.FC = () => {
  const { data, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData);
    addPost({
      id: (data?.at(-1)?.id || 0) + 1,
      author: formObject.author as string,
      title: formObject.title as string,
    });
  };

  const handleDelete = (id: number) => {
    deletePost(id);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Rtk Query Test Page</h1>
      {data &&
        data.map((p) => {
          return (
            <div key={p.id}>
              {p.id} - {p.author} - {p.title} ----{' '}
              <button onClick={() => handleDelete(p.id)}>delete</button>{' '}
            </div>
          );
        })}

      <br />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            style={{ backgroundColor: 'gray' }}
            type='text'
            name='author'
          />{' '}
          <br />
          <br />
          <input
            style={{ backgroundColor: 'gray' }}
            type='text'
            name='title'
          />{' '}
          <br />
          <br />
          <Button type='submit' text='Add Book'></Button>
        </form>
      </div>

      <ListCount />
    </div>
  );
};
export default RtkQueryTestPage;
