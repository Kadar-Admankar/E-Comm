import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const UpdateProduct = ()=>{
    const [ name, setName ] = React.useState('')
    const [ price, setPrice ] = React.useState('')
    const [ category, setCategory ] = React.useState('')
    const [ company, setCompany ] = React.useState('')
    const params = useParams()

    useEffect(()=>{
        getProductDetails()
    },[])

    const getProductDetails = async ()=>{
        console.log("params", params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`)  // this will give output in string
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

   const updateProduct = async ()=>{
   console.log(name, price, category, company)

   }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type='text' className='inputBox' value={name} onChange={(e)=>setName(e.target.value)} 
            placeholder='Enter Product Name' />

            <input type='text' className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)} 
            placeholder='Enter Product Price' />

            <input type='text' className='inputBox' value={category} onChange={(e)=>setCategory(e.target.value)} 
            placeholder='Enter Product Category' />

            <input type='text' className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)} 
            placeholder='Enter Product Company' />

            <button className='appButton' onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct