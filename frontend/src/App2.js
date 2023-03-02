import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct2 from './components/AddProduct2';
import EditProduct2 from './components/EditProduct2';
import ProductList2 from './components/ProductList2';


const App2 = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProductList2/>}/>
            <Route path='add' element={<AddProduct2/>}/>
            <Route path='edit/:id' element={<EditProduct2/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App2