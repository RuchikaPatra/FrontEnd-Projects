import React , {useState} from 'react'
import './App.css'
import b from './Images/Abercrombie 90s Ultra-High-Rise Straight Jeans.webp';
import c from './Images/Levi 501 Original Fit Jeans.webp';
import d from './Images/Levi wedgie straight jeans.webp';
import e from './Images/Madewell Kick Out Crop Jeans.webp';

function App(){

  const [cart , setCart] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0);

  const demoProducts = [
    { id:1,name:"Levi's Wedgie Straight Jeans",price:4968 },
    { id:2,name:"Abercrombie'90s Ultra-High-Rise Straight jeans",price:6408 },
    { id:3,name:"Madewell Kick Out Crop jeans",price:6624 },
    { id:4,name:"Levi's 501 Original Fit Jeans",price:7776 }
  ];

  demoProducts[0].imgURL = d;
  demoProducts[1].imgURL = b;
  demoProducts[2].imgURL = e;
  demoProducts[3].imgURL = c;

  const handleQuantityChange = (product , quantity)=>{
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id)
    if(existingItemIndex !== -1){
      if(quantity === 0){
        updatedCart.splice(existingItemIndex,1)
      }
      else {
        updatedCart[existingItemIndex].quantity = quantity
      }
      setCart(updatedCart);
      updateTotalPrice(updatedCart)
    }
  }

  const addToCart = (product,quantity)=>{
    const updatedCart=[...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id)
    const productToAdd = {...product , quantity , imgURL: product.imgURL};
    if(existingItemIndex !== -1){
      updatedCart[existingItemIndex].quantity += quantity;
    }
    else{
      updatedCart.push({...product,quantity,productToAdd})
    }
    setCart(updatedCart);
    setTotalPrice(totalPrice + product.price * quantity);
  }

  const buyHandler = ()=>{
    const confirmation = window.confirm('Are you sure you want to buy these products ?');
    if(confirmation){
      const productsBought = cart.map(item => `${item.name}(${item.quantity})`).join(', ');
      alert(`Products Brought: ${productsBought}`);
      setCart([]);
      setTotalPrice(0);
    }
  }

  const removeItemFromCart = (product)=>{
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);
    if(existingItemIndex !== -1){
      if(updatedCart[existingItemIndex].quantity === 1){
        updatedCart.splice(existingItemIndex , 1)
      }
      else if (updatedCart[existingItemIndex].quantity > 1){
        updatedCart[existingItemIndex].quantity -= 1;
      }
      setCart(updatedCart);
      setTotalPrice(totalPrice - product.price);
    }
  }

  const updateTotalPrice = (updatedCart)=>{

    let totalPrice =0;
    updatedCart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  }


  return(
    <div className='container'>
      <h1>Jeans Shop</h1>
      <div className='product-grid'>
        {demoProducts.map((product)=>(
          <div key={product.id} className='product-card'>
            <div className='product-info'>
              {product.imgURL && (
                <span role='img' aria-label='jeans' className='product-image'>
                  <img src={product.imgURL} alt={product.name} className='product-img'></img>
                </span>
              ) 
              }
              <p className='product-name'>{product.name}</p>
            </div>
            <div>
              <p className='product-price'>Price: ₹{product.price.toLocaleString()}</p>
              <select className='quantity-select' onChange={(e)=>handleQuantityChange(product , parseInt(e.target.value))}>
                {
                  [...Array(10)].map((_,index)=>(
                    <option key={index} value={index+1}>{index+1}</option>
                  ))
                }
              </select>
              <button className='add-to-cart-button' onClick={()=>addToCart(product,1)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='cart-section'>
        <h2 className='cart-heading'>Cart</h2>
        <ul>
          {cart.map((item,index)=>(
            <li key={index} className='cart-item'>
              {item.imgURL && (
                <span role='img' aria-label='product' className='cart-image'>
                  <img src={item.imgURL} alt={item.name} className='cart-img'></img>
                </span>
              )}
              <div>
                <p className='cart-item'>{item.name}</p>
                <p className='product-price'>{item.price.toLocaleString()}</p>
                <p className='product-price'>Quantity: {item.quantity}</p>
                <button className='remove-button' onClick={()=>removeItemFromCart(item)} >Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <p className='total-price'>Total Price: ₹{totalPrice.toLocaleString()}</p>
        <button className='buy-button' onClick={buyHandler}>Buy</button>
      </div>
    </div>
  )
}


export default App;