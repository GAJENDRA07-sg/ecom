import React from 'react'
import './BlogPostStyles.css';
import Img from '../../..//assets/frame-341-18.png'

const BlogPost = () => {
  return (
    <div className='blog-main-container'>
        <h3>Blog Posts</h3>
        <div className='blog-post-container'>
            <div className='blog-post'>
                <img src={Img} />
                <h6>Celebrate Earth Day with Sustainable Brands at Origin Tribe</h6>
                <p>Parth Shukla
                     <i class="fa-solid fa-circle"></i>
                     <span>Earth-friendly</span>
                     <i class="fa-solid fa-circle"></i>
                     <span>April 24, 2024</span>
                </p>
            </div>
            <div className='blog-post'>
                <img src={Img} />
                <h6>Celebrate Earth Day with Sustainable Brands at Origin Tribe</h6>
                <p>Parth Shukla
                     <i class="fa-solid fa-circle"></i>
                     <span>Earth-friendly</span>
                     <i class="fa-solid fa-circle"></i>
                     <span>April 24, 2024</span>
                </p>
            </div><div className='blog-post'>
                <img src={Img} />
                <h6>Celebrate Earth Day with Sustainable Brands at Origin Tribe</h6>
                <p>Parth Shukla
                     <i class="fa-solid fa-circle"></i>
                     <span>Earth-friendly</span>
                     <i class="fa-solid fa-circle"></i>
                     <span>April 24, 2024</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default BlogPost