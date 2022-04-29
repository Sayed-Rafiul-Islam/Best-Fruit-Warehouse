import React from 'react';
import { Link, useResolvedPath } from 'react-router-dom';



function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);

    return (
        <div>
            <Link
                style={{ color: "white", padding: '2.5px 20px', textDecoration: 'none', fontSize: "15px" }}
                to={to}
                {...props}
            >
                {children}
            </Link>


        </div >
    );
}

export default CustomLink;