// import React, { useState } from 'react';
// import './prod.css'; // Import CSS file for styling

// const ProductComponent = () => {
//   // State to store the currently selected product
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Function to handle button clicks and change the selected product
//   const handleButtonClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div>
//       <h2>Product Details</h2>
//       <div className="button-container">
//         <button onClick={() => handleButtonClick("Recommended")}>Recommended</button>
//         <button onClick={() => handleButtonClick("Best of season")}>Best of season</button>
//         <button onClick={() => handleButtonClick("Today's Special")}>Today's Special</button>
//       </div>
//       <div>
//         {/* Conditional rendering based on the selected product */}
//         {selectedProduct && (
//           <div className="product-card">
//             <h3>{selectedProduct}</h3>
//             {/* <img className="product-image" src=URL of product photo alt="Product" /> */}
//             <p>Price: {/* Price of the product */}</p>
//             <button>Add to Cart</button>
//           </div>
//         )}
//         {!selectedProduct && <p>Please select a product</p>}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;