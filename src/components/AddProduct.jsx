import React, { useState } from 'react'
import { products } from '../assets/products';

const AddProduct = ({ isVisible, setIsVisible,allProducts,setAllProducts }) => {

    const [productData, setProductData] = useState({
        'name': '',
        "id": `P${allProducts?.length + 1}`,
        'price': 0,
        'category': '',
        'quantity': 0,
        'description': ''
    })

    const handleFormDataInput = (e) => {

        const { name, value } = e.target;
        console.log(name, " :", value);
        setProductData({ ...productData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setAllProducts([...allProducts,productData]);
        alert("Product added");
        setProductData({
            'name': '',
            "id": `P${allProducts?.length + 1}`,
            'price': 0,
            'category': '',
            'quantity': 0,
            'description': ''
        })
        setIsVisible(false);
        
    }

    return (
        <div  className={`h-full w-full fixed flex items-center justify-center top-0 left-0 bg-[rgba(0,0,100,0.2)] ${isVisible ? 'visible' : 'hidden'}`}>

           
<div className='h-[90%] w-[80%] flex p-7 m-0 bg-white border-2 border-[var(--primary-color)] shadow-md gap-4'>

<form onSubmit={handleSubmit} className='flex flex-col   h-full w-[50%]  items-start justify-evenly '>

<div className='w-full flex flex-col items-start h-full gap-4'>

    <div className='flex flex-col items-start w-full'>
        <label htmlFor='name' >Product Name</label>
        <input onChange={handleFormDataInput} type='text' name='name' value={productData?.name} required className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
    </div>
    <div className='flex flex-col items-start w-full'>
        <label htmlFor='category' >Product Category</label>
        <input onChange={handleFormDataInput} type='text' name='category' required value={productData?.category} className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
    </div>
    <div className='flex gap-2 items-center w-full'>
        <div className='flex flex-col items-start w-full'>
            <label htmlFor='price' >Price</label>
            <input onChange={handleFormDataInput} type='number' name='price' required value={productData?.price} className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
        </div>
        <div className='flex flex-col items-start w-full'>
            <label htmlFor='quantity' >Quantity/Stock</label>
            <input onChange={handleFormDataInput} type='number' name='quantity' required value={productData?.quantity} className='px-2 py-1 border-2 border-[rgba(0,0,0,0.5)] w-full'></input>
        </div>

    </div>

    <div className='flex flex-col items-start w-full'>
        <label htmlFor='description' >Description</label>
        <textarea onChange={handleFormDataInput} type='text' name='description'  rows={4} required value={productData?.description} className='px-2 py-1 max-h-[200px] border-2 border-[rgba(0,0,0,0.5)] w-full'></textarea>
    </div>


</div>
<div className='flex gap-4 w-full'>
    <button type='submit' className='flex-1 px-4 py-2 rounded-xl bg-[var(--primary-color)] text-white'>Add prouct</button>
    <button type='button' onClick={() => setIsVisible(false)} className='flex-1 px-4 py-2 rounded-xl border-2 border-[var(--primary-color)] text-black'>Cancel</button>
</div>

</form>
<div style={{backgroundImage:'url(https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600)', backgroundSize:'conain'}} className='w-[50%] h-full'>

</div>
</div>
        </div>
    )
}

export default AddProduct