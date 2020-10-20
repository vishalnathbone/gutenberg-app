import React from 'react'
const Container = props => {
    let classes=props.classes!=undefined ? props.classes : null;
    return(
        <div className={'container '+classes}>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
};

export default Container;