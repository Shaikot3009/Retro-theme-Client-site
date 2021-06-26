import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import ManageBlogData from '../ManageBlogData/ManageBlogData';
import { useParams } from 'react-router-dom';
const ManageBlog = () => {
    const { id } = useParams();
    const [manage, setManage] = useState([])


    useEffect(() => {
        const url = `https://rocky-inlet-75686.herokuapp.com/addBlogs`;
        fetch(url)
        .then(res => res.json())
        .then(data => setManage(data));
    },[id])

    return (
        <div className="back">
            <Navbar></Navbar>
            <div  className="container">
            {
                manage.length === 0 && <div className="text-white">...Loading</div>
            }
            <h2 style={{color: 'white'}}>Manage Blogs</h2>
            <div style={{marginLeft:'15%',marginRight:'15%'}} className="row d-flex align-items-center p-5" >
           
           
            {
                manage.map(manage => <ManageBlogData manage={manage}></ManageBlogData>)
            }

            </div>
        </div>

        </div>
    );
};

export default ManageBlog;