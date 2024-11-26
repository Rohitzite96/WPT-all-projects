import { useCallback } from "react"
export  function ProductCards({name,price,image}){

  const msg= useCallback(()=>{
    console.log("Bank Balance dekh....")
  },[])
    return(<>
    <div className="col d-flex">
          <div className="card shadow-sm d-flex"  >
            {/* <svg className="bd-placeholder-img card-img-top" width="30%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="30%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"><img src={require(`../assets/imgs/${image}`)}/></text></svg> */}
            <img src={require(`../assets/imgs/${image}`)} height={225} width={400}/>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <label>Name: {name} <br/>   Price: {price}</label>
                <button className="btn-primary" onClick={msg} >Buy</button>
                
              </div>
            </div>
          </div>
        </div>
    </>)

}