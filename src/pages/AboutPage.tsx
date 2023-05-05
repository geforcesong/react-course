import React, { useState } from 'react';
import Accordion, { AccordionItem } from '../components/Accordion';

const AboutPage: React.FC = () => {
  const [items, setItems] = useState<AccordionItem[]>([
    {
      id: 1,
      header: 'Item 1 Header',
      component: (
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni totam
          voluptas recusandae! Consectetur at, commodi laborum, totam omnis
          rerum veniam veritatis perspiciatis autem doloremque nobis saepe
          corrupti earum corporis eos?
        </div>
      ),
      active: true,
    },
    {
      id: 2,
      header: 'Item 2 Header',
      component: <div>Item 2</div>,
      active: false,
    },
    {
      id: 3,
      header: 'Item 3 Header',
      component: <div>Item 3</div>,
      active: false,
    },
  ]);

  const handleAccordionItemClicked = (item: AccordionItem) => {
    setItems(items.map((c) => ({ ...c, active: c.id === item.id })));
  };

  return (
    <div>
      <h1>About</h1>
      <div style={{ maxWidth: '200px' }}>
        <Accordion items={items} onItemClicked={handleAccordionItemClicked} />
      </div>
    </div>
  );
};
export default AboutPage;
