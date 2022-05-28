import React from "react";
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Post from './Post';
import PostDetail from "./PostDetail";

export default function RouterPage(){
        return(
            <div>
               <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/post" element={<Post />}/>
                    <Route path="/post/:postID" element= {<PostDetail />} />
                </Routes> 
            </div>
            )
        }


