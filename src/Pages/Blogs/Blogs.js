import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mt-5 pt-lg-5'>
            <h1 className='text-center text-success mb-4'>BLOGS</h1>
            <div className='container'>
                <div className='border border-success p-3 rounded bg mb-3'>
                    <h3>Difference between <span className='text-success'>JavaScript</span> and <span className='text-success'>Nodejs</span></h3>
                    <i className='text-success'>JavaScript is a simple programming language which runs in any browser using JavaScript Engine. And Node JS is an interpreter JavaScript programming language. JavaScript is mainly used for client side stuff in an web site or page and Nodejs is basically used for server side stuff, it is used the establish the relation between an external database and the client side</i>
                </div>
                <div className='border border-success p-3 rounded bg mb-3'>
                    <h3>When should you use <span className='text-success'>Nodejs</span> and when should you use <span className='text-success'>Mongodb</span>?</h3>
                    <i className='text-success'>Node.js is a server-side JavaScript run-time environment. It is used for traditional web sites and back-end API services. Using it we are able to stablish the bridge between an external database and the client side. On the other hand, Mongodb is a NoSQL database. We use it to store a large amount data and it enables us to store the data online and so the clients can access data from any device</i>
                </div>
                <div className='border border-success p-3 rounded bg mb-3'>
                    <h3>Differences between <span className='text-success'>SQL</span> and <span className='text-success'>NoSQL</span> databases</h3>
                    <i className='text-success'>SQL databases store the data in a table, they use structured query language, these data bases are relational and vertically scalable, these databases are better por multi row transactions. On the other hand, NoSQL databases store the data in kew-value, graphs etc forms, they use dynamic schemas for unorganized data, they are horizontally scalable and these are better fr storing unorganized data</i>
                </div>
                <div className='border border-success p-3 rounded bg mb-3'>
                    <h3>What is the purpose of <span className='text-success'>JWT</span> and how does it work?</h3>
                    <i className='text-success'>JWT is used for securely transmit information between client side and the server, so that if someone who do not has access to the information, tries to access the it, he will not get access. When an user logs in, a token is given which is stored in the local storage or cookies. And then when the user sends a request to the backend JWT verifies is, if the token is valid then the request is granted and if not, then the request is denied</i>
                </div>

            </div>
        </div>
    );
};

export default Blogs;