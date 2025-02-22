import React, { useState,useEffect  } from 'react'
import useFetch from '../../hooks/UseFetch';

const url='http://182.176.166.222:8081/'
const fetchProductData = async (options) => {
    return fetch(`${url}api/ProductsInfoAPI/GetProducts`, options);
  };

  const fetchCategory=async(options)=>{
    return fetch(`${url}api/CategoryInfoAPI/GetCategorys`,options)
  }

function ProductCard1() {
    const[currentIndex,setCurrentIndex]=useState(0)

    const { data: ProData, loading: ProLoading, error: ProError } = useFetch({ apiFunc: fetchProductData });
    const [products, setProducts] = useState([]);
  useEffect(() => {
    if (ProData) {
      console.log("Full Product Data:", ProData); // 🔥 API se aane wala pura data dekho
      if (ProData.data) {
        setProducts(ProData.data);
        console.log("Product List Updated:", ProData.data); // ✅ Check karo ke array aa raha hai ya nahi
      }
    }
  }, [ProData]);

  const {data:categoryData,loading:categoryLoading, error: categoryError}=useFetch({apiFunc:fetchCategory})

  const [category,setCategory]=useState([])
  useEffect(()=>{
    if(categoryData){
        console.log(categoryData.data)
        if(categoryData.data){
           const childCategories = categoryData.data.filter(cat=>cat.parentID !==null)
            setCategory(childCategories)
        }
    }
  },[categoryData])

  const visibleItems = 4; // Ek sath kitne dikhane hain (Customize kar sakte ho)
  const nextSlide=()=>{
    setCurrentIndex((prevIndex) =>
        prevIndex +1>=  category.length ?0 : prevIndex + 1
      );
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex +1>=  category.length ?0 : prevIndex - 1
    );
  };
  return (
    <>
    
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Wrapper */}
      <div
        className="bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] px-10 py-3 flex transition-transform duration-500 ease-in-out"
        
      >
        {category.concat(category).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-auto px-5 py-2 flex items-center justify-center bg-[#FCFCFC] border-[#999] border rounded-full mx-2"
          >
            <span className="text-base font-medium text-[#666]">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#FCFCFC] border-[#999] border bg-opacity-50 text-white p-1 rounded-full z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.2894 18.2929C13.8989 18.6834 13.2657 18.6834 12.8752 18.2929L7.98782 13.4006C7.20742 12.6195 7.20772 11.3537 7.98842 10.5729L12.8788 5.68254C13.2693 5.29202 13.9025 5.29202 14.293 5.68254C14.6836 6.07307 14.6836 6.70623 14.293 7.09676L10.1074 11.2824C9.71682 11.6729 9.71682 12.3061 10.1074 12.6966L14.2894 16.8787C14.68 17.2692 14.68 17.9023 14.2894 18.2929Z" fill="#999999"/>
</svg>
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FCFCFC] border-[#999] border bg-opacity-50 text-white p-1 rounded-full z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.71057 18.2929C10.1011 18.6834 10.7343 18.6834 11.1248 18.2929L16.0122 13.4006C16.7926 12.6195 16.7923 11.3537 16.0116 10.5729L11.1212 5.68254C10.7307 5.29202 10.0975 5.29202 9.70696 5.68254C9.31643 6.07307 9.31643 6.70623 9.70696 7.09676L13.8926 11.2824C14.2832 11.6729 14.2832 12.3061 13.8926 12.6966L9.71057 16.8787C9.32004 17.2692 9.32004 17.9023 9.71057 18.2929Z" fill="#999999"/>
</svg>
      </button>
    </div>
    <div className="antialiased text-gray-900 ">
  <div className="bg-[#FCFCFC] p-8 flex gap-5">
  {ProLoading && <p>Loading...</p>}
      {ProError && <p>Error: {ProError}</p>}
      
        {products.map((items, index) => (
          
<div key={index} className="bg-white rounded-lg overflow-hidden duration-400 hover:shadow-lg  xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
      {/*E11*/}
      {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
      <img
        className="h-48 w-full object-cover object-end"
        src={`http://182.176.166.222:8081${items.imagePath}`}
        alt="Home in Countryside"
      />
      <div className="p-6">
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            3 beds • 2 baths
          </div>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
        {items.productName}
        </h4>
        <div className="mt-1">
        <span className="flex items-baseline font-semibold">
        <span className="text-xs">PKR</span>
        <span className="text-lg ml-[2px]">{}</span>
      </span>
          {/* <span className="text-gray-600 text-sm">/ wk</span> */}
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-teal-600 font-semibold">
            <span>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <span></span>
              <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
            </span>
          </span>
        </div>
      </div>
    </div>
        ))}
      
    
  </div>

</div>

    </>
  )
}

export default ProductCard1