import React from 'react'

const AddProduct = ()=>{
    const [ name, setName ] = React.useState('')
    const [ price, setPrice ] = React.useState('')
    const [ category, setCategory ] = React.useState('')
    const [ company, setCompany ] = React.useState('')
    const [ error, setError ] = React.useState(false)

   const AddProduct = async ()=>{


    if(!name || !price || !category || !company){
        setError(true)
        return false
    }
        

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
            { error && !name && <span className='invalid-input'>Enter Valid Name</span>}

            <input type='text' className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)} 
            placeholder='Enter Product Price' />
            { error && !price && <span className='invalid-input'>Enter Valid Price</span>}

            <input type='text' className='inputBox' value={category} onChange={(e)=>setCategory(e.target.value)} 
            placeholder='Enter Product Category' />
            { error && !category && <span className='invalid-input'>Enter Valid Category</span>}

            <input type='text' className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)} 
            placeholder='Enter Product Company' />
            { error && !company && <span className='invalid-input'>Enter Valid Company</span>}

            <button className='appButton' onClick={AddProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct