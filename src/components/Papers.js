import React from 'react';
import { Link } from 'react-router-dom';
import graphppt_1 from './assets/Graph Algo Presentation 1.pdf'
import graphppt_2 from './assets/Graph Algo Presentation 2.pdf'

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
            {name:"Minimum diameter spanning trees and related problems",link:"https://www.researchgate.net/publication/220617691_Minimum_Diameter_Spanning_Trees_and_Related_Problems"},
            {name:"On the value of a random minimum spanning tree problem,” Discrete Applied Mathematics",link:"#"},
            {name:"On frieze’s (3) limit for lengths of minimal spanning trees",link:"#"},
            {name:"On random minimum length spanning trees,",link:"#"},
            {name:"Critical random graphs and the structure of a minimum spanning tree",link:"#"}
        ],
        "Computer Architecture":[
            {name:"In-Datacenter Performance Analysis of a Tensor Processing Unit",link:"https://arxiv.org/pdf/1704.04760.pdf"}
        ]
    }
    const bookCategories = Object.keys(books);
  return (
    <div className="container book-container justify-content-center">
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
                <li className="item-li">Directed Testing (will be uploaded later)</li>
                <li className="item-li"><Link to={graphppt_1} target='_blank'>Bounder Diameter Minimum Spanning Tree</Link></li>
                <li className="item-li"><Link to={graphppt_2} target='_blank'>Bounded Depth and Bounded Diameter Spanning Tree</Link></li>
            </ul>
        </div>
        <hr/>
        Some of the links may not work. You can contant me for those links. Happy Surfing.
        <hr/>

    </div>
  );
};

export default Papers;
