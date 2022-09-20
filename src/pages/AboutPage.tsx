const AboutPage: React.FC = () => {
  return (
    <div>
      <div className='p-6 font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        mollitia ex sint consequuntur, repudiandae minima, illum numquam quae
        similique soluta expedita eius incidunt illo perferendis assumenda
        laborum necessitatibus? Est, ea.
      </div>
      <div className='p-6 font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        mollitia ex sint consequuntur, repudiandae minima, illum numquam quae
        similique soluta expedita eius incidunt illo perferendis assumenda
        laborum necessitatibus? Est, ea.
      </div>
      <div className='p-6 font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        mollitia ex sint consequuntur, repudiandae minima, illum numquam quae
        similique soluta expedita eius incidunt illo perferendis assumenda
        laborum necessitatibus? Est, ea.
      </div>
      <div className='p-6 font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        mollitia ex sint consequuntur, repudiandae minima, illum numquam quae
        similique soluta expedita eius incidunt illo perferendis assumenda
        laborum necessitatibus? Est, ea.
      </div>
      <div className='flex p-4'>
        <a href='#item1' className='text-blue-900 p-4'>
          Item1
        </a>
        <a href='#item2' className='text-blue-900 p-4'>
          Item2
        </a>
        <a href='#item3' className='text-blue-900 p-4'>
          Item3
        </a>
      </div>
      <div className='p-6 font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        mollitia ex sint consequuntur, repudiandae minima, illum numquam quae
        similique soluta expedita eius incidunt illo perferendis assumenda
        laborum necessitatibus? Est, ea.
      </div>
      <div className='w-48 h-48 rounded-full bg-blue-700 text-white flex items-center justify-center'>
        Hello world
      </div>
      <div className='flex'>
        <div id='item1' className='p-8 m-4 flex border-2'>
          Item 1
        </div>
        <div id='item2' className='p-8 m-4 flex border-2'>
          Item 2
        </div>
        <div id='item3' className='p-8 m-4 flex border-2'>
          Item 3
        </div>
      </div>
      <div className='max-w-xl'>
        <label
          htmlFor='first_name'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          First name
        </label>
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='John'
          required
        />
      </div>
    </div>
  );
};
export default AboutPage;
