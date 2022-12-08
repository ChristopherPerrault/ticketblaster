import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
  // props.product is the product we are selling
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card>
      <Card.Body>
       
      
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
      
      </Card.Body>
    </Card>
  );
}

export default ProductCard;