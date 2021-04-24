import { Switch, Route } from 'react-router';
import './App.css';
import FeaturePage from './pages/FeaturePage';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import { useState, useEffect } from 'react';
import ShoppingCart from './components/ShoppingCart';

//Images
import pcimg from './images/pressurecookers.jpg';
import ca from './images/computeraccessories.jpg';
import ca1 from './images/ca3.jpg';
import ca2 from './images/ca2.jpg';
import ca3 from './images/ca1.jpg';
import pc1 from './images/pc1.jpg';
import pc2 from './images/pc2.jpg';
import pc3 from './images/pc3.jpg';



const products = [
  {
    category: 'Pressure Cookers',
    categoryId: "pressurecookers",
    image: pcimg,
    products: [
      {
        id: 1,
        name: 'Vintage Pressure Cooker Dollhouse Miniatures Food Supply',
        brand: 'Cool Price',
        price: 15.99,
        image: pc1,
      },
      {
        id: 2,
        name: 'Dollhouse Miniature Pressure Cooker G8196',
        brand: 'Miniatures World Paris',
        price: 16.55,
        image: pc2,
      },
      {
        id: 3,
        name: 'Ninja Deluxe Foodi Accessory Bake Kit, 6.5 & 8 qt, Grey',
        brand: 'Ninja',
        price: 34.99,
        image: pc3,
      },
    ],
  },
  {
    category: "Computer Accessories",
    categoryId: "computeraccessories",
    image: ca,
    products: [
      {
        id: 4,
        name: 'SAMSUNG ELECTRONICS EVO Select 256GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)',
        brand: 'Samsung',
        price: 49.99,
        image: ca1,
      },
      {
        id: 5,
        name: 'SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA',
        brand: 'SanDisk',
        price: 24.99,
        image: ca2,
      },
      {
        id: 6,
        name: 'Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black',
        brand: 'Logitech',
        price: 219.99,
        image: ca3,
      },
    ]
  },
]


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      )
    } else {
      product['qty'] = 1;
      setCartItems([...cartItems, product]);
    }
    setQuantity(quantity + 1);
  }

  const removeFromCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      )
    }
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Switch>
      <Route path="/" exact>
        <MainLayout quantity={quantity}>
          <HomePage products={products} />
        </MainLayout>
      </Route>
      <Route path="/category/:categoryId">
        <MainLayout quantity={quantity}>
          <FeaturePage products={products} addToCart={addToCart} />
        </MainLayout>
      </Route>
      <Route path='/cart'>
        <MainLayout quantity={quantity}>
          <ShoppingCart cartItems={cartItems} quantity={quantity} addToCart={addToCart} removeFromCart={removeFromCart} />
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
