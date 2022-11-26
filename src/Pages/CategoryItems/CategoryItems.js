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
    <div className='common-w'>
      <h1>Thsi is category items !!!</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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