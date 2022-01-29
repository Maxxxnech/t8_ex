import React, {PureComponent} from "react";
import Article from "./Article";

// Реализован "аккордеон" из статей
// Если открыть одну, закроется предыдущая открытая
export default class ArticleList extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            openArticleId: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
        
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data=> data.json())
        .then(articles => {
            this.setState(prevState => ({articles}))
        })
    }

    render(){
    const {articles, openArticleId} = this.state;
       return(
           <ul>
               {articles.map((article, i)=>(
                   <li key={article.id} className="article-list__li">
                       <Article handleClick={()=>this.handleClick(article.id)} 
                       article={article} 
                       id={article.id}
                       isOpen={article.id === openArticleId}/>
                   </li>
               ))}
           </ul>
       )
    }

    handleClick(id){
        console.log(id);
        // Режим открыть-закрыть
         this.setState(prevState=> ({
            openArticleId: prevState.openArticleId === id ? null : id
        }))
    }
}