import React from 'react';
import { Link } from 'react-router-dom';
import PraimaryButton from '../../../components/PraimaryButtton/PraimaryButton';

const CategoryCard = ({category}) => {
  const {id, name, photo_url, rating, descrip, total_view} =category
  // console.log(category);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
       <Link to={`category/:${id}`}>
       <figure><img className='w-full' src={photo_url} alt="Shoes" /></figure>
       </Link>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold capitalize">{name}</h2>
          <p>{descrip}</p>
          <div className="card-actions justify-end">
            <Link to={`category/:${id}`}><PraimaryButton>Show all category</PraimaryButton></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;