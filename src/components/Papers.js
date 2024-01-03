import React from 'react';
import './styles/books.css';
import ScrollToTop from './scroll-top';
// import './styles/item.css'
const Papers = () => {
    const books = {
        "Network Function Virtualisation":[
            {name:"A survey on hardware accelerators: Taxonomy, trends, challenges, and perspectives",link:"#"},
            {name:"Autonomy and Intelligence in the Computing Continuum: Challenges, Enablers, and Future Directions for Orchestration",link:"#"},
            {name:"VNF-AAPC: Accelerator-aware VNF placement and chaining",link:"#"}
        ],
        "Directed Testing":[
            {name:"Automated Generation of Directed Tests for Transition Coverage in Cache Coherence Protocols",link:"#"},
            {name:"Directed Test Generation for Validation of Cache Coherence Protocols",link:"#"}
        ],
        "Dynamic Race Condition Detection": [
            {name: "A Tree Clock Data Structure for Casual Ordering in Concurrent Execution",link: "#"},
        ],
        "Geometry and Graph Algorithms":[
            {name:"The art of software testing",link:"#"}
        ]
    }
    const bookCategories = Object.keys(books);
  return (
    <div className="container book-container justify-content-center">
        <ScrollToTop/>
        <div className="container justify-content-center">
            <h1>Papers</h1>
            <p>I read papers every week around various topics that interests me. Currently
                I am focusing on <i>NFV</i> topics for my PhD project.
            </p>
        </div>

        <div className="container">
            {bookCategories.map((cat,index)=>(
                <div className="m-2">
                    <h3>{cat}</h3>
                    <ul className='item-ul'>
                        {books[cat].map((book,i)=>(
                            <li className='item-li'><a href={book.link}>{book.name}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <hr/>
        <div className="container flex justify-content-center">
            <p>Based on the papers I gave some presentations for various occasion. The <i>ppts</i> for those are listed belows:</p>
            <ul className="item-ul">
                <li className="item-li">Directed Testing</li>
                <li className="item-li">Bounder Diameter Minimum Spanning Tree</li>
                <li className="item-li">Bounded Depth and Bounded Diameter Spanning Tree</li>
            </ul>
        </div>

    </div>
  );
};

export default Papers;
