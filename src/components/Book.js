import React from 'react';
import './book.scss'
const Book =(props)=>{
const img_placeholder="http://via.placeholder.com/114X162";


// let booklink= props.formats.find((format)=>{
//     //console.log(format)
// })
let booklink=null;

for(var format in props.formats){
    // booklink='';
    if(format.includes('text/html')){
        booklink=props.formats[format]
    }
}
    return(
       <div className="col-4 col-md-2">
            <div className="book-info">
                <a href={booklink} target="_blank"> 
                    <img src={props.image !='' ? props.image : img_placeholder} alt={props.bookname} />
                    <p className="book-name">
                        {props.bookname}
                    </p>
                    <p className="book-author">
                        {props.author}
                    </p>
                </a>
            </div>
       </div>
    )
    
}
export default Book;