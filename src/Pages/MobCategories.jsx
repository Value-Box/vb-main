import React, { useState, useEffect } from 'react';
import Logo from "/src/Images/Logo.png";

const Categories = [
    {"id": 1, "name": "Clothing", "parentID": null, "imagepath": null},
    {"id": 2, "name": "Mens Cloth", "parentID": 1, "imagepath": "https://i.imgur.com/QkIa5tT.jpeg"},
    {"id": 3, "name": "Female Cloth", "parentID": 1, "imagepath": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    {"id": 4, "name": "Mens Casual", "parentID": 2, "imagepath": "https://i.imgur.com/mcW42Gi.jpeg"},
    {"id": 5, "name": "Mens Formal", "parentID": 2, "imagepath": "https://i.imgur.com/BG8J0Fj.jpg"},
    {"id": 6, "name": "Grocery", "parentID": null, "imagepath": null},
    {"id": 7, "name": "Atta", "parentID": 6, "imagepath": "https://i.imgur.com/62gGzeF.jpeg"},
    {"id": 8, "name": "Fine Atta", "parentID": null, "imagepath": null},
    {"id": 9, "name": "Paints", "parentID": 5, "imagepath": "https://i.imgur.com/qNOjJje.jpeg"},
    {"id": 10, "name": "ygyg", "parentID": null, "imagepath": null},
    {"id": 11, "name": "Steel", "parentID": null, "imagepath": null},
    {"id": 12, "name": "Custom Bottle", "parentID": 11, "imagepath": "https://i.imgur.com/BG8J0Fj.jpg"},
    {"id": 13, "name": "Water Bottle", "parentID": 12, "imagepath": "https://i.imgur.com/sC0ztOB.jpeg"},
    {"id": 1012, "name": "Electronics", "parentID": 11, "imagepath": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"},
];

function MobCategories() {
    const [parentId, setParentId] = useState(1);
    const [subParentId, setSubParentId] = useState(null);

    useEffect(() => {
        const firstSubCategory = Categories.find(cat => cat.parentID === parentId);
        setSubParentId(firstSubCategory ? firstSubCategory.id : null);
    }, [parentId]);

    // Level 1: Parent Categories
const parentCategories = Categories.filter(cat => cat.parentID === null)
.sort((a, b) => a.name.localeCompare(b.name));

// Level 2: Subcategories of Selected Parent
const subCategories = parentId ? Categories.filter(cat => cat.parentID === parentId) : [];

// Level 3: Sub-Subcategories of Selected Subcategory (only if subParentId is valid)
const subSubCategories = subParentId ? Categories.filter(cat => cat.parentID === subParentId) : [];

console.log(parentCategories);
console.log(subCategories);
console.log(subSubCategories);


    return (
        <div>
            {/* Header */}
            <div className='flex items-end gap-1 p-3'>
                <img className='w-20' src={Logo} alt="" />
                <div>
                    <h1>ValueBox App</h1>
                    <p>Save more on App</p>
                </div>
                <button className='bg-dark-blue text-white px-5 py-1 rounded-full ml-auto'>Open</button>
            </div>

            {/* Categories Button */}
            <button className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M21 12L15 18L21 24" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> Categories
            </button>

            {/* Categories Layout */}
            <div className='flex gap-3 mt-4 h-[80vh]'>
                
                {/* Level 1: Parent Categories */}
                <div className='bg-natural-color w-[25%]'>
                    {parentCategories.map((category) => (
                        <button 
                            key={category.id} 
                            className={`${parentId === category.id ? 'bg-white text-dark-blue' : ''} font-medium block w-full p-2`}
                            onClick={() => setParentId(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Level 2: Subcategories */}
                <div className='bg-light-gray w-[25%]'>
                    {subCategories.length > 0 ? (
                        subCategories.map((category) => (
                            <button 
                                key={category.id} 
                                className={`${subParentId === category.id ? 'bg-white text-dark-blue' : ''} font-medium block w-full p-2`}
                                onClick={() => setSubParentId(category.id)}
                            >
                                {category.name}
                            </button>
                        ))
                    ) : (
                        <p className="text-center p-2">No Subcategories</p>
                    )}
                </div>

                {/* Level 3: Sub-Subcategories */}
                <div className='flex items-start flex-wrap gap-4 p-2'>
                    {subSubCategories.length > 0 ? (
                        subSubCategories.map((category) => (
                            <div key={category.id} className='text-center'>
                                {category.imagepath && (
                                    <img className='w-20 h-20 object-cover rounded-full' src={category.imagepath} alt={category.name} />
                                )}
                                <h1>{category.name}</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-center p-2">No Sub-Subcategories</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MobCategories;
