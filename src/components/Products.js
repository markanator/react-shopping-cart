import React, { useContext } from 'react';

// Components
import Product from './Product';

// context
import ProductContext from '../contexts/ProductContext';

const Products = () => {

	const {products,addItem} = useContext(ProductContext);


	return (
		<div className="products-container">
			{products.map(producty => (
				<Product
					key={producty.id}
					product={producty}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
