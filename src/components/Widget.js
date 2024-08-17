import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";

function Widget({ categoryId, widget, onRemove }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div 
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      className='bg-white w-[30vw] h-[20vh] rounded-lg p-4'>
      
      <button 
          onClick={() => onRemove(categoryId, widget.id)}
          className=' text-black relative top-0 left-[95%]'>
          {hidden ? null : <IoIosCloseCircle className='text-3xl' />}
      </button>
      <p>{widget.name}</p>
      <p>{widget.text}</p>
    </div>
  )
}

export default Widget
