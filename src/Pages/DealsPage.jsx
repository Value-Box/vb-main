import React from 'react'
import DealCarousel from '../Components/Carousels/DealCarousel'
import { useLocation } from 'react-router-dom';
import ProductImg from "/src/Images/ProductCard.png";
const products = [
  { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: ProductImg },
  { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: ProductImg },
  { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: ProductImg },
  { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: ProductImg },
  { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: ProductImg },
  { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: ProductImg },
  { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: ProductImg },
  { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: ProductImg },
  { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: ProductImg }
];

function DealsPage() {
    const location=useLocation()
    const name=location.state?.name || 'Bundle Deals'
    console.log(name)
    const deals = [
        {
          title: "Bundle Deals",
          products: [
            { id: 1, name: "Wireless Mouse & Keyboard Combo", price: 25, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
            { id: 2, name: "Gaming Headset + Mousepad", price: 40, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
            { id: 3, name: "Laptop Stand + Cooling Pad", price: 30, image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
          ],
        },
        {
          title: "Flash Deals",
          products: [
            { id: 4, name: "Bluetooth Speaker", price: 15, image: "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" },
            { id: 5, name: "Smart LED Bulb", price: 10, image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&auto=format&fit=crop&q=60" },
            { id: 6, name: "USB Fast Charger", price: 12, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" },
          ],
        },
        {
            title: "One Dollar Shop",
            products: [
              { id: 7, name: "Mini USB Light", price: 1, image: "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" },
              { id: 8, name: "Cable Organizer", price: 1, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" },
              { id: 9, name: "Keychain Flashlight", price: 1, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
            ],
          }
      ];
      
      const selectedDeal = deals.find((deal) => deal.title === name);
      
      console.log(selectedDeal)
      
  return (
    <>
    <DealCarousel products={products} CardType={'BundleDealCard'} />
    <h1 className="text-2xl font-bold text-center my-6">{name}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
  {selectedDeal ? (
    selectedDeal.products.map((item) => (
      <div
        key={item.id}
        className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
      >
        <a href="#">
          <img
            className="h-78 w-full object-cover rounded-t-lg"
            src={item.image}
            alt={item.name}
          />
        </a>
        <div className="p-5 text-center">
          <h5 className="text-xl font-bold text-gray-900">{item.name}</h5>
          <p className="text-gray-700 font-semibold mt-2">${item.price}</p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-600 mt-4">
      No deals found for "{name}".
    </p>
  )}
</div>

    </>
  )
}

export default DealsPage