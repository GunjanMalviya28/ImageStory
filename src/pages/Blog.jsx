import React from 'react'
import "./Blog.css";

const Blog = () => {
  return (
    <>
    <div class="main">
    <h1 class="page-Blog">Blog</h1>
    <div class="line-blog"></div>
    <div class="bottom">
    <div class="left">
       <div class="top-left">
      <h8 class="date1">3.11.2021</h8> <h8 class="type1">  .TRENDS</h8>
      <h1 class="h1">Why The Trend Of Minimalism?</h1>
      <div class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id?</div>
    </div>
    <div class="bottom-left">
      <h8 class="date1">3.11.2021</h8> <h8 class="type1">  .COLLECTION</h8>
      <h1 class="h1">World's To Photography Collection</h1>
      <div class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id?</div>
    </div> 
    </div>
     <div class="right">
        <div class="top-right">
        <h8 class="date1">3.11.2021</h8> <h8 class="type1">  .TRENDS</h8>
        <h1 class="h1">Simple Tips & Tricks Of Photography</h1>
        <div class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, temporibus. Lorem ipsum dolor sit amet consectetur</div>
      </div>
      <div class="bottom-right">
        <h8 class="date1">3.11.2021</h8> <h8 class="type1">  .PORTRAITS</h8>
        <h1 class="h1">How To Get Model Look Portraits</h1>
        <div class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, temporibus. Lorem ipsum dolor sit amet consectetur</div>
      </div>
    </div>
</div>
   <button className="btn-blog">VIEW ALL BLOGS</button>
</div>
    </>
  )
}

export default Blog
