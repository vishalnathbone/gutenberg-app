import React from 'react';
import Container from '../../hoc/container';
import { withRouter } from "react-router";
import Search from '../search/Search'
import './CustomHeader.scss'

const CustomHeader=(props)=>{
    let classes=[]
    return(
        <Container classes={classes.join(' ')} >
             <div className="col-12">
                <header>
                    <div className="page-topic">
                        <button className="btn back-btn" onClick={props.history.goBack}>
                            <img src="/assets/images/Back.svg" alt="Back" />
                        </button>
                        <h1>{props.match.params.topic}</h1>
                    </div>
                    <Search filterMethod={props.filterMethod} />    
                </header>
             </div>
        </Container>
       
    )
}

const goBack=()=>{
    alert()
}
export default withRouter(CustomHeader);