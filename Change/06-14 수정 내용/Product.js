import react from 'react';
import './Product.css'

function Product() {
    return (
        <div className = "product">
            <div className="product_info">
                <p><strong>Shop Father's Day Gifts</strong></p>
                <p className="product_price">
                    <small>price</small>
                    <strong>10,000</strong>
                    <small>원</small>
                </p>
                <div className="product_rating">
                    <p>★</p>
                    <p>★</p>
                    <p>★</p>
                    <p>★</p>
                </div>
            </div>
            
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg" alt=""/>
            <button>Shop now</button>
        </div> 
    )
}
export default Product;