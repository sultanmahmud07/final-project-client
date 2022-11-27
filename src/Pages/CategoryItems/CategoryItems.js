import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';
import '../../commonStyles/style.css';
import BookingModal from './BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';

const CategoryItems = () => {
  const [modalData, setModalData] = useState(null);
  const items = useLoaderData()
  const navigation = useNavigation();
  // console.log(items);
  // const [categoryItems, setCategoryItems] =useState(null);



  if(navigation.state === "loading"){
    return <Loading></Loading>
  }

  return (
    <div className='common-w pb-56 '>
      <h1 className='text-primary text-2xl font-semibold py-8'>This category available product {items.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-10 sm:gap-y-10 md:gap-y-16 lg:gap-y-16'>
        {
          items.map(item => <ItemCard
            key={item._id}
            item={item}
            setModalData={setModalData}
          ></ItemCard>)
        }
      </div>

      {
        modalData && <BookingModal
          modalData={modalData}
          setModalData={setModalData}
        ></BookingModal>
      }
    </div>
  );
};

export default CategoryItems;