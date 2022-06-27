import ClassTest from '../components/test/ClassTest';
import { Conditional } from '../components/test/Conditional';

const HomePage: React.FC = () => {
  return (
    <div>
      Class component Test
      <ClassTest message='This is test for Class Component' />
      <Conditional count={1} />
    </div>
  );
};
export default HomePage;
