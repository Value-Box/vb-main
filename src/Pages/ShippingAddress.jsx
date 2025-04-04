import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AccountSideBar from "../Components/AccountSideBar";
import CheckBox from "../Components/CheckBox";
import Input from "../Components/Input";
import Select from "../Components/Select";


const addresses = [
    {
      id: 1,
      name: "Farman Haris",
      phone: "92345 8956325",
      address: "135 - Mian House, Garden Town Lahore",
      fullAddress: "Block A, Johar Town, Lahore, Punjab, Pakistan",
     
    },
    {
      id: 2,
      name: "Farman Haris",
      phone: "92345 8956325",
      address: "135 - Mian House, Garden Town Lahore",
      fullAddress: "Block A, Johar Town, Lahore, Punjab, Pakistan",
    
    },
    {
      id: 3,
      name: "Farman Haris",
      phone: "92345 8956325",
      address: "135 - Mian House, Garden Town Lahore",
      fullAddress: "Block A, Johar Town, Lahore, Punjab, Pakistan",
      
    },
  ];
 
function ShippingAddress() {
    const [country, setCountry] = useState("");
    const [province, setProvince] = useState("");
    const [street, setStreet] = useState("");
    const [apartment, setApartment] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [zip, setZip] = useState("");
    const [contactName, setContactName] = useState("");
    const [phone, setPhone] = useState("");
  
    const [selectedAddress, setSelectedAddress] = useState(1);
       const [AddAddress,setAddAddress]=useState(false)
   
       const [locationType, setLocationType] = useState("Home");
     const [defaultShipping, setDefaultShipping] = useState(false);
     const [defaultBilling, setDefaultBilling] = useState(true);
   
       const [region, setSelectedRegion] = useState("");
      const [address, setAddress] = useState("");
       const [landMark, setLandMark] = useState("");

    const options = [
      { value: "option1", label: "Option1" },
      { value: "option2", label: "Option2" },
      { value: "option3", label: "Option3" },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted");
    };
    const [showForm, setShowForm] = useState(false);
    
  return (
    <div className="bg-[#FCFCFC]">
       <div className="w-full mx-auto max-w-[1920px] md:p-6 hidden md:flex ">
    <div className="flex flex-col md:flex-row gap-5 w-full">
        {/* Left Section - Sidebar */}
  <div className="">
    <AccountSideBar />
  </div>
  <div className="w-full flex-1 space-y-5">
    {/* Main Content */}
    <main className=" flex flex-col md:gap-10">
      {/* Order Summary Section */}
   
    <div className="flex flex-col md:gap-5">
      {/* Left Section - Payment Details */}
      <div className="bg-white p-6 md:rounded-lg md:border border-[#F2F2F2] flex flex-col gap-5">
      <h2 className="text-2xl font-semibold">Shipping Address (es)</h2>
      <div className="flex items-center gap-2 text-green-600 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
  <path d="M7.0026 14.1668C7.44463 14.1668 7.86855 13.9912 8.18112 13.6787C8.49368 13.3661 8.66927 12.9422 8.66927 12.5002C8.66927 12.0581 8.49368 11.6342 8.18112 11.3217C7.86855 11.0091 7.44463 10.8335 7.0026 10.8335C6.56058 10.8335 6.13665 11.0091 5.82409 11.3217C5.51153 11.6342 5.33594 12.0581 5.33594 12.5002C5.33594 12.9422 5.51153 13.3661 5.82409 13.6787C6.13665 13.9912 6.56058 14.1668 7.0026 14.1668ZM12.0026 6.66683C12.4446 6.66683 12.8686 6.84242 13.1811 7.15498C13.4937 7.46755 13.6693 7.89147 13.6693 8.3335V16.6668C13.6693 17.1089 13.4937 17.5328 13.1811 17.8453C12.8686 18.1579 12.4446 18.3335 12.0026 18.3335H2.0026C1.56058 18.3335 1.13665 18.1579 0.824093 17.8453C0.511532 17.5328 0.335938 17.1089 0.335938 16.6668V8.3335C0.335938 7.89147 0.511532 7.46755 0.824093 7.15498C1.13665 6.84242 1.56058 6.66683 2.0026 6.66683H2.83594V5.00016C2.83594 3.89509 3.27492 2.83529 4.05633 2.05388C4.83773 1.27248 5.89754 0.833496 7.0026 0.833496C7.54978 0.833496 8.09159 0.94127 8.59712 1.15066C9.10264 1.36006 9.56197 1.66697 9.94888 2.05388C10.3358 2.4408 10.6427 2.90013 10.8521 3.40565C11.0615 3.91117 11.1693 4.45299 11.1693 5.00016V6.66683H12.0026ZM7.0026 2.50016C6.33956 2.50016 5.70368 2.76355 5.23484 3.2324C4.766 3.70124 4.5026 4.33712 4.5026 5.00016V6.66683H9.5026V5.00016C9.5026 4.33712 9.23921 3.70124 8.77037 3.2324C8.30153 2.76355 7.66565 2.50016 7.0026 2.50016Z" fill="#12B76A"/>
</svg>
        <span>All Data is secured</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border border-[#F2F2F2] rounded-lg p-5 flex flex-col gap-2.5 bg-[#FCFCFC]"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <CheckBox/>
                <span className="font-semibold">
                  {address.isDefault ? "Default Address" : "Set as Default"}
                </span>
              </div>
              {address.isDefault && (
                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
                  Default
                </span>
              )}
            </div>
            <p className="font-medium text-lg">{address.name}, {address.phone}</p>
            <div className="flex  items-center ">
              
              <span className="text-gray-700">{address.address}</span>
            </div>
            <p className="text-gray-500 text-sm ">{address.fullAddress}</p>
            <div className="flex space-x-4  text-sm">
              <button className="">Edit</button>
              <span>|</span>
              <button className="">Delete</button>
              <span>|</span>
              <button className="text-[#002882] hover:underline">Duplicate</button>
            </div>
          </div>
        ))}
      </div>
    
     
   

      
    
    </div>
     <div className='bg-white p-5 md:rounded-[5px] md:border-1 border-[#F2F2F2] flex flex-col gap-2.5 justify-around'>
   
      <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full flex flex-col gap-1">
          <label className="text-gray-600 text-[16px] font-medium">Country/region</label>
          <Select options={options} placeholder="Please Select" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-gray-600 text-[16px] font-medium">Province</label>
          <Select options={options} placeholder="Please Select" value={province} onChange={(e) => setProvince(e.target.value)} />
        </div>
      </div>
      <hr className="border-t-[1px] my-5 border-[#F2F2F2]" />
    
      <label className="text-gray-600 text-[16px] font-medium">Address</label>
      <div className="grid grid-cols-3 gap-2">
        <Input type="text" placeholder="Street Address*" value={street} onChange={(e) => setStreet(e.target.value)} />
        <Input type="text" placeholder="Apt, Suite (Optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} />
        <Input type="text" placeholder="Landmark (Optional)" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Select options={options} placeholder="Please Select" value={city} onChange={(e) => setCity(e.target.value)} />
        <Select options={options} placeholder="Select Area" value={area} onChange={(e) => setArea(e.target.value)} />
        <Input type="text" placeholder="ZIP Code*" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 rounded" />
      </div>
      <hr className="border-t-[1px] my-5 border-[#F2F2F2]" />
    
      <label className="text-gray-600 text-[16px] font-medium">Contact Information</label>
      <div className="grid grid-cols-2 gap-2">
        <Input type="text" placeholder="Contact Name*" value={contactName} onChange={(e) => setContactName(e.target.value)} className="border p-2 rounded" />
        <Input type="text" placeholder="+92 Enter your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded" />
      </div>
      <hr className="border-t-[1px] my-5 border-[#F2F2F2]" />
       <div className="flex gap-4 ">
       <button type="submit" className="flex items-center gap-2 px-10 py-2 bg-[#002882] text-white rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.0013 10.8334H10.8346V15.0001C10.8346 15.4584 10.4596 15.8334 10.0013 15.8334C9.54297 15.8334 9.16797 15.4584 9.16797 15.0001V10.8334H5.0013C4.54297 10.8334 4.16797 10.4584 4.16797 10.0001C4.16797 9.54175 4.54297 9.16675 5.0013 9.16675H9.16797V5.00008C9.16797 4.54175 9.54297 4.16675 10.0013 4.16675C10.4596 4.16675 10.8346 4.54175 10.8346 5.00008V9.16675H15.0013C15.4596 9.16675 15.8346 9.54175 15.8346 10.0001C15.8346 10.4584 15.4596 10.8334 15.0013 10.8334Z" fill="#FCFCFC"/>
