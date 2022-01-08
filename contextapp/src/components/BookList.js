import React,{useContext} from 'react'
import { Component } from 'react/cjs/react.production.min';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';



/*
/*this way works with  class only


class BookList extends Component {

    static contextType = ThemeContext;

    render(){
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
    return ( 
        <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
            <ul>
                <li style={{background:theme.ui}}>the way of Kings</li>
                <li style={{background:theme.ui}}>the name of the wind</li>
                <li style={{background:theme.ui}}>the final empire</li>

            </ul>
        </div>
     );
}
}
*/
/*(usecontext)so we can uscontext without consumer tags*/
const BookList = () => {
    const {books}=useContext(BookContext);
    const {isLightTheme,light,dark}=useContext(ThemeContext);
        const theme=isLightTheme?light:dark;
    return ( 
        <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
            <ul>
                {books.map(book =>{
                    return(
                <li style={{background:theme.ui}} key={book.id}>{book.title}</li>
                );}
                )}
                        

            </ul>
        </div>
     );
}
 
export default BookList;
