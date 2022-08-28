import QuoteCSS from "./Quote.module.css";

export const Quote = ({quote, author}) => {
    return ( 
        <div className={QuoteCSS.QuoteContainer}>
            <blockquote>
                <p className={QuoteCSS.quote}>{quote}</p>
                <p className={QuoteCSS.author}>{author}</p>
            </blockquote>
        </div>        
     );
}
 