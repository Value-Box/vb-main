import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../Components/Select";
import Input from "../../Components/Input";

function Addresses() {
    const [selectedAddress, setSelectedAddress] = useState(1);
    const [AddAddress,setAddAddress]=useState(false)

    const [locationType, setLocationType] = useState("Home");
  const [defaultShipping, setDefaultShipping] = useState(false);
  const [defaultBilling, setDefaultBilling] = useState(true);

    const [region, setSelectedRegion] = useState("");
    const [province, setSelectedProvince] = useState("");
    const [city, setSelectedCity] = useState("");
    const [address, setAddress] = useState("");
    const [landMark, setLandMark] = useState("");


  const addresses = [
    {
      id: 1,
      name: "Farman Haris",
      phone: "+92123456789",
      address: "135- Mian House, Garden Town Lahore",
      city: "Lahore - Garden Town, Punjab, Pakistan",
      tag: "Office",
      isDefault: true,
    },
    {
      id: 2,
      name: "Farman Haris",
      phone: "+92123456789",
      address: "135- Mian House, Garden Town Lahore",
      city: "Lahore - Garden Town, Punjab, Pakistan",
      tag: "Home",
      isDefault: false,
    },
  ];
  const options = [
    { value: "punjab", label: "Punjab" },
    { value: "kpk", label: "Kpk" },
    { value: "sindh", label: "Sindh" },
    { value: "blochistan", label: "Blochistan" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
    console.log(landMark);
  };
  return (
    <div className="h-[94vh] block md:hidden pb-5">
        <button className="flex items-center p-2 bg-[#FCFCFC] border-b border-[#F2F2F2] w-full "
        onClick={()=>setAddAddress(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M21 12L15 18L21 24" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span>Add Shipping Address</span>
        </button>
    {AddAddress ?(
        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full mt-2 px-3">
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
            <Input placeholder='Please Input' value={address} type='text' name='address' onChange={(e)=>setAddress(e.target.value)} />
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
            <button className="bg-[#002882] rounded-[5px] text-white w-full mt-4 py-2 ">Save</button>
        </form>
        ) :(
             <div className=" bg-[#F2F2F2] flex flex-col gap-3 h-screen">
        <Link to="/Checkout" className="flex items-center p-2 bg-[#FCFCFC] border-b border-[#F2F2F2] ">
         <span>Select Shipping Address</span>
        </Link>
    {/* Add New Address Button */}
    <div className="px-4">
    <button className="bg-[#E6EAF3] w-full flex items-center justify-center gap-2 border border-[#002882] 
    px-4 py-3 rounded-[5px] text-[#002882] font-semibold transition" onClick={()=>setAddAddress(true)}>
     Add New Address
    </button>
    </div>

    {/* Address List */}
    <div className="space-y-4">
      {addresses.map((item) => (
        <div onClick={() => setSelectedAddress(item.id)}
          key={item.id}
          className={`p-4 flex items-start gap-3 bg-[#FCFCFC] border-b border-[#F2F2F2]`}
        >
          {/* Radio Button */}
          <input
            type="radio"
            checked={selectedAddress === item.id}
            readOnly
            className="w-5 h-5 text-[#0032A3] accent-[#0032A3] focus:ring-[#0032A3] hover:ring-[#0032A3] checked:bg-[#0032A3] checked:border-[#0032A3]"
          />

          {/* Address Details */}
          <div className="flex flex-col">
            <p className="text-[#999]">
              <span className="text-[#1A1A1A] font-semibold ">{item.name}</span>, {item.phone}
            </p>
            <p className="text-sm text-[#999]">{item.address}</p>
            <p className="text-sm text-[#999]">{item.city}</p>

            {/* Tags */}
            <div className="mt-2 flex items-center gap-2">
              <span className=" text-[#666] border border-[#666] px-2 py-1 text-xs rounded">{item.tag}</span>
              {item.isDefault && (
                <span className=" text-[#F04438] border border-[#F04438] px-2 py-1 text-xs rounded">Default shipping address</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}
</div>
  )
}

export default Addresses