import React from 'react'

function Collection() {
    const collections = [
        { name: "Electronics", image: "https://images.unsplash.com/photo-1651969650742-4fecf6d9a20a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Clothing", image: "https://plus.unsplash.com/premium_photo-1671469876456-b1bafec2d029?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Books", image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Toys", image: "https://plus.unsplash.com/premium_photo-1681488178364-bd965565837e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Beauty", image: "https://plus.unsplash.com/premium_photo-1723708939980-55adb9dd0fc9?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Sports", image: "https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Automobiles", image: "https://images.unsplash.com/photo-1602074613059-383ad96bf016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Music", image: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Gaming", image: "https://plus.unsplash.com/premium_photo-1687672031149-fcab45e86b58?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
      ];
  return (
    <div className="w-full sm:px-4 py-4">
      {/* Flexbox layout for auto-adjusting items */}
      <div className="flex overflow-auto scrollbar-hidden flex-nowrap sm:flex-wrap gap-4 items-start content-start self-stretch">
        {collections.map((item, index) => (
          <div key={index} className="flex-1 min-w-20 sm:min-w-[100px] sm:max-w-[120px] text-center">
            <img src={item.image} alt={item.name} className="w-15 h-15 sm:w-24 sm:h-24 object-cover rounded-full mb-2 mx-auto" />
            <p className="text-xs sm:text-sm sm:font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>

      
  )
}

export default Collection