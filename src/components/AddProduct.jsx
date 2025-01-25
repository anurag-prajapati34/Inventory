import React, { useState } from 'react'; 
import { products } from '../assets/products'; 

const AddProduct = ({ isVisible, setIsVisible, allProducts, setAllProducts }) => {
    // Initializing product data state with default values
    const [productData, setProductData] = useState({
        'name': '',
        "id": `P${allProducts?.length + 1}`, // Unique ID based on the current number of products
        'price': 0,
        'category': '',
        'quantity': 0,
        'description': ''
    });

    // Function to handle input changes and update the productData state
    const handleFormDataInput = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        console.log(name, " :", value); // Log the input field name and value
        setProductData({ ...productData, [name]: value }); // Update the respective field in productData
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Add the new product to the allProducts array
        setAllProducts([...allProducts, productData]);

        alert("Product added"); // Notify the user that the product has been added

        // Reset the form data to default values
        setProductData({
            'name': '',
            "id": `P${allProducts?.length + 1}`,
            'price': 0,
            'category': '',
            'quantity': 0,
            'description': ''
        });

        setIsVisible(false); // Close the modal
    };

    return (
        // Modal container, visibility controlled by the isVisible prop
        <div className={`h-full w-full fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,100,0.2)] ${isVisible ? 'visible' : 'hidden'}`}>
            
            {/* Main modal content */}
            <div className='h-[90%] w-[80%] flex p-7 m-0 bg-white border-2 border-[var(--primary-color)] shadow-md gap-4'>

                {/* Form for adding a product */}
                <form onSubmit={handleSubmit} className='flex flex-col h-full w-[50%] items-start justify-evenly '>
                    <div className='w-full flex flex-col items-start h-full gap-4'>

                        {/* Input field for product name */}
                        <div className='flex flex-col items-start w-full'>
                            <label htmlFor='name'>Product Name</label>
                            <input
                                onChange={handleFormDataInput}
                                type='text'
                                name='name'
                                value={productData?.name}
                                required
                                className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'
                            />
                        </div>

                        {/* Input field for product category */}
                        <div className='flex flex-col items-start w-full'>
                            <label htmlFor='category'>Product Category</label>
                            <input
                                onChange={handleFormDataInput}
                                type='text'
                                name='category'
                                value={productData?.category}
                                required
                                className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'
                            />
                        </div>

                        {/* Input fields for price and quantity */}
                        <div className='flex gap-2 items-center w-full'>
                            <div className='flex flex-col items-start w-full'>
                                <label htmlFor='price'>Price</label>
                                <input
                                    onChange={handleFormDataInput}
                                    type='number'
                                    name='price'
                                    value={productData?.price}
                                    required
                                    className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'
                                />
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <label htmlFor='quantity'>Quantity/Stock</label>
                                <input
                                    onChange={handleFormDataInput}
                                    type='number'
                                    name='quantity'
                                    value={productData?.quantity}
                                    required
                                    className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'
                                />
                            </div>
                        </div>

                        {/* Textarea for product description */}
                        <div className='flex flex-col items-start w-full'>
                            <label htmlFor='description'>Description</label>
                            <textarea
                                onChange={handleFormDataInput}
                                type='text'
                                name='description'
                                rows={4}
                                value={productData?.description}
                                required
                                className='px-2 py-1 max-h-[200px] border-2 border-[rgba(0,0,0,0.5)] w-full'
                            />
                        </div>
                    </div>

                    {/* Submit and Cancel buttons */}
                    <div className='flex gap-4 w-full'>
                        <button type='submit' className='flex-1 px-4 py-2 rounded-xl bg-[var(--primary-color)] text-white'>
                            Add Product
                        </button>
                        <button
                            type='button'
                            onClick={() => setIsVisible(false)} // Close the modal on click
                            className='flex-1 px-4 py-2 rounded-xl border-2 border-[var(--primary-color)] text-black'>
                            Cancel
                        </button>
                    </div>
                </form>

                {/* Background image for the modal's right-side container */}
                <div
                    style={{ backgroundImage: 'url(https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize: 'contain' }}
                    className='w-[50%] h-full'>
                </div>
            </div>
        </div>
    );
};

export default AddProduct; // Exporting the AddProduct component
