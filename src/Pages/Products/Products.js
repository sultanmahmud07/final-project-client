import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../commonStyles/style.css'
import Loading from '../Shared/Loading/Loading';
import CategoryCard from './CategoryCard/CategoryCard';

const Products = () => {
  // const [categoryOption, setCategoryOption] = useState([]);
  // const [loader, setLoader] =useState(true);

  // if(loader){
  //   return <p>Loading....</p>
  // }

  const { data: categoryOption = [], isLoading } = useQuery({
    queryKey: ['categoryOption'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/category');
      const data = await res.json();
      return data
    }


  })

  if (isLoading) {
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch('http://localhost:5000/category')
  //   .then(res => res.json())
  //   .then(data => setCategoryOption(data))
  // }, [])
  // console.log(categoryOption);

  return (
    <div className='common-w'>
      <div className='text-center'>
        <h1 className='font-bold inline-block mb-16 text-center text-4xl border-b-4  py-3'>Our Products Category</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 '>
        {
          categoryOption.map(category => <CategoryCard
            key={category._id}
            category={category}

          ></CategoryCard>)
        }
      </div>
      <div className='text-center py-20'>
        <Link to='/products/category/:05'>
        <button className='btn outline-dotted bg-gradient-to-r from-primary to-secondary text-white'>Show all category products</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;