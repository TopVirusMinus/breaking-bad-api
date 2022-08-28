import QuoteCSS from "./Quote.module.css";

export const Quote = ({quote, author}) => {
    return ( 
        <div className="QuoteContainer">
            <p>{quote}</p>
            <p>{author}</p>
        </div>        
     );
}
 