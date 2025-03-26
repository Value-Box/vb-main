import React, { useEffect, useState } from 'react'
import AccountSideBar from '../Components/AccountSideBar'
import Select from '../Components/Select';
import Input from '../Components/Input';


const addressesData = [
  {
    id: 1,
    name: "Farman Haris",
    phone: "92345 8965325",
    street: "135 - Milan House, Garden Town Lahore",
    city: "Lahore",
    state: "Punjab",
    country: "Pakistan",
    isDefault: true,
  },
  {
    id: 2,
    name: "Farman Haris",
    phone: "92345 8965325",
    street: "135 - Milan House, Garden Town Lahore",
    city: "Lahore",
    state: "Punjab",
    country: "Pakistan",
    isDefault: false,
  },
  {
    id: 3,
    name: "Farman Haris",
    phone: "92345 8965325",
    street: "135 - Milan House, Garden Town Lahore",
    city: "Lahore",
    state: "Punjab",
    country: "Pakistan",
    isDefault: false,
  },
];

function PaymentMethodPage() {
  const[defaultAddressId,setDefaultAddressId]=useState(
    addressesData.find((addr)=>addr.isDefault?.id) || addressesData[0]?.id
  )
  
  const [address,setAddress]=useState(false)
  useEffect(()=>{
    const handleResize=()=>{
      if(window.innerWidth<=640){
        setAddress(false)
      }else{
        setAddress(false)
      }
    }
    handleResize()
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  const handleSetDefault=(id)=>{
    setDefaultAddressId(id)
  }

  const [formData, setFormData] = useState({
    country: "",
    province: "",
    street: "",
    apt: "",
    landmark: "",
    city: "",
    area: "",
    zip: "",
    contactName: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const options = [
    { value: "punjab", label: "Punjab" },
    { value: "kpk", label: "Kpk" },
    { value: "sindh", label: "Sindh" },
    { value: "blochistan", label: "Blochistan" },
  ];


  const [locationType, setLocationType] = useState("home");
  const [shippingChecked, setShippingChecked] = useState(false);
  const [billingChecked, setBillingChecked] = useState(true);
  return (
    <>
    {address?(
      <>
      <button onClick={()=>setAddress(false)} className="flex p-2 items-center w-full bg-natural-0 text-lg font-semibold border-b border-natural-color mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Add Address</button>
      <form className="p-3">
      
      
      <div className='mb-2'>
        <label htmlFor="" className='text-natural-black mb-1 inline-block'>Country/region : <span className='text-mon-yellow'>*</span></label>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>
      
      <div className='mb-2'>
        <label htmlFor="" className='natural-black mb-1 inline-block'>Province : <span className='text-mon-yellow'>*</span></label>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>
      <div className='mb-2'>
        <label htmlFor="" className='natural-black mb-1 inline-block'>Region/City/Area : <span className='text-mon-yellow'>*</span></label>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>
      
      
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
        <label htmlFor="" className='natural-black mb-1 inline-block'>Address : <span className='text-mon-yellow'>*</span></label>
        <Input type="text" name="street" placeholder="Street Address*" onChange={handleChange}/>
        </div>
        <div className='flex flex-col justify-end'>
        <label htmlFor="" className='natural-black mb-1 inline-block'>Landmark (Option) :</label>
        <Input type="text" name="landmark" placeholder="Land Mark (Optional)" onChange={handleChange} />
        </div>
      </div>
      
      <div className="flex items-center justify-between space-x-4">
      <span className="text-gray-600">Location type</span>
      <div className='flex gap-3'>
      <label className="flex items-center space-x-1 cursor-pointer">
          <input
            type="radio"
            name="location"
            value="home"
            checked={locationType === "home"}
            onChange={() => setLocationType("home")}
            className="hidden"
          />
          <div
            className={`w-4 h-4 border-1 rounded-full flex items-center justify-center ${
              locationType === "home" ? "border-[#002B53] border-5" : "border-[#667479]"
            }`}
          >
           
          </div>
          <span>Home</span>
        </label>
        <label className="flex items-center space-x-1 cursor-pointer">
          <input
            type="radio"
            name="location"
            value="office"
            checked={locationType === "office"}
            onChange={() => setLocationType("office")}
            className="hidden"
          />
          <div
            className={`w-4 h-4 border-1 rounded-full flex items-center justify-center ${
              locationType === "office" ? "border-[#002B53] border-5" : "border-[#667479]"
            }`}
          >
            
          </div>
          <span>Office</span>
        </label>
      </div>
      </div>
      <div className="space-y-4 my-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={shippingChecked}
            onChange={() => setShippingChecked(!shippingChecked)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 border-1 flex items-center justify-center rounded-[4px] ${
              shippingChecked ? "bg-dark-blue border-dark-blue" : "border-gray-400"
            }`}
          >
            {shippingChecked && <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M14.0333 5.40752C13.9636 5.33722 13.8806 5.28143 13.7892 5.24335C13.6979 5.20527 13.5998 5.18567 13.5008 5.18567C13.4018 5.18567 13.3038 5.20527 13.2124 5.24335C13.121 5.28143 13.038 5.33722 12.9683 5.40752L7.38082 11.0025L5.03332 8.64752C4.96093 8.57759 4.87547 8.5226 4.78183 8.4857C4.68819 8.4488 4.58819 8.4307 4.48756 8.43244C4.38692 8.43418 4.28762 8.45573 4.19531 8.49585C4.103 8.53597 4.0195 8.59388 3.94957 8.66627C3.87964 8.73866 3.82465 8.82411 3.78775 8.91776C3.75085 9.0114 3.73275 9.11139 3.73449 9.21203C3.73623 9.31266 3.75778 9.41197 3.7979 9.50428C3.83802 9.59659 3.89593 9.68009 3.96832 9.75002L6.84832 12.63C6.91804 12.7003 7.00099 12.7561 7.09238 12.7942C7.18378 12.8323 7.28181 12.8519 7.38082 12.8519C7.47983 12.8519 7.57786 12.8323 7.66925 12.7942C7.76064 12.7561 7.8436 12.7003 7.91332 12.63L14.0333 6.51002C14.1094 6.43979 14.1702 6.35455 14.2118 6.25967C14.2533 6.1648 14.2748 6.06234 14.2748 5.95877C14.2748 5.85519 14.2533 5.75274 14.2118 5.65786C14.1702 5.56299 14.1094 5.47775 14.0333 5.40752Z" fill="white"/>
</svg></span>}
          </div>
          <span>Default Shipping Address</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={billingChecked}
            onChange={() => setBillingChecked(!billingChecked)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 border-1 flex items-center justify-center rounded-[4px] ${
              billingChecked ? "bg-dark-blue border-dark-blue" : "border-gray-400"
            }`}
          >
            {billingChecked && <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M14.0333 5.40752C13.9636 5.33722 13.8806 5.28143 13.7892 5.24335C13.6979 5.20527 13.5998 5.18567 13.5008 5.18567C13.4018 5.18567 13.3038 5.20527 13.2124 5.24335C13.121 5.28143 13.038 5.33722 12.9683 5.40752L7.38082 11.0025L5.03332 8.64752C4.96093 8.57759 4.87547 8.5226 4.78183 8.4857C4.68819 8.4488 4.58819 8.4307 4.48756 8.43244C4.38692 8.43418 4.28762 8.45573 4.19531 8.49585C4.103 8.53597 4.0195 8.59388 3.94957 8.66627C3.87964 8.73866 3.82465 8.82411 3.78775 8.91776C3.75085 9.0114 3.73275 9.11139 3.73449 9.21203C3.73623 9.31266 3.75778 9.41197 3.7979 9.50428C3.83802 9.59659 3.89593 9.68009 3.96832 9.75002L6.84832 12.63C6.91804 12.7003 7.00099 12.7561 7.09238 12.7942C7.18378 12.8323 7.28181 12.8519 7.38082 12.8519C7.47983 12.8519 7.57786 12.8323 7.66925 12.7942C7.76064 12.7561 7.8436 12.7003 7.91332 12.63L14.0333 6.51002C14.1094 6.43979 14.1702 6.35455 14.2118 6.25967C14.2533 6.1648 14.2748 6.06234 14.2748 5.95877C14.2748 5.85519 14.2533 5.75274 14.2118 5.65786C14.1702 5.56299 14.1094 5.47775 14.0333 5.40752Z" fill="white"/>
</svg></span>}
          </div>
          <span>Default Billing Address</span>
        </label>
      </div>
      <div className="flex gap-4">
        <button className="bg-dark-blue text-white px-4 py-2 rounded w-full text-center">Save</button>
      </div>
    </form>
    </>
    ):(
      
      <div className='sm:flex items-start gap-2 sm:gap-4 sm:p-4 sm:bg-natural-0'>
      <div className='hidden md:block'><AccountSideBar/></div>
      <div className='w-full'>
      <div className="sm:border border-natural-gray-20 p-3 sm:p-5 rounded-lg bg-white w-full">
        <button className='flex items-center justify-center gap-1 sm:hidden border border-natural-black 
        mb-4 w-full p-2 rounded-[5px]' onClick={()=>setAddress(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 18.75C5.175 18.75 1.25 14.825 1.25 10C1.25 5.175 5.175 1.25 10 1.25C14.825 1.25 18.75 5.175 18.75 10C18.75 14.825 14.825 18.75 10 18.75ZM10 2.5C5.8625 2.5 2.5 5.8625 2.5 10C2.5 14.1375 5.8625 17.5 10 17.5C14.1375 17.5 17.5 14.1375 17.5 10C17.5 5.8625 14.1375 2.5 10 2.5Z" fill="#1A1A1A"/>
  <path d="M10 14.375C9.65 14.375 9.375 14.1 9.375 13.75V6.25C9.375 5.9 9.65 5.625 10 5.625C10.35 5.625 10.625 5.9 10.625 6.25V13.75C10.625 14.1 10.35 14.375 10 14.375Z" fill="#1A1A1A"/>
  <path d="M13.75 10.625H6.25C5.9 10.625 5.625 10.35 5.625 10C5.625 9.65 5.9 9.375 6.25 9.375H13.75C14.1 9.375 14.375 9.65 14.375 10C14.375 10.35 14.1 10.625 13.75 10.625Z" fill="#1A1A1A"/>
</svg> Add New Address
        </button>
      <h2 className="hidden sm:block text-xl font-semibold mb-3">Shipping Address (es)</h2>
      <p className="text-[#12B76A] mb-5 hidden sm:flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0026 14.1668C10.4446 14.1668 10.8686 13.9912 11.1811 13.6787C11.4937 13.3661 11.6693 12.9422 11.6693 12.5002C11.6693 12.0581 11.4937 11.6342 11.1811 11.3217C10.8686 11.0091 10.4446 10.8335 10.0026 10.8335C9.56058 10.8335 9.13665 11.0091 8.82409 11.3217C8.51153 11.6342 8.33594 12.0581 8.33594 12.5002C8.33594 12.9422 8.51153 13.3661 8.82409 13.6787C9.13665 13.9912 9.56058 14.1668 10.0026 14.1668ZM15.0026 6.66683C15.4446 6.66683 15.8686 6.84242 16.1811 7.15498C16.4937 7.46755 16.6693 7.89147 16.6693 8.3335V16.6668C16.6693 17.1089 16.4937 17.5328 16.1811 17.8453C15.8686 18.1579 15.4446 18.3335 15.0026 18.3335H5.0026C4.56058 18.3335 4.13665 18.1579 3.82409 17.8453C3.51153 17.5328 3.33594 17.1089 3.33594 16.6668V8.3335C3.33594 7.89147 3.51153 7.46755 3.82409 7.15498C4.13665 6.84242 4.56058 6.66683 5.0026 6.66683H5.83594V5.00016C5.83594 3.89509 6.27492 2.83529 7.05633 2.05388C7.83773 1.27248 8.89754 0.833496 10.0026 0.833496C10.5498 0.833496 11.0916 0.94127 11.5971 1.15066C12.1026 1.36006 12.562 1.66697 12.9489 2.05388C13.3358 2.4408 13.6427 2.90013 13.8521 3.40565C14.0615 3.91117 14.1693 4.45299 14.1693 5.00016V6.66683H15.0026ZM10.0026 2.50016C9.33956 2.50016 8.70368 2.76355 8.23484 3.2324C7.766 3.70124 7.5026 4.33712 7.5026 5.00016V6.66683H12.5026V5.00016C12.5026 4.33712 12.2392 3.70124 11.7704 3.2324C11.3015 2.76355 10.6656 2.50016 10.0026 2.50016Z" fill="#12B76A"/>
</svg> All Data is secured <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1569 12.7116L4.49994 18.3686L3.08594 16.9546L8.03594 12.0046L3.08594 7.05463L4.49994 5.64062L10.1569 11.2976C10.3444 11.4852 10.4497 11.7395 10.4497 12.0046C10.4497 12.2698 10.3444 12.5241 10.1569 12.7116Z" fill="#12B76A"/>
</svg></p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {addressesData.map((address) => (
          <div
            key={address.id}
            className={`p-4 border border-natural-color rounded-lg bg-natural-0`}
          >
            <div className="flex justify-between items-center mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="defaultAddress"
                  checked={defaultAddressId === address.id}
                  onChange={() => handleSetDefault(address.id)}
                  className="accent-[#002882]"
                />
                {defaultAddressId === address.id ? (
                  <span className="text-natural-gray">Default Address</span>
                ) : (
                  <span className="text-natural-gray">Set as Default</span>
                )}
              </label>
              {defaultAddressId === address.id && (
                <span className="bg-[#FEE4E2] text-[#F04438] text-xs px-2 py-1 rounded">Default</span>
              )}
            </div>

            <h3 className=" text-natural-black flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.33203 14.9998C3.33203 14.1158 3.68322 13.2679 4.30834 12.6428C4.93346 12.0177 5.78131 11.6665 6.66536 11.6665H13.332C14.2161 11.6665 15.0639 12.0177 15.6891 12.6428C16.3142 13.2679 16.6654 14.1158 16.6654 14.9998C16.6654 15.4419 16.4898 15.8658 16.1772 16.1783C15.8646 16.4909 15.4407 16.6665 14.9987 16.6665H4.9987C4.55667 16.6665 4.13275 16.4909 3.82019 16.1783C3.50763 15.8658 3.33203 15.4419 3.33203 14.9998Z" stroke="#1A1A1A" stroke-width="1.66667" stroke-linejoin="round"/>
  <path d="M10 8.33325C11.3807 8.33325 12.5 7.21396 12.5 5.83325C12.5 4.45254 11.3807 3.33325 10 3.33325C8.61929 3.33325 7.5 4.45254 7.5 5.83325C7.5 7.21396 8.61929 8.33325 10 8.33325Z" stroke="#1A1A1A" stroke-width="1.66667"/>
</svg> {address.name}, {address.phone}</h3>
            <p className="text-natural-gray flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.9494 13.7796L11.1426 17.5333C10.9926 17.6812 10.8144 17.7986 10.6184 17.8787C10.4223 17.9588 10.2122 18 9.99998 18C9.78776 18 9.57762 17.9588 9.38157 17.8787C9.18552 17.7986 9.0074 17.6812 8.85738 17.5333L5.05052 13.7796C4.40047 13.1389 3.88482 12.3783 3.53299 11.5411C3.18116 10.704 3.00005 9.8067 3 8.90055C2.99995 7.99441 3.18096 7.09713 3.5327 6.25994C3.88443 5.42275 4.4 4.66206 5.04998 4.02128C5.69995 3.3805 6.4716 2.8722 7.32085 2.52539C8.17011 2.17858 9.08035 2.00005 9.9996 2C10.9189 1.99995 11.8291 2.17838 12.6784 2.5251C13.5277 2.87182 14.2994 3.38004 14.9494 4.02075C15.5995 4.66149 16.1152 5.4222 16.4671 6.25941C16.8189 7.09663 17 7.99397 17 8.90018C17 9.80639 16.8189 10.7037 16.4671 11.5409C16.1152 12.3782 15.5995 13.1389 14.9494 13.7796ZM13.8079 5.14706C13.3079 4.65412 12.7142 4.2631 12.0608 3.99633C11.4075 3.72955 10.7072 3.59224 9.99998 3.59224C9.29278 3.59224 8.59251 3.72955 7.93914 3.99633C7.28577 4.2631 6.6921 4.65412 6.19204 5.14706C5.69197 5.63999 5.2953 6.22519 5.02466 6.86925C4.75403 7.5133 4.61474 8.20359 4.61474 8.90071C4.61474 9.59783 4.75403 10.2881 5.02466 10.9322C5.2953 11.5762 5.69197 12.1614 6.19204 12.6544L9.99998 16.4059L13.8079 12.6544C14.3081 12.1615 14.7048 11.5763 14.9755 10.9322C15.2462 10.2882 15.3855 9.59785 15.3855 8.90071C15.3855 8.20357 15.2462 7.51325 14.9755 6.86919C14.7048 6.22513 14.3081 5.63995 13.8079 5.14706ZM9.99998 11.0238C9.71316 11.0302 9.42793 10.9801 9.16105 10.8763C8.89416 10.7725 8.65099 10.6172 8.44582 10.4196C8.24065 10.2219 8.07761 9.98581 7.96627 9.72517C7.85494 9.46453 7.79755 9.18459 7.79747 8.90178C7.7974 8.61898 7.85465 8.33901 7.96585 8.07831C8.07706 7.81762 8.23998 7.58145 8.44505 7.38367C8.65012 7.18589 8.89321 7.0305 9.16004 6.9266C9.42688 6.82271 9.71208 6.77241 9.99891 6.77866C10.5617 6.79093 11.0972 7.01988 11.4908 7.41649C11.8845 7.8131 12.105 8.34586 12.1051 8.90072C12.1052 9.45558 11.885 9.98845 11.4916 10.3853C11.0981 10.7821 10.5627 11.0113 9.99998 11.0238Z" fill="#1A1A1A"/>
</svg> {address.street}</p>
            <p className="text-natural-gray">{address.city}, {address.state}, {address.country}</p>

            <div className="flex gap-3 mt-3 text-sm">
              <button className=" hover:underline">Edit</button>
              <p className='w-px bg-natural-gray-20'></p>
              <button className=" hover:underline">Delete</button>
              <p className='w-px bg-natural-gray-20'></p>
              <button className="text-dark-blue hover:underline">Duplicate</button>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="hidden sm:block border border-natural-gray-20 p-5 rounded-lg bg-white w-full mt-4">
      <form className="">
      <h2 className="text-lg font-semibold mb-4">Add New Address</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="" className='text-[#666] mb-1 inline-block'>Country/region</label>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>
      
      <div>
        <label htmlFor="" className='text-[#666] mb-1 inline-block'>Province</label>
      <Select
        options={options}
        placeholder="Please Select"
           />
      </div>
      
      </div>
      <div className='h-px bg-natural-gray-20 mb-4'></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
        <label htmlFor="" className='text-[#666] mb-1 inline-block'>Address</label>
        <Input type="text" name="street" placeholder="Street Address*" onChange={handleChange}/>
        </div>

        <div className='flex flex-col justify-end'>
        <Input type="text" name="apt" placeholder="Apt, suite, unit, etc (Optional)" onChange={handleChange} />
        </div>

        <div className='flex flex-col justify-end'>
        <Input type="text" name="landmark" placeholder="Land Mark (Optional)" onChange={handleChange} />
        </div>
        
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      <Select
        options={options}
        placeholder="Please Select"
           />
        <Select
        options={options}
        placeholder="Please Select"
           />
        <Input type="text" name="zip" placeholder="ZIP Code*" onChange={handleChange} />

      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
  <div className="flex flex-col">
    <label htmlFor="" className="text-[#666] mb-1 inline-block">
      Contact Information
    </label>
    <Input type="text" name="contactName" placeholder="Contact Name*" onChange={handleChange} />
  </div>
  <div className="flex flex-col justify-end">
    <div className="flex items-center border border-natural-gray-20 rounded-md h-max">
      <span className=" px-2 border-r border-natural-gray-20 h-full flex items-center text-natural-gray">+92</span>
      <Input type="text" name="phone" className="border-0 pl-2" placeholder="Enter your Phone number" onChange={handleChange} />
    </div>
  </div>
</div>
<div className='h-px bg-natural-gray-20 mb-4'></div>
      <div className="flex gap-4">
        <button className="bg-dark-blue text-white px-4 py-2 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.0013 10.8334H10.8346V15.0001C10.8346 15.4584 10.4596 15.8334 10.0013 15.8334C9.54297 15.8334 9.16797 15.4584 9.16797 15.0001V10.8334H5.0013C4.54297 10.8334 4.16797 10.4584 4.16797 10.0001C4.16797 9.54175 4.54297 9.16675 5.0013 9.16675H9.16797V5.00008C9.16797 4.54175 9.54297 4.16675 10.0013 4.16675C10.4596 4.16675 10.8346 4.54175 10.8346 5.00008V9.16675H15.0013C15.4596 9.16675 15.8346 9.54175 15.8346 10.0001C15.8346 10.4584 15.4596 10.8334 15.0013 10.8334Z" fill="#FCFCFC"/>
</svg> Add a new address</button>
        <button className="bg-natural-color text-natural-gray px-4 py-2 rounded">Discard</button>
      </div>
    </form>
      </div>
    </div>
    
    </div>
    
    )}
    </>
  )
}

export default PaymentMethodPage