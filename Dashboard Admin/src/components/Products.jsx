import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            this is Products page
            <Link to="/" className='underline'>Go to dashboard</Link>
        </div>
    )
}

export default Products
