// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import { delay, motion } from 'framer-motion';

// export default class News extends Component {
    
//     constructor(){
//         super();
//         console.log("Hello i m a news constructor component");
//         this.state={
//             articles : [],
//             loading :false,
//             page:1
//         }
//     }

// async componentDidMount(){
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&pagesize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults});
// }
// handleNextClick=async ()=>{
//     console.log("Next");
//     if(!this.state.page+1>Math.ceil(this.state.totalResults/20)){

//     }
//     else{

//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({articles: parsedData.articles,
//             page:this.state.page+1
            
//         });
        
//     }
// }
// handlePrevClick= async()=>{
//     console.log("Previous");
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({articles: parsedData.articles,
//         page:this.state.page-1
        
//     });
// }
//     render() {
//         return (
//             <div className='container my-3'>
//                 <motion.h2 className='text-center my-5' initial={{x:'-100vw'}} animate={{x:0,y:30}} transition={{delay:0.5,type:'spring',stiffness:100}}>NewsDaily - Top Headlines </motion.h2>
//                 {this.state.loading&&<Spinner/>}
//                 <div className='row'>
//                     {this.state.articles.map((element)=>{
//                     return <div className='col-md-4' key={element.url}>
//                         <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} />
//                     </div>

//                     })}
                    
                    
                   
//                 </div>
//                 <div className='d-flex justify-content-between my-4'>
//                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//                 <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }



// import React, { useState, useEffect } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import { delay, motion } from 'framer-motion';

// const News = (props) => {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [page, setPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);

//     useEffect(() => {
//         const fetchNews = async () => {
//             setLoading(true);
//             let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&pagesize=${props.pageSize}`;
//             let data = await fetch(url);
//             let parsedData = await data.json();
//             setArticles(parsedData.articles);
//             setTotalResults(parsedData.totalResults);
//             setLoading(false);
//         };

//         fetchNews();
//     }, [props.Country, props.pageSize]);

//     const handleNextClick = async () => {
//         if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
//             let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&page=${page + 1}&pagesize=${props.pageSize}`;
//             let data = await fetch(url);
//             let parsedData = await data.json();
//             setArticles(parsedData.articles);
//             setPage(page + 1);
//         }
//     };

//     const handlePrevClick = async () => {
//         if (page > 1) {
//             let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&page=${page - 1}&pagesize=${props.pageSize}`;
//             let data = await fetch(url);
//             let parsedData = await data.json();
//             setArticles(parsedData.articles);
//             setPage(page - 1);
//         }
//     };

//     return (
//         <div className='container my-3'>
//             <motion.h2 className='text-center my-5' initial={{ x: '-100vw' }} animate={{ x: 0, y: 30 }} transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}>NewsDaily - Top Headlines</motion.h2>
//             {loading && <Spinner />}
//             <div className='row'>
//                 {articles.map((element) => {
//                     return (
//                         <div className='col-md-4' key={element.url}>
//                             <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} />
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className='d-flex justify-content-between my-4'>
//                 <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
//                 <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
//             </div>
//         </div>
//     );
// }

// export default News;



import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { motion } from 'framer-motion';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&pagesize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
        };

        fetchNews();
    }, [props.Country, props.pageSize]);

    const handleNextClick = async () => {
        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&page=${page + 1}&pagesize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setPage(page + 1);
        }
    };

    const handlePrevClick = async () => {
        if (page > 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=25649eee0ea24ad2976a7575ca61557e&page=${page - 1}&pagesize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setPage(page - 1);
        }
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className='container my-3'>
            <motion.h2 className='text-center my-5' initial={{ x: '-100vw' }} animate={{ x: 0, y: 30 }} transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}>NewsDaily - Top Headlines</motion.h2>
            <button className="btn btn-dark mb-3 hehe1" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
            </button>
            {loading && <Spinner />}
            <div className='row'>
                {articles?articles.map((element) => {
                    return (
                        <div className='col-md-4' key={element.url}>
                            <NewsItem 
                                title={element.title ? element.title.slice(0, 45) : ""} 
                                description={element.description ? element.description.slice(0, 88) : ""} 
                                imgurl={element.urlToImage} 
                                newsurl={element.url}
                                darkMode={darkMode}
                            />
                        </div>
                    );
                }):null}
            </div>
            <div className='d-flex justify-content-between my-4 hehe'>
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    );
}

export default News;
