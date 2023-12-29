import { useState, useEffect } from "react";

import Hero from "./components/Hero"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [category,setCategory] = useState("general")
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage,setCurrentPage] = useState(1)

   
    
  const handleSearch = (e) => {
   
   
  };
;

  const [articles, setArticle] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data based on category
    const fetchNewsByCategory = () => {
      setIsLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setArticle(data.articles);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error, "error occurred");
        setIsLoading(false);
      }
    };
  
    // Fetch data based on search term
    const fetchNewsBySearchTerm = () => {
      setIsLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchTerm}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setArticle(data.articles);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error, "error occurred");
        setIsLoading(false);
      }
    };
  
    // Call the appropriate fetch function based on changes
    if (searchTerm) {
      fetchNewsBySearchTerm();
    } else {
      fetchNewsByCategory();
    }
  }, [category, searchTerm]);
  
  return (
    <div className="App">
        <NavBar
         searchTerm={searchTerm}
         setSearchTerm={setSearchTerm}
         />
        <Hero 
        category={category}
         setCategory={setCategory}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         articles={articles}
         loading={loading}
         
         />
        <Footer />
    </div>
  )
}

export default App;
