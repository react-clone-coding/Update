import React from 'react';
import './Home.css'
import Product from "./Product";
function Home() {   
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
                alt=""/>

                <div className="home_row">

                    <Product />

                </div>

                <div className="home_row">

                    {/*상품*/}
                    
                </div>

                <div className="home_row">

                    {/*상품*/}
                    
                </div>

            </div>
        </div>
    )
}

export default Home;