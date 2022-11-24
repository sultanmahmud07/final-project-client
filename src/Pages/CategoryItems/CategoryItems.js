import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';
import '../../commonStyles/style.css';

const CategoryItems = () => {
  const items =useLoaderData()
  // console.log(items);
  // const [categoryItems, setCategoryItems] =useState([]);


  return (
    <div className='common-w'>
      <h1>Thsi is category items !!!</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          items.map(item => <ItemCard
          key={item._id}
          item={item}
          ></ItemCard>)
        }
      </div>
    </div>
  );
};

export default CategoryItems;