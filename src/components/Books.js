import React from 'react';
// import './styles/item.css'
const Books = () => {
    const books = {
        "Rust":[
            {name:"Rust Programming Language",link:"https://www.google.com/search?q=rust+programming+language+book+pdf&sca_esv=594941850&rlz=1C5CHFA_enIN1068IN1068&sxsrf=AM9HkKkc2RkkXF4BjLHem7gNYHH5Z00NBA%3A1704136204559&ei=DA6TZYXbIYmXseMP9ZWxuAo&ved=0ahUKEwiFkfyI8ryDAxWJS2wGHfVKDKcQ4dUDCBA&uact=5&oq=rust+programming+language+book+pdf&gs_lp=Egxnd3Mtd2l6LXNlcnAiInJ1c3QgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgYm9vayBwZGYyChAjGIAEGIoFGCcyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDSNEHUPIBWIYHcAF4AZABAJgBiAGgAeQCqgEDMS4yuAEDyAEA-AEBwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhiABBiKBRhDGMgDGLAD2AECwgIFEAAYgATCAgYQABgWGB7iAwQYACBBiAYBkAYQugYGCAEQARgJugYGCAIQARgI&sclient=gws-wiz-serp"}
        ],
        "System Design": [
            {name: "Designing Data Intensive Applications",link: "https://www.amazon.in/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/9352135245"},
        ],
        "Distributed Computing":[
            {name:"Distributed Algorithms by Lancy Lynch",link:"#"}
        ],
        "Software Testing":[
            {name:"The art of software testing",link:"#"}
        ],
        "Information Retrieval":[
            {name: "Introduction to Information Retrieval",link: "https://www.amazon.in/Introduction-Information-Retrieval-Manning-Christopher/dp/1107666392?crid=1OYBPFM4M3BTG&keywords=Manning+IR&qid=1668967939&qu=eyJxc2MiOiIxLjY3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=manning+ir,stripbooks,210&sr=1-4&linkCode=sl1&tag=arpitbhayani-21"}
        ],
        "Formal Verification":[
            {name: "Principals of Model Checking",link: "#"},
            {name:"Spin Model Checking Primer",link:"#"},
        ],
        "Django":[
            {name:"Django for Beginners",link:"#"},
            {name: "Django for Professional",link: "#"}
        ],
        "Others": [
            {name: "Steve Jobs by Walter Isaacson",link: "https://www.amazon.in/STEVE-JOBS-EXCLUSIVE-BIOGRAPHY-Paperback/dp/034914043X",}
        ]
    }
    const bookCategories = Object.keys(books);
  return (
    <div className="container book-container justify-content-center">
        <div className="container justify-content-center">
            <h1>Books</h1>
            <p>I read books every month around various topics that interests me.</p>
            <hr/>
            <p>I am currently learning Rust. Any suggestion please do tell me. Thanks</p>
        </div>

        <div className="container d-flex flex-wrap">
            {bookCategories.map((cat,index)=>(
                <div className="book-item-container m-2">
                    <h3>{cat}</h3>
                    <ul className='item-ul'>
                        {books[cat].map((book,i)=>(
                            <li className='item-li'><a href={book.link}>{book.name}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Books;
