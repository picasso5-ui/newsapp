import { useState,useEffect } from "react";
import NewsItem from "../components/NewsItem"

const NewsList = () => {
    const [articles,setArticle]= useState([]);

    useEffect(()=> {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8d233ce53f7a461cb5f7494755c15a4c`
            fetch(url)
            .then(res=>res.json())
            .then(data=> setArticle(data.articles));
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
      

    },[])

    return ( 
        <>
          {articles.map((article,index)=>{
              return<NewsItem key={index}
               description ={article.description}
              title={article.title}
              src={article.urlToImage}
              url={article.url}
              
              />
             
          })}
        </>
     );
}
 
export default NewsList;