import React from 'react'
import './styles.css'

const Item = ({product}) => {
    return (
            <div className='card d-flex flex-column align-items-center my-3 py-3'>
                <p className='mb-0 pb-0 h5'>{product.name}</p>
                <img src={product.img} width={250} alt="" />
                <p className='h6 mt-3'>{product.description}</p>
                <p style={{fontWeight: "600"}}>${product.precio}</p>
                <button className='btn btn-primary'>Agregar al carrito</button>
            </div>
    )
}

export default Item