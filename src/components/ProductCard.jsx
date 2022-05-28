import React from 'react'
import './Components.css'
// import axios from 'axios'

export default function ProductCard(props) {
  return (
    <div class="card">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
