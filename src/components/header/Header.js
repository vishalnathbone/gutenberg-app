import React from 'react';
import Container from '../../hoc/container'
const Header=(props)=>{
    return(
        <Container>
            <div className="col-12">
                <header>
                    <h1>Gutenberg Project</h1>
                    <p>A social cataloging website that allows you to freely search its 
                        database of books, annotations,and reviews.</p>
                </header>
            </div>
            
        </Container>
       
    )
}

export default Header;