import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )
}

function Users(props) {
  return(
    <div className='users'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )  
}

function Counter(props){
  const [count, setCount] = useState(3);
  const countIncrease = () =>setCount(count + 1);
  const countDecrease = () =>setCount(count - 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={countIncrease}>Increase</button>
      <button onClick={countDecrease}>Decrease</button>
    </div>
  )
}

/* {
  products.map(product=> <Product name={product.name} price={product.price}></Product>)
} */

/* const products = [
  {name: 'Laptop', price: '85000'},
  {name: 'Phone', price: '25000'},
  {name: 'Tablet', price: '30000'},
  {name: 'Watch', price: '5000'}
] */

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
export default App;
