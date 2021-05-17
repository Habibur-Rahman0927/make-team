import React from 'react';

const Cart = (props) => {
    const {name, image, price} = props.cart;
    return (
        <div>
            <div className="card-add-friend">
                <div className="card-img">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4>{name}</h4>
                        <p style={{color:"#65676B"}}>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;