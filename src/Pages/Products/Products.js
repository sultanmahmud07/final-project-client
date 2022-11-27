import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import '../../commonStyles/style.css'
import Loading from '../Shared/Loading/Loading';
import CategoryCard from './CategoryCard/CategoryCard';

const Products = () => {
  // const [categoryOption, setCategoryOption] = useState([]);
  // const [loader, setLoader] =useState(true);

  // if(loader){
  //   return <p>Loading....</p>
  // }

  const {data:categoryOption = [], isLoading } = useQuery({
    queryKey: ['categoryOption'],
    queryFn:async () => {
      const res = await fetch('http://localhost:5000/category');
      const data = await res.json();
      return data
    }
    

  })

  if(isLoading){
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
      <h1 className='text-2xl py-4 font-semibold'>Select your product category</h1>
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