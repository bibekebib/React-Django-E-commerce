import React from "react";
import { Card, Strong } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded" style={{ height: "400px" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} height="200"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {/* {product.rating} from {product.numReviews} Reviews */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Text as="div">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
