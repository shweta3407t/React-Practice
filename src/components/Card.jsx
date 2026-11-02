import React from 'react'

const Card = (props) => {
  return (

    <div className="card" >
      <img src={props.img}></img>
     
      <h1>{props.name} , age={props.age}</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi vel quidem blanditiis nostrum. Harum sequi voluptas perspiciatis magni quam maiores, nulla in, aperiam iste optio voluptatem nostrum esse tempora.</p>
      <button>view profile</button>
    </div>


  )
}

export default Card
