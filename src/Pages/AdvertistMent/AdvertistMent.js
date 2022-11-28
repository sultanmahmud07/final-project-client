import { useQuery } from '@tanstack/react-query';
import React from 'react';
import '../../commonStyles/style.css';
import Loading from '../Shared/Loading/Loading';
import AdvertistCard from './AdvertistCard';

const AdvertistMent = () => {
  const { data: reportItem , isLoading, refetch } = useQuery({
    queryKey: ['reportItem'],
    queryFn: async () => {
      const res = await fetch('https://final-project-server-zeta.vercel.app/reports');
      const data = await res.json();
      return data;
      console.log(reportItem)
    }
  })

  if(isLoading){
    return <Loading></Loading>
  }



  return (
    <div className='common-w '>
      <h1 className='text-2xl font-semibold py-5'>Advertised Products</h1>
      {/* <span>New price: </span><span>{reportItem.new_price} $</span><br></br> */}
     <div className=' mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-10 sm:gap-y-10 md:gap-y-16 lg:gap-y-16'>
     {
        reportItem.map(product => <AdvertistCard
        key={product._id}
        product ={product}
        ></AdvertistCard>)
      }
     </div>
      
    </div>
  );
};

export default AdvertistMent;