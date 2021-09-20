import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <section className="search">
            <input type="text" placeholder="Enter search"/>
            <button type="submit" className="btn">Search</button>
            <div className="sort-by">Sort by Popularity</div>
        </section>
    )
}
