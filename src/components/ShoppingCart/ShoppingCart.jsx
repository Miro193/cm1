import { useState } from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState({});
  // itemName: '',
  // quantity: 1,
  // price: 0,

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (
      newItem.itemName.trim() === '' ||
      isNaN(newItem.quantity) ||
      newItem.quantity < 1 ||
      isNaN(newItem.price) ||
      newItem.price < 0
    ) {
      alert('Please enter valid item details.');
      return;
    }
    const existingItem = cartItems.find(
      (item) => item.itemName === newItem.itemName
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.itemName === newItem.itemName
          ? {
              ...item,
              quantity: item.quantity + parseInt(newItem.quantity),
              price: parseFloat(newItem.price),
            }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...newItem,
          quantity: parseInt(newItem.quantity),
          price: parseFloat(newItem.price),
        },
      ]);
    }

    setNewItem({ itemName: '', quantity: 0, price: 0 }); // Clear input fields
  };

  const handleUpdateQuantity = (itemName, newQuantity) => {
    if (isNaN(newQuantity) || newQuantity < 1) {
      alert('Quantity must be a number greater than 0.');
      return;
    }
    const updatedCart = cartItems.map((item) =>
      item.itemName === itemName
        ? { ...item, quantity: parseInt(newQuantity) }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemName) => {
    const updatedCart = cartItems.filter((item) => item.itemName !== itemName);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      <h3>Add Item</h3>
      <input
        type="text"
        name="itemName"
        placeholder="Enter item"
        value={newItem.itemName}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={newItem.price}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>Add to Cart</button>

      <h3>Cart Items</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.itemName}>
              {item.itemName} - Quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(item.itemName, e.target.value)
                }
                style={{ width: '50px' }}
              />
              - Price: ${parseFloat(item.price).toFixed(2)} - Subtotal: $
              {parseFloat(item.price * item.quantity).toFixed(2)}
              <button onClick={() => handleRemoveItem(item.itemName)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${parseFloat(calculateTotal()).toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCart;
