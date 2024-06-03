// import React, { Component } from 'react'
// import { motion, spring } from 'framer-motion';
// export class NewsItem extends Component {
//     render() {
//         let {title,description,imgurl,newsurl}=this.props;
//         return (
//             <div className='my-4'>
//                 <motion.div className="card" style={{width: "18rem"}}  whileHover={{scale:1.2}} >
//                     <img src={!imgurl?"https://chorus.stimg.co/23945095/vike2.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces" :imgurl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
//                     </div>
//                 </motion.div>
//             </div>
//         )
//     }
// }

// export default NewsItem

import React, { Component } from 'react';
import { motion } from 'framer-motion';

export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsurl, darkMode } = this.props;
        return (
            <div className='my-4'>
                <motion.div className={`card ${darkMode ? 'dark-mode' : ''}`} style={{ width: "18rem" }} whileHover={{ scale: 1.05 }}>
                    <img src={!imgurl ? "https://chorus.stimg.co/23945095/vike2.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </motion.div>
            </div>
        );
    }
}

export default NewsItem;
