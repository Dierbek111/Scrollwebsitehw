import './Brand.css'
import React from 'react'

const Brand = () => {
  return (
    <>
    <section className="brand" id='brand'>
        <div className="container">
            <div className="brand__wrapper">
                <div className="brand__part_1">
                    <img src="/brand.png" alt="" />
                </div>
                <div className="brand__part_2">
                    <h1>Branding & Design <br /> system</h1>
                    <p>Commonly used in the graphic, print & publishing <br/>industris for previewing visual layout and <br/>mockups</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Brand