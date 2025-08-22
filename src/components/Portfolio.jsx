import React from 'react'
import '../styles/Portfolio.css'

const Portfolio = () => {
    return (
        <section className="portfolio-sec" id='portfolio'>
            <div className="portfolio-text">
                <h3>My <span>Portfolio</span></h3>
                <p>There are many variations of passages ofLorem Ipsum
                    available, but the majority havesuffered alteration in some
                    form, by injected humour,
                </p>
            </div>
            <div className="portfolio-media">
                <img src="https://tinyurl.com/mufjpft" alt="" />
                <div className="small-imgs">
                    <img src="https://shorturl.at/t2PKw " alt="" />
                    <img src="https://shorturl.at/32Cok" alt="" />
                    <img src="https://shorturl.at/Ayngf" alt="" />
                    <img src="https://shorturl.at/OAcTr" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio