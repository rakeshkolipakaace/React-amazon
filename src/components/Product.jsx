// import React from 'react';
// import { Link } from 'react-router-dom';

// const Product = ({ items }) => {
//   return (
//     <>
//       <div className="container">
//         <div className="row d-flex justify-content-center">
//           {items.map((product) => (
//             <div
//               key={product.id}
//               className="col-lg-4 col-md my-3 d-flex justify-content-center"
//             >
//               <div className="card product-card" style={{ width: '18rem' }}>
//                 <Link to={`/product/${product.id}`} className="image-container">
//                   <img
//                     src={product.imgsrc}
//                     className="card-img-top"
//                     alt={product.title}
//                   />
//                 </Link>
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">{product.description}</p>
//                   <p className="card-text fw-bold">₹{product.price}</p>
//                   <Link to={`/product/${product.id}`} className="btn btn-primary">
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;





import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ items }) => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md my-3 d-flex justify-content-center align-items-center"
            >
              <div className="card product-card text-center" style={{ width: "18rem" }}>
                <Link to={`/product/${product.id}`} className="image-container">
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body text-center ">
                  <h5 className="card-title">{product.title}</h5>
                  <p className='product-price'>{product.price} ₹</p>
                  <div className="buttoncontainer">
                    <button className='btn add-to-cart'>🛒 Add To Cart</button>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
