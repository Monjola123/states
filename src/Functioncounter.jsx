import React, { useState } from "react";

function Functioncounter() {

const [count, setCount] = useState(0);


const increment =()=>{

setCount(count + 1 ) ;

};

//creating the decrement handle

const decrement =()=> {

setCount(count - 1 );

};

return (

<div >

<h1>Function-Counter : {count}</h1>

<div className="btns">

<button onClick={decrement}>Decrease</button>


<button onClick={increment}>Increase</button>

</div>

</div>

);

}

export default Functioncounter;