import React, {useContext} from 'react';

// Components
import Item from './ShoppingCartItem';

// context
import CartContext from '../contexts/CartContext';

const ShoppingCart = props => {

    const carty = useContext(CartContext);

    const getCartTotal = () => {
        return carty.reduce((acc, value) => {
            return acc + value.price;
        }, 0).toFixed(2);
    };

    return (
        <div className="shopping-cart">
            {carty.map(item => (<Item key={item.id} {...item}/>))}
            <div className="shopping-cart__checkout">
                <p>Total: ${getCartTotal()}</p>
                <button>Checkout</button>
            </div>

        </div>
    );
};

export default ShoppingCart;
