import React from 'react';

const Loading = () => {
  return (
    <div className=''>
    <div className="flex py-36 justify-center pt-12 items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">...</span>
      </div>
    </div>
  </div>
  );
};

export default Loading;