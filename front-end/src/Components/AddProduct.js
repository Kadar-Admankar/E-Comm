import React from 'react'

const AddProduct = ()=>{
    const [ name, setName ] = React.useState('')
    const [ price, setPrice ] = React.useState('')
    const [ category, setCategory ] = React.useState('')
    const [ company, setCompany ] = React.useState('')

   const AddProduct = async ()=>{
    console.log(name, price, category, company)
    const userId = JSON.parse(localStorage.getItem('user'))._id
    console.log("userId", userId)
    let result = await fetch('http://localhost:5000/add-product', {
        method: 'post',
        body:JSON.stringify({name, price, category, company, userId}),
        headers:{
            "content-Type":"application/json"
        }
    })
    result = await result.json()
  console.log("result", result)
   }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type='text' className='inputBox' value={name} onChange={(e)=>setName(e.target.value)} 
            placeholder='Enter Product Name' />
            <input type='text' className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)} 
            placeholder='Enter Product Price' />
            <input type='text' className='inputBox' value={category} onChange={(e)=>setCategory(e.target.value)} 
            placeholder='Enter Product Category' />
            <input type='text' className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)} 
            placeholder='Enter Product Company' />

            <button className='appButton' onClick={AddProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct