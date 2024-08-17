import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function AddWidget({ categoryId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(selectedCategory){
      console.log(selectedCategory, categoryId);
      const newWidget = {
          id: Date.now(),
          name,
          text,
      };
      dispatch({ type: 'ADD_WIDGET', payload: { selectedCategory, widget: newWidget } });
      setName('');
      setText('');
      setIsOpen(false);
    } else {
      alert('Please select a category');
    }
  };

  return (
    <div className=''>
      <button className='bg-white  py-2 px-4 rounded text-black w-[30vw] h-[20vh]'
        onClick={() => setIsOpen(true)}
      >
        <span className='border-2 rounded-md p-1'>+ Add Widget</span>
      </button>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white fixed top-0 right-0 w-[50vw] h-[100vh]'>
            <div className='flex justify-between bg-blue-900 p-4'>
              <p className='text-white text-base'>Add Widget</p>
              <button
                className='text-white'
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>
            <div>
              <p className='p-1 font-semibold'>Personalise your dashboard by adding the following widget</p>
              <div className='flex gap-2 ml-4'>
                {
                  categories.map(category => (
                    <button 
                    onClick={() => handleClick(category.id)}
                    key={category.id}>
                      <p style={{ color: selectedCategory === category.id ? '#00308F' : 'black' }} 
                      className='text-sm font-medium'>
                        {category.name}</p>
                        <hr style={{ borderColor: selectedCategory === category.id ? '#00308F' : '' }}/>
                    </button>
                  ))
                }
              </div>
              <hr />
            </div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-4 p-4'>
                <input
                  type="text"
                  placeholder="Widget Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='border-2 p-1'
                />
                <input
                  type="text"
                  placeholder="Widget Text"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  className='border-2 p-1'
                />
              </div>
              <div className='fixed bottom-4 right-4'>
                <button
                  className='border-2 border-blue-900 rounded-md p-1 mr-2 w-[7.5rem]'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className='w-[7.5rem] border-2 border-blue-900 rounded-md p-1 text-white bg-blue-900'>Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddWidget
