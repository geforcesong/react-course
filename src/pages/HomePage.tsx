import ClassTest from '../components/test/ClassTest';
import { Conditional } from '../components/test/Conditional';
import Tabs from '../components/Tabs';

const tabItems = [
  {
    id: 1,
    component: 'Tab 1',
    active: true,
    disabled: false,
    progressValue: 0.8,
  },
  {
    id: 2,
    component: 'Tab 2',
    active: false,
    disabled: false,
    progressValue: 0.2,
  },
  {
    id: 3,
    component: 'Tab 3',
    active: false,
    disabled: false,
    progressValue: 1,
  },
];

const HomePage: React.FC = () => {
  console.log('hello');
  return (
    <div>
      Class component Test
      <ClassTest message='This is test for Class Component' />
      <Conditional count={1} />
      sdf
      <Tabs items={tabItems} />
    </div>
  );
};
export default HomePage;
