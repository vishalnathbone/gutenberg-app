import React from 'react';
import {Link} from 'react-router-dom'

import Container from '../../hoc/container';
import {categories} from './categoriesdata';
import Header from '../../components/header/Header'

import './Categories.scss'

const Catergories=(props)=>{
    return(
        <React.Fragment>
            <section className="header">
                <Header/>
            </section>
            <Container>
            {
                categories.map((category,index)=>{
                    return(
                        <div className="col-12 col-md-6" key={index}>
                            <div className="category">
                                <Link to={'/books/'+category.name}>
                                    <div className="category-info">
                                        <img src={"assets/images/"+category.icon} alt={category.name} className="category-icon" />
                                        <p className="category-name">{category.name}</p>
                                    </div>
                                    <div className="next-btn">
                                        <img src="assets/images/Next.svg" alt="next" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            
        </Container>

        </React.Fragment>
           )
}

export default Catergories;
