import ProductList from './components/ProductList';
import data from './productList.json';
import Option from './components/Option'
import './App.css';
import { useState } from "react";



export default function App() {
  const [order,SetOrder] = useState('id');
  const [items,SetItmes] = useState(data);
  const sortItems = items.sort((a,b) => b[order]-a[order]);
  const priceClick = () => SetOrder('price');
  const bestClick = () => SetOrder('ration'); 
  

  const DeleteItem = (id) => {
    const newItem = items.filter((item) => item.id !== id)
    SetItmes(newItem);
  }
  //option
  const [kind,SetKind] = useState('kind');

  return (
    <div id='wrap'>
      <div className='btn'>
        <button type="button"
        onClick={priceClick}>가격</button>
        <button type="button"
        onClick={bestClick}>인기순</button>
        <Option 
        kind = {kind}/>
      </div>
        
      <ProductList 
      items = {sortItems}
      onDelete = {DeleteItem}/>
      
    </div>
  );
}