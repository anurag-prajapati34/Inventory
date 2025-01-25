import React, { useEffect, useState } from 'react'
import { products } from '../assets/products'
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import image from '../assets/images/anurag.png'

export const Products = () => {

    // Extracting unique categories from the product list and adding 'All' as a default category
    const categories = ['All', ...new Set(products.map((product, index) => product.category))];

    // State to store all products
    const [allProducts, setAllProducts] = useState(products);

    // State to store filtered products based on search or category filter
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // State to toggle visibility of AddProduct component
    const [isAddProduct, setIsAddProduct] = useState(false);

    // State to toggle visibility of EditProduct component
    const [isEditProduct, setIsEditProduct] = useState(false);

    // State to store the ID of the product being edited
    const [editProductId, setEditProductId] = useState('');

    // Function to handle category filtering
    const handleCategoryFilter = (e) => {
        const selectedCategory = e.target.value
        const categoryfilteredProducts = selectedCategory === 'All' ? allProducts : allProducts.filter((pr) => pr.category === selectedCategory);
        setFilteredProducts(categoryfilteredProducts); // Update filtered products state
    }

    // Function to handle sorting of products by quantity
    const handleProductSorting = (e) => {
        const sortby = e.target.value;
        let initialProducts = [...filteredProducts]; // Create a copy of filtered products
        if (sortby === 'Default') {
            setFilteredProducts(initialProducts); // Reset to initial filtered products
        }
        if (sortby === 'Low to High') {
            initialProducts.sort((a, b) => a.quantity - b.quantity) // Sort in ascending order
            setFilteredProducts(initialProducts);
        }
        if (sortby === 'High to Low') {
            initialProducts.sort((a, b) => b.quantity - a.quantity) // Sort in descending order
            setFilteredProducts(initialProducts)
        }
    }

    // Function to handle search functionality
    const handleSearch = (e) => {
        const search = e.target.value;
        const searchedProducts = allProducts.filter((pr) => pr.name.toLowerCase().includes(search.toLowerCase())) // Filter products by name
        setFilteredProducts(searchedProducts);
    }

    // Function to handle deletion of a product
    const handleDeleteProduct = (id) => {
        const updatedProduct = allProducts.filter((pr) => pr.id !== id); // Remove product with matching ID
        setAllProducts(updatedProduct); // Update all products state
    }

    // UseEffect to update filtered products whenever allProducts state changes
    useEffect(() => {
        setFilteredProducts(allProducts)
    }, [allProducts])

    return (
        <div className='flex-1 h-full py-5 px-4'>

            {/* Header section with title and user profile */}
            <div className='flex justify-between items-center '>
                <div className=' text-start'>
                    <h1 className='text-2xl font-semibold'>  Products</h1>
                    <p>{allProducts?.length} Products found</p>
                </div>

                {/* Notification icon and user profile */}
                <div className='flex items-center gap-4 justify-end'>
                    <i class="fa-solid fa-bell text-2xl"></i>
                    <div className='flex gap-2 items-center text-start'>
                        <div className='h-[50px] aspect-square rounded-full bg-[var(--secondary-color)] flex items-center justify-center'>
                            <img src={image} className='h-full rounded-full' /> 
                        </div>
                        <div className='text-start'>
                            <h1 className=' font-semibold'>Anurag prajapati</h1>
                            <p className='text-base'>prajapatianurag73240@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search, Sort, and Filter options */}
            <div className='flex items-center justify-between gap-4 mt-7'>
                <input onChange={handleSearch} type='text' placeholder='Search by name ' className='flex-1  max-w-[50%] border-2 border-[rgba(0,0,0,0.5)] px-4 py-1' />
                <div className='flex gap-5 items-center justify-end'>
                    <div className='flex gap-1 items-center'>
                        Sort by Quantity
                        <select onChange={handleProductSorting} className=' border-2 border-[rgba(0,0,0,0.5)] px-4 py-1 '>
                            <option>Default</option>
                            <option>High to Low</option>
                            <option>Low to High</option>
                        </select>
                    </div>
                    <div className='flex gap-1 items-center'>
                        Filter by Category
                        <select onChange={handleCategoryFilter} className=' border-2 border-[rgba(0,0,0,0.5)] px-4 py-1 '>
                            {
                                categories.map((ctg) => <option>{ctg}</option>) // Generate category options dynamically
                            }
                        </select>
                    </div>
                </div>
                <button onClick={() => setIsAddProduct(true)} className='py-2 px-4 bg-[var(--primary-color)] text-white text-lg rounded-xl'>
                    Add New Product
                </button>
            </div>

            {/* Product Table */}
            <table className="w-full table-auto border-collapse rounded-xl mt-5">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 text-left">Product Name</th>
                        <th className="p-2 text-left">Product ID</th>
                        <th className="p-2 text-left">Category</th>
                        <th className="p-2 text-right">Price</th>
                        <th className="p-2 text-right">Stock/Quantity</th>
                        <th className="p-2 text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts?.map((product, index) => (
                        <tr key={product.id} className="hover:bg-gray-100 border-b-2 ">
                            <td className="p-2 text-left">{product.name}</td>
                            <td className="p-2 text-left">{product.id}</td>
                            <td className="p-2 text-left">{product.category}</td>
                            <td className="p-2 text-right">{product.price}</td>
                            <td className={`p-2 text-right ${product?.quantity < 10 ? 'bg-red-200' : ''}`}>
                                {/* Highlight low stock products */}
                                {product.quantity >= 10 ? product.quantity : 'Low stocks ' + product.quantity}
                            </td>
                            <td className="p-2 text-right">
                                {/* Edit and Delete actions */}
                                <button onClick={() => {
                                    setEditProductId(product.id);
                                    setIsEditProduct(true);
                                }} className='px-3 rounded-xl bg-[var(--primary-color)] text-white mr-1  shodow-sm'>Edit</button>
                                <button onClick={() => handleDeleteProduct(product?.id)} className='px-3 rounded-xl bg-red-300 shodow-sm'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add and Edit Product Modals */}
            <AddProduct isVisible={isAddProduct} setIsVisible={setIsAddProduct} allProducts={allProducts} setAllProducts={setAllProducts} />
            <EditProduct productId={editProductId} isVisible={isEditProduct} setIsVisible={setIsEditProduct} allProducts={allProducts} setAllProducts={setAllProducts} />
        </div>
    )
}
