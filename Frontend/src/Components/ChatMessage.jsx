import React from 'react';

export const ChatMessage = ({ content,name }) => {
  return (
    <div className=' mx-5 my-3 bg-[#F0F5F9] font-light inline-flex flex-col  py-2 px-3 rounded-lg shadow-md'>
    <p className=' text-xs'>{name}</p>
    <p className=' py-1 rounded-md text-md text-black'>{content}</p>  
    </div>
  );
};
