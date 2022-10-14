import { useGetPostsQuery } from '../../api/apiSlice';

const ListCount: React.FC = () => {
  const { data } = useGetPostsQuery();

  return <div>Current Number is: {data?.length || 0}</div>;
};

export default ListCount;
