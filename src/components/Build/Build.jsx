import './Build.css'
import React from 'react'

const Build = () => {
  return (
    <>
    <section className="build" id='build'>
        <div className="container">
            <div className="build__wrapper">
                <div className="build__part_1">
                    <h1>Building digital <br />products, brands <br />& experience</h1>
                    <p>Digital Agency is your online team mangement tool that <br />easy and prompt</p>
                    <button>Contact Us</button>
                </div>
                <div className="build__part_2">
                    <img src="/build.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Build