import React from 'react';

const BookingModal = ({ modalData }) => {
  const { phone_model } = modalData
  console.log(modalData);

const handleBooking = event => {
  event.preventDefault();
  const form =event.target;
  const itemName =form.itemName.value;
  const price =form.price.value;
  const name =form.name.value;
  const email =form.email.value;
  const phone =form.phone.value;
  const location =form.location.value;

  const booking = {
    modelName: phone_model,
    price: price,
    userName: name,
    userEmail: email,
    userPhone: phone,
    meetLocation: location

  }
  console.log(booking);
}


  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{phone_model}</h3>
          <div>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
              <input name='itemName' type="text" placeholder="itemName" className="input w-full input-bordered " required />

              <input name="price"  type="text" placeholder="item price" className="input w-full input-bordered" required />
              <input name="name"  type="text" placeholder="Your Name" className="input w-full input-bordered" required />
              <input name="email"  type="email" placeholder="Email Address" className="input w-full input-bordered" required />
              <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
              <textarea name="location" placeholder="Your Meeting location" className="textarea w-full textarea-bordered" required ></textarea>
              <br />
              <input className='btn btn-accent w-full' type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;