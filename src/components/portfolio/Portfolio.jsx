import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.PNG'
import IMG2 from '../../assets/portfolo.PNG'
import IMG3 from '../../assets/portfoli.PNG'

// DO NOT USE THE IMAGES IN PRODUCTION 

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Student Information Management System',
        github: 'https://github.com/mogess0606',
        demo: 'https://www.youtube.com/watch?v=Pk2p_Q0gw3Y&list=PLhVYLMKcOll-_bT2UHBe2e5cQxX5_o16Z'
    },
    {
        id: 2,
        image: IMG3,
        title: 'Electronic Health Information Management  System',
        github: 'https://github.com/mogess0606',
        demo: 'https://youtube.com'
    },
    {
        id:3,
        image:IMG2,
        title:'Education Web Site',
        github: 'https://github.com/mogess0606',
        demo: 'https://youtube.com'
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2> Portfolio</h2>

            <div className="container portfolio__container">
               {
                   data.map(({id, image, title, github,demo})=>{
                       return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item__image'>
                                <img src={image} alt={title} />
                            </div>
                                <h3>{title}</h3>
                                <div className='portfolio_item_cta'>
                                    <a href={github} className='btn' target='_blank' >Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>   
                                </div>
                        </article>

                       )
                   })
               }
            </div>
        </section>
    )
}

export default Portfolio