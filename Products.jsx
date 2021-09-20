import React from 'react';
import './Products.css';
import {FaRegHeart} from 'react-icons/fa'

function Products() {
    const data=[
        {
            motto: "Keep yoour life simple",
            price : "Rs 500- Rs 900",
            type: "painting",
            img : ""
        },
        {
            motto: "Keep yoour life simple",
            price : "Rs 500- Rs 900",
            type: "painting",
            img : ""
        },
        {
            motto: "Keep yoour life simple",
            price : "Rs 500- Rs 900",
            type: "painting",
            img : ""
        },
        {
            motto: "Keep yoour life simple",
            price : "Rs 500- Rs 900",
            type: "painting",
            img : ""
        },
        {
            motto: "Keep yoour life simple",
            price : "Rs 500- Rs 900",
            type: "painting",
            img : ""
        },
    ]
    return (
        <section className="products">
            {data.map((datum)=>{
                return (
                    <div className="card">
                        <div className="image">
                        <p className="fav"><FaRegHeart/></p>
                        </div>
                        <p className="motto">{datum.motto}</p>
                        <p className="price">{datum.price}</p>
                        <p className="type">{datum.type}</p>
                        <button type="submit" className="btn">Add to cart</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Products