</svg> Add a new address</button>
       <button className="px-10 py-2 bg-gray-300 text-gray-700 rounded-md">Discard</button>
       </div>
      
    </form>
    
      
    
      
   
      </div>
    </div>
   
   
  
   
    
    </main>
  </div>
    </div>
   </div>
   <div className="w-full flex md:hidden bg-[#FCFCFC] ">
    
    <div className="flex flex-col md:flex-row gap-10 w-full">
  <div className="w-full flex-1 space-y-5">
    {/* Main Content */}
    <main className=" flex flex-col md:gap-10">
      {/* Order Summary Section */}
     
    <div className="flex flex-col md:gap-5">
      {/* Left Section - Payment Details */}
    
      {!showForm && (
        <div>
 <div className="w-full flex flex-col md:hidden bg-[#FCFCFC] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
          {/* Search Bar */}
          <div className="flex items-center p-4 pr-6 ">
          <NavLink to="/OrderDetails">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
          </NavLink>
            <div className="relative flex-1 items-center">
           <span className='text-[18px]'>Add Address</span>
            </div>
        </div>
       
        </div>  
    <div className="bg-white p-4 md:rounded-lg md:border border-[#FFF] flex flex-col gap-5">
      <button onClick={() => setShowForm(true)} className="flex px-4 py-2 justify-center items-center gap-2 self-stretch rounded-md border border-[#1A1A1A]">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 18.75C5.175 18.75 1.25 14.825 1.25 10C1.25 5.175 5.175 1.25 10 1.25C14.825 1.25 18.75 5.175 18.75 10C18.75 14.825 14.825 18.75 10 18.75ZM10 2.5C5.8625 2.5 2.5 5.8625 2.5 10C2.5 14.1375 5.8625 17.5 10 17.5C14.1375 17.5 17.5 14.1375 17.5 10C17.5 5.8625 14.1375 2.5 10 2.5Z" fill="#1A1A1A"/>
  <path d="M10 14.375C9.65 14.375 9.375 14.1 9.375 13.75V6.25C9.375 5.9 9.65 5.625 10 5.625C10.35 5.625 10.625 5.9 10.625 6.25V13.75C10.625 14.1 10.35 14.375 10 14.375Z" fill="#1A1A1A"/>
  <path d="M13.75 10.625H6.25C5.9 10.625 5.625 10.35 5.625 10C5.625 9.65 5.9 9.375 6.25 9.375H13.75C14.1 9.375 14.375 9.65 14.375 10C14.375 10.35 14.1 10.625 13.75 10.625Z" fill="#1A1A1A"/>
</svg>  Add New Address
</button>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border border-[#F2F2F2] rounded-lg p-5 flex flex-col gap-2.5 bg-[#FCFCFC]"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <CheckBox/>
                <span className="font-semibold">
                  {address.isDefault ? "Default Address" : "Set as Default"}
                </span>
              </div>
              {address.isDefault && (
                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
                  Default
                </span>
              )}
            </div>
            <p className="font-medium text-lg">{address.name}, {address.phone}</p>
            <div className="flex  items-center ">
              
              <span className="text-gray-700">{address.address}</span>
            </div>
            <p className="text-gray-500 text-sm ">{address.fullAddress}</p>
            <div className="flex space-x-4  text-sm">
              <button className="">Edit</button>
              <span>|</span>
              <button className="">Delete</button>
              <span>|</span>
              <button className="text-[#002882] hover:underline">Duplicate</button>
            </div>
          </div>
        ))}
      </div>
    
     
   

      
    
    </div>
        </div>
        
  
        )}

        {showForm && (
          <div>
            <div className="w-full flex flex-col md:hidden bg-[#FCFCFC] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
          {/* Search Bar */}
          <div className="flex items-center p-4 pr-6 ">
          <span onClick={() => setShowForm(false)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></span>
          
        
            <div className="relative flex-1 items-center">
           <span className='text-[18px]'>Add Address</span>
            </div>
        </div>
       
        </div> 
  <div className='bg-white p-5 justify-between md:rounded-[5px] md:border-1 border-[#FFF] flex flex-col gap-2.5'>
  <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
            <div>
            <div className="mt-1">
            <span className="flex items-center gap-1 mb-1">Country/Region :  
            <span className="text-[#EEA500] flex ">*</span></span>
            <Select
        options={options}
        value={region}
        onChange={(e) => setSelectedRegion(e.target.value)}
        placeholder="Please Select"
           />
            </div>
            <div className="mt-3">
            <span className="flex items-center gap-1 mb-1">Province :  
            <span className="text-[#EEA500] flex ">*</span></span>
            <Select
        options={options}
        value={province}
        onChange={(e) => setSelectedProvince(e.target.value)}
        placeholder="Please Select"
           />
            </div>
            <div className="mt-3">
            <span className="flex items-center gap-1 mb-1">Region/City/Area :  
            <span className="text-[#EEA500] flex ">*</span></span>
            <Select
        options={options}
        value={city}
        onChange={(e) => setSelectedCity(e.target.value)}
        placeholder="Please Select"
           />
            </div>
            <div className="mt-3">
            <span className="flex items-center gap-1 mb-1">Address :  
            <span className="text-[#EEA500] flex ">*</span></span>
            <Input placeholder='Please Input' vlue={address} type='text' name='address' onChange={(e)=>setAddress(e.target.value)} />
            </div>

            <div className="mt-3">
            <span className="block mb-1">Landmark (Option) : </span>
            <Input placeholder='Please Input' value={landMark} type='text' name='address' onChange={(e)=>setLandMark(e.target.value)} />
            </div>

            </div>
            <div className="p-4 space-y-4">
      {/* Location Type */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-gray-700 font-medium">Location type</span>
        <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="location"
            value="Home"
            checked={locationType === "Home"}
            onChange={() => setLocationType("Home")}
            className="hidden"
          />
          <span
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
              locationType === "Home" ? "border-[#002882]" : "border-gray-400"
            }`}
          >
            {locationType === "Home" && (
              <span className="w-3 h-3 bg-[#002882] rounded-full"></span>
            )}
          </span>
          Home
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="location"
            value="Office"
            checked={locationType === "Office"}
            onChange={() => setLocationType("Office")}
            className="hidden"
          />
          <span
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
              locationType === "Office" ? "border-[#002882]" : "border-gray-400"
            }`}
          >
            {locationType === "Office" && (
              <span className="w-3 h-3 bg-[#002882] rounded-full"></span>
            )}
          </span>
          Office
        </label>
        </div>
      </div>

      {/* Default Shipping Address */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={defaultShipping}
          onChange={() => setDefaultShipping(!defaultShipping)}
          className="hidden"
        />
        <span
          className={`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center ${
            defaultShipping ? "bg-[#002882] border-[#002882]" : "border-gray-400"
          }`}
        >
          {defaultShipping && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </span>
        <span className="text-gray-700">Default Shipping Address</span>
      </label>

      {/* Default Billing Address */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={defaultBilling}
          onChange={() => setDefaultBilling(!defaultBilling)}
          className="hidden"
        />
        <span
          className={`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center ${
            defaultBilling ? "bg-[#002882] border-[#002882]" : "border-gray-400"
          }`}
        >
          {defaultBilling && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </span>
        <span className="text-gray-700">Default Billing Address</span>
      </label>
    </div>
            
        </form>
        <button className="bg-[#002882] rounded-[5px] text-white w-full mt-4 py-2 ">Save</button>
 
   

   </div>
          </div>
   
      
    )}
    </div>

   
  
   
    
    </main>
  </div>
    </div>
   </div>

    </div>
  )
}

export default ShippingAddress
