import React from 'react';
import moment from 'moment/moment';

const Order = (order) => {
  console.log(order);
  const { id, amount, amountShipping, items, timestamp, images } = order;
  const { format } = new Intl.NumberFormat('de-De', {
    style: 'currency',
    currency: 'eur',
  });
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Order place</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>
        <div>
          <p className="text-sm font-bold">Total</p>
          <p>
            {format(amount)} -Next Day {format(amountShipping)}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items?.length} items
        </p>
        <p className="absolute top-2 right-2 w-32 lg:w-72 truncate text-xs whitespace-nowrap">
          Order # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img
              className="h-20 object-contain sm:h-32"
              key={image}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
