import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/ProductCard'
function App() {
  const [count, setCount] = useState(0);
  const [ProductList, setProduct] = useState([{ name: "About Macbook" }, { name: "About iPhone" }, { name: "About Dell" }]);
  function addProduct(){
    ProductList.push({ name: "About "+Math.random() });
    console.log('ProductList',ProductList);
    setProduct([...ProductList]);
  }
  return (
    <>
      <h1 className="text-3xl font-bold pb-4">
        Hello world! <b className="underline">I am Rohit learning React </b>
      </h1>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button
        type="button" onClick={addProduct}
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 pb-4"
      >
        Add Product
      </button>
    </div>
      {ProductList.map((product, id) => <ProductCard name={product.name} key={'product-card-' + id} />)}
    </>
  )
}

export default App
