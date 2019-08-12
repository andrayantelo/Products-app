import React, {Component} from 'react';
import './Product.scss';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            style: {
                backgroundColor: props.color
            }
        }
        this.toggleClass = this.toggleClass.bind(this);
    }
    
    toggleClass() {
        console.log("toggling class");
        console.log(this);
        console.log(this.getBoundingClientRect());
    }
    
    
    render () {
        return (
          <div className="container">
            <div className={ this.state.isActive? "traveler travel-move": "traveler"}>
              <div style={this.state.style} className={ this.state.isActive? "main bounce-move": "main"} onClick={this.toggleClass}>
                <h2 className="product-name">{props.product.name}</h2>
                <p className="product-info">{props.product.price.toLocaleString("en-US", {style: "currency", currency:"USD"})} - {props.product.description}</p>
              </div>
            </div>
          </div>
        )
    }
}

/*function Product(props) {
    // I think you would do this with a state
    // TODO Use state hook so that we can continue to use a functional
    // component here
    // moveBubble will translate the bubble by a random percentage
    // the initial state is
    //
    // {transform: `translateX(${x}px) translateY(${y}px)`
    

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [isActive, setActive] = useState(false)
    let style = {backgroundColor: props.color}
    /*const moveBubble = e => {
        console.log("translating supposedly")
        e.preventDefault();
        let moveX = Math.floor(Math.random() * 201) - 100;
        let moveY = Math.floor(Math.random() * 201) - 100;
        let translateString = `translate(${moveX}px, ${moveY}px)`

        setX(moveX)
        setY(moveY)
        
    }
    const toggleClass = e => {
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        
        //console.log(e.pageX);
        //console.log(e.pageY);
        //style.left = e.pageX + 'px';
        //style.top = e.pageY + 'px';
        setActive(!isActive)
    }
    
    return (
    <div className="container">
      <div className={ isActive? "traveler travel-move": "traveler"}>
        <div style={{backgroundColor: props.color}} className={ isActive? "main bounce-move": "main"} onClick={toggleClass}>
          <h2 className="product-name">{props.product.name}</h2>
          <p className="product-info">{props.product.price.toLocaleString("en-US", { style:"currency", currency:"USD"})} - {props.product.description}</p>
        </div>
      </div>
    </div>
    );
} */

export default Product;
