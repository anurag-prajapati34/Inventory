import React, { useEffect, useState } from 'react'
import { products } from '../assets/products'; 

const EditProduct = ({ productId, isVisible, setIsVisible, allProducts, setAllProducts }) => {
    // State to hold the data of the product being edited
    const [productData, setProductData] = useState();
    console.log("product data :", productData); // Logging current product data for debugging

    // Handles changes in the input fields and updates the product data state
    const handleFormDataInput = (e) => {
        const { name, value } = e.target; // Extracting input field name and value
        console.log(name, " :", value); // Logging input field details for debugging

        // Updating the productData state with the new value
        setProductData({ ...productData, [name]: value });
    }

    // Handles form submission and updates the product list
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing default form submission behavior

        // Updating the product in the allProducts array
        const updatedProducts = allProducts.map((pr) => pr?.id === productId ? productData : pr);
        setAllProducts(updatedProducts); // Updating the parent state with the modified list

        alert("Product updated"); // Notifying the user of the update
        setIsVisible(false); // Hiding the edit product modal
    }

    // Effect to set the initial product data when the productId changes
    useEffect(() => {
        const initialProduct = allProducts.find((pr) => pr.id === productId); // Finding the product by ID
        setProductData(initialProduct); // Setting the initial data for the product
    }, [productId]);

    return (
        // Main container for the modal, toggled by `isVisible` prop
        <div className={`h-full w-full fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,100,0.2)] ${isVisible ? 'visible' : 'hidden'}`}>

            <div className='h-[90%] w-[80%] flex p-7 m-0 bg-white border-2 border-[var(--primary-color)] shadow-md gap-4'>
                {/* Form for editing product details */}
                <form onSubmit={handleSubmit} className='flex flex-col h-full w-[50%] items-start justify-evenly'>
                    <div className='w-full flex flex-col items-start h-full gap-4'>

                        {/* Input for product name */}
                        <div className='flex flex-col items-start w-[50%]'>
                            <label htmlFor='name'>Product Name</label>
                            <input onChange={handleFormDataInput} type='text' name='name' value={productData?.name} required className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
                        </div>

                        {/* Input for product category */}
                        <div className='flex flex-col items-start w-full'>
                            <label htmlFor='category'>Product Category</label>
                            <input onChange={handleFormDataInput} type='text' name='category' required value={productData?.category} className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
                        </div>

                        {/* Inputs for price and quantity */}
                        <div className='flex gap-2 items-center w-full'>
                            <div className='flex flex-col items-start w-full'>
                                <label htmlFor='price'>Price</label>
                                <input onChange={handleFormDataInput} type='number' name='price' required value={productData?.price} className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <label htmlFor='quantity'>Quantity/Stock</label>
                                <input onChange={handleFormDataInput} type='number' name='quantity' required value={productData?.quantity} className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
                            </div>
                        </div>

                        {/* Input for product description */}
                        <div className='flex flex-col items-start w-full'>
                            <label htmlFor='description'>Description</label>
                            <textarea onChange={handleFormDataInput} type='text' name='description' rows={4} required value={productData?.description} className='px-2 py-1 max-h-[200px] border-2 border-[rgba(0,0,0,0.5)] w-full'></textarea>
                        </div>
                    </div>

                    {/* Buttons for submitting changes or cancelling */}
                    <div className='flex gap-4 w-full'>
                        <button type='submit' className='flex-1 px-4 py-2 rounded-xl bg-[var(--primary-color)] text-white'>Save Changes</button>
                        <button type='button' onClick={() => setIsVisible(false)} className='flex-1 px-4 py-2 rounded-xl border-2 border-[var(--primary-color)] text-black'>Cancel</button>
                    </div>
                </form>

                {/* Background image displayed on the modal */}
                <div style={{ backgroundImage: 'url(https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize: 'contain' }} className='w-[50%] h-full'></div>
            </div>
        </div>
    )
}

export default EditProduct;
