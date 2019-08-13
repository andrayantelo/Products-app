import React, {useState} from 'react';
import './Product.scss';

/*function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}*/

function Product(props) {
    // I think you would do this with a state
    // TODO Use state hook so that we can continue to use a functional
    // component here
    // {transform: `translateX(${x}px) translateY(${y}px)`
    
    // isActive basically means that the element has been clicked. 
    const [rect, setRect] = useState(null),
          [isActive, setActive] = useState(false);
    //let style = {backgroundColor: props.color};
    console.log(rect)
    //console.log(style);

    const toggleClass = e => {
        e.preventDefault();
        //console.log(e);
        
        // if !isActive then we want to return the element to its original
        // position
        if (isActive) {
            
            const boundingRect = e.currentTarget.getBoundingClientRect();
            console.log(boundingRect);
            let {top, bottom, left, right} = boundingRect;

            
            bottom = e.clientX + bottom
            top = top - e.clientY
            
            let position = {top: top, bottom: bottom, left: left, right: right}
    
            setRect(position);
           
        }

        setActive(!isActive)
    }
    
    return (
    <div className="container">
      <div className={ isActive? "traveler travel-move": "traveler"}>
        <div style= {rect? {top: rect.top, bottom: rect.bottom, right: rect.right, left: rect.left, backgroundColor: "red"} : {backgroundColor: props.color}} className={ isActive? "main bounce-move": "main"} onClick={toggleClass}>
          <h2 className="product-name">{props.product.name}</h2>
          <p className="product-info">{props.product.price.toLocaleString("en-US", { style:"currency", currency:"USD"})} - {props.product.description}</p>
        </div>
      </div>
    </div>
    );
}

export default Product;
