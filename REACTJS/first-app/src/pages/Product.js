import Header from "./Header"
import{Footer} from "./Footer"
import{useLocation} from "react-router-dom"
import{useEffect,useState} from "react"
import { ProductCards } from "./ProductCards"
import { useSelector } from "react-redux"

export default function Product(){
    const location=useLocation()
    const [product,setProduct]=useState([])
    const user=useSelector((state)=>(state.loginReducer.user))

    useEffect(()=>{
        setProduct([
            {name:"BMW",price:"$50,00.00",image:"Bmw.jpg"},
            {name:"Bumblebee",price:"$48,00.00",image:"Bumblebee.jpg"},
            {name:"American Muscle",price:"$80,00.00",image:"americanMuscle.jpg"},
            {name:"Mustang",price:"$53,00.00",image:"Mustang.jpg"},
            {name:"Mercedes",price:"$30,00.00",image:"Mercedes.jpg"},
            {name:"Ferrari",price:"$72,00.00",image:"Ferrari.jpg"}
        ])
    },[])

    return(<>
    <Header/> 
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>   
    <h1>product</h1> {/*location.state.name*/}
    <div>
        {product.map((p,i)=>{
            return <ProductCards key={i} name={p.name} price={p.price} image={p.image}/>
        })}
    </div>
    
    <Footer/>
    </>)
}