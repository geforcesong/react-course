import ClassTest from '../components/test/ClassTest';
import { Conditional } from '../components/test/Conditional';
import Tabs, { TabItem } from '../components/Tabs';
import { useState } from 'react';
import SimpleTab from '../components/SimpleTab';

const tabItems = [
  {
    id: 1,
    component: 'Tab 1',
    active: true,
    disabled: false,
    progressValue: 0.3,
    content: <div>tab1 content</div>,
  },
  {
    id: 2,
    component: 'Tab 2',
    active: false,
    disabled: false,
    progressValue: 0.2,
    content: <div>tab2 content</div>,
  },
  {
    id: 3,
    component: 'Tab 3',
    active: false,
    disabled: false,
    progressValue: 0.6,
    content: <div>tab3 content</div>,
  },
];

const HomePage: React.FC = () => {
  const [items, setItems] = useState(tabItems);

  const handleTabItemChanged = (item: TabItem) => {
    setItems(() =>
      items.map((tab) => ({
        ...tab,
        active: tab === item,
      })),
    );
  };

  return (
    <div>
      Class component Test
      <ClassTest message='This is test for Class Component' />
      <Conditional count={1} />
      sdf
      <Tabs items={items} onTabChanged={handleTabItemChanged} />
      <br /> <br />
      <SimpleTab items={items} onTabChanged={handleTabItemChanged} />
    </div>
  );
};
export default HomePage;
