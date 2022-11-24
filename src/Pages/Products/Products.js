import React, { useEffect, useState } from 'react';
import '../../commonStyles/style.css'
import CategoryCard from './CategoryCard/CategoryCard';

const Products = () => {
  const [categoryOption, setCategoryOption] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/category')
    .then(res => res.json())
    .then(data => setCategoryOption(data))
  }, [])
  // console.log(categoryOption);

  return (
    <div className='common-w'>
      <h1>Our Products section</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 pb-40'>
        {
          categoryOption.map(category => <CategoryCard
          key={category._id}
          category={category}

          ></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default Products;