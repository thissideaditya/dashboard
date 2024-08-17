import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget'
import AddWidget from './AddWidget'
import Header from './Header';

function Dashboard() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const handleRemoveWidget = (categoryId, widgetId) => {
        dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId } });
    };

  return (
    <div className='bg-[#f1f4fb] w-full h-full min-h-screen p-8'>
        <div>
            <p className='font-extrabold text-2xl mb-4'>CNAPP Dashboard</p>
        </div>
        <div className='flex-col '>
            {
                categories.map(category => (
                    <div className='mb-6 ml-3' key={category.id}>
                        <div className='flex'>
                            <p className='font-bold text-lg'>{category.name}</p>
                        </div>
                            <div className='flex gap-2 overflow-scroll'>
                                        <div className='flex gap-2 font-medium'>
                                            {
                                                category.widgets.map(widget => (
                                                    <Widget
                                                        key={widget.id}
                                                        categoryId={category.id}
                                                        widget={widget}
                                                        onRemove={handleRemoveWidget}
                                                    />
                                                ))
                                            }
                                        </div>
                                        <AddWidget categoryId={category.id} />
                            </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Dashboard
