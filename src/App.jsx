import React from 'react'
import Card from './components/Card'

const App = () => {

  const clicked = () => {
    console.log("shweta");
  }

  const  changeFunction = (value) => {
console.log( value);
  }

  return (
    // <div className='parent'>

    //   <Card name='shweta' age={44} img="https://airbrush.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait_after.c152f2c3.jpg&w=3840&q=75" />
    //   <Card name='tikki' age={55} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrvexHfBXhgkFAG8tdl9TK_JWfWk8ifmv5P96KEvBDd0_dtHKFHyaZFc_&s=10" />
    //   <Card name='ankita' age={65} img="https://static.vecteezy.com/system/resources/thumbnails/058/496/955/small/young-girl-traditional-attire-holds-bouquet-of-tulips-during-nowruz-persian-new-year-spring-landscape-vertical-image-photo.jpg" />
    // </div>


    /////////function

    <div  >
      <button onDoubleClick={()=>{clicked()}} className='bg-blue-50'> click me </button> <br></br>

      <input type='text' placeholder='name' onChange={(value)=>{
        changeFunction( value.target.value);
      }} className='bg-amber-50 text-black'/> <br></br>


      <div className='h-44 w-44 bg-amber-400' onMouseOver={() => {
        console.log("moving inside box ") 
      }}></div>  <br></br>
    </div>
  )
}

export default App

