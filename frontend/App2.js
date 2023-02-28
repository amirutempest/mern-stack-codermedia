import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct2 from './src/components/AddProduct2';
import ProductList2 from './src/components/ProductList2';


const App2 = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProductList2/>}/>
            <Route path='/add' element={<AddProduct2/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App2