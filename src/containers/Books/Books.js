import React, { Component } from 'react';
import Book from '../../components/Book'
import CustomHeader from '../../components/customheader/CustomHeader' 

class Books extends Component {
  lastScrollY = 0;
  ticking = false;
    constructor(props){
        super(props)
        this.state={
            books:[],
            next_url:null,            
            loading: false,
            page: 0,
            prevY: 0,
            filtertext:''
        }
        this.loadingRef=React.createRef();
    }
    componentDidMount(){
      let topic=this.props.match.params.topic;
      this.getBooks(process.env.API_URL+"/books"+'?topic='+topic);

      var options = {
        root: null,
        rootMargin: "80px",
        threshold: 1.0
      };
      this.observer = new IntersectionObserver(
        this.handleObserver.bind(this),
        options
      );
      this.observer.observe(this.loadingRef.current);
    }
 
    handleObserver=(entities, observer) => {
      const y = entities[0].boundingClientRect.y;
      if (this.state.prevY > y) {
			const lastBook = this.state.books[this.state.books.length - 1];
			this.getBooks(this.state.next_url);
         }
     this.setState({ ...this.state,prevY: y });
    }
 

    getFilterData=(filtertext)=>{
       
        this.setState({
          ...this.state,
          filtertext:filtertext
        })
    }
    
    render() {
        return (
            <React.Fragment>
                	<section className="header custom-header">
                    <CustomHeader filterMethod={this.getFilterData} /> 
                  </section>	
                <div className="container">
                    <div className="row" >
                      
                        {  
                            this.state.books.filter(book=>{
                              let authors="NA";
                              if(book.authors.length>0){
                                authors=book.authors[0].name
                              } 
                             return authors.toLowerCase().includes(this.state.filtertext.toLowerCase());
                            }).map(book=>{  
                              let authors="NA";
                              let image="";
                              if(book.authors.length>0){
                                authors=book.authors[0].name
                              }     
                              if(book.formats['image/jpeg']!=undefined){
                                image=book.formats['image/jpeg'];
                              }   
                              // if(){
                                
                              // }              
                                   return <Book bookname={book.title} id={book.id} 
                                                author={authors} 
                                                image={image}
                                                formats={book.formats}
                                                key={book.id} 
                                                />
                                                            
                            })
                        }
                     </div>
                     <div ref={this.loadingRef} ></div>
                </div>
                   
                
            </React.Fragment>
        );
    }

    getBooks=(api_url)=>{
     
        fetch(api_url)
        .then(res => res.json())
        .then(
          (result) => {
           this.setState({
               ...this.state,
              books: [...this.state.books,...result.results],
              next_url:result.next
              
            });
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
}

export default Books;