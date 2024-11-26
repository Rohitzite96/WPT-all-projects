import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Product from "./pages/Product";
import Calculator from "./pages/Calculator";
import { Counter, CounterCallback, CounterMemo } from "./pages/Counter";
import { ProductCards } from "./pages/ProductCards";
import { CounterReducer } from "./pages/Reducer/CounterReducer";
import ReduxProvider from "./pages/reduxExamples/ReduxProvider";
import { Provider } from "react-redux";
import { loginStore } from "./pages/reduxExamples/loginform/loginStore";
import { UseRefExample } from "./pages/useRefExample";


const root = ReactDOM.createRoot(document.getElementById("root"));
// const profiles=[
//   {name:"Nezuko", age:63 ,path:"nezuko.jpeg"}
//   //   {name:"Levi Ackerman", age:77,path:"levi.jpg"},
//   //  {name:"Aren yeager" ,age:27, path:"eren.jpg"},
//   //  {name:"Muzan" ,age:27, path:"muzan.jpg"}

// ]
root.render(
  <>
    {/* {profiles.map((p,i)=><App key={i}  name={p.name} age={p.age} path={p.path}/>)} */}
<Provider store={loginStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />}/>
        <Route path="/Product" element={<ProductCards />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        {/* <Route path='/counter' element={<CounterCallback/>}/> */}
        {/* <Route path='/counter' element={<CounterMemo/>}/> */}
        {/* <Route path="/redux" element={<ReduxProvider/>}/> */}
        <Route path="/ref" element={<UseRefExample/>}/>

      </Routes>
    </BrowserRouter>
    </Provider>
    {/* <App/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
