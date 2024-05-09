import React, { useState } from 'react';
import './ProductComponent.css'; // Import CSS file for styling
import Img from '../../../assets/1.jpg';

const ProductComponent = () => {
    const [products, setProducts] = useState({
      recommended: [
        { id: 1, name: 'Product 1', price: 10, image: Img },
        { id: 2, name: 'Product 2', price: 15, image: Img },
        { id: 3, name: 'Product 3', price: 20, image: Img },
        { id: 4, name: 'Product 4', price: 25, image: Img }
      ],
      bestOfSeason: [
        { id: 5, name: 'Product 5', price: 30, image: Img },
        { id: 6, name: 'Product 6', price: 35, image: Img },
        { id: 7, name: 'Product 7', price: 40, image: Img },
        { id: 8, name: 'Product 8', price: 45, image: Img }
      ],
      todaysSpecial: [
        { id: 9, name: 'Product 9', price: 50, image: Img },
        { id: 10, name: 'Product 10', price: 55, image: Img },
        { id: 11, name: 'Product 11', price: 60, image: Img },
        { id: 12, name: 'Product 12', price: 65, image: Img }
      ]
    });
  
    const [activeTab, setActiveTab] = useState('recommended');
  
    const changeTab = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="product-component">
        <div className="buttons">
          <button className={activeTab === 'recommended' ? 'active' : ''} onClick={() => changeTab('recommended')}>
            Recommended
          </button>
          <button className={activeTab === 'bestOfSeason' ? 'active' : ''} onClick={() => changeTab('bestOfSeason')}>
            Best of season
          </button>
          <button className={activeTab === 'todaysSpecial' ? 'active' : ''} onClick={() => changeTab('todaysSpecial')}>
            Today's Special
          </button>
        </div>
        <div className="product-list">
          {products[activeTab].map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductComponent;