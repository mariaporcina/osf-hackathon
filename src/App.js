import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Main from "./components/Main";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const data = axios.get(baseURL).then((res) => setProducts(res.data));
  }, []);

  // const secretKey = '$2a$08$pFVVXzCzrPiDa3SjiPgVGe0KPA2otZT1Da/vHsvN3p7KW7THw4l4a'
  // const baseURL = `https://shrouded-mountain-15003.herokuapp.com/https://backend-academy-osf.herokuapp.com/api/products/product_search?id=25565189&secretKey=${secretKey}`
  const baseURL = 'https://fakestoreapi.com/products'
  

  return (
    <div className="App">
      <Main>
        <Header />
        <Card />
        <Footer />
        {/* {products.map((value, index) => {
          return <ProductCard key={index} id={value.id} currency={value.currency} name={value.title} img={value.image}/>;
        })} */}
      </Main>
    </div>
  );
}

export default App;
