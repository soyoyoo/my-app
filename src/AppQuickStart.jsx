import { useState } from 'react';
import AboutPage from './test/AboutPage'
import MyButton from './test/MyButton';
import YourButton from './test/YourButton';
import Profile from './test/Profile'
import ShoppingList from './test/ShopppingList'
import './style.css'
import img_1 from './assets/img_1.jpg';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  let isLoggedIn = false;
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <AboutPage />
        <Profile />
        <ShoppingList />


      </div>
    )
  } else {
    return (
      <div>
        <img className="avatar" src={img_1} alt="img_1" />
        <h1>Counters that update separately</h1>
        <MyButton /> 
        <MyButton />
        <h1>Counters that update simultaneously</h1>
        <YourButton count={count} onClick={handleClick} />
        <YourButton count={count} onClick={handleClick} />
      </div>
    )
  }
}
export default App