import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these Epic Destinations</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src = '../images/img-9.jpg'
                        text="Explore the hidden waterfall in ocean"
                        label = "Adventure"
                        path = '/'
                        />
                        <CardItem
                        src = '../images/img-8.jpg'
                        text="Explore the hidden Waterfall in the ocean"
                        label = "Adventure"
                        path = '/'
                        />
                        <CardItem
                        src = '../images/img-7.jpg'
                        text="Explore the ocean"
                        label = "Adventure"
                        path = '/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
