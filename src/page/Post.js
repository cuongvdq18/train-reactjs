import React from "react";
import postData from "../element/postData";
import { Link } from "react-router-dom";

class Post extends React.Component{
    render(){
        const posts = postData.map(post => {
            return (
                <div key={post.id}>
                    <div className="col">
                        <div className="card h-100">
                        <Link to={`/post/${post.id}`}><img src={post.imgTitle} width={386} height={289} className="card-img-top" alt="..."/></Link>
                            <div className="card-body">
                            <h5 className="card-title"> <Link to={`/post/${post.id}`}>{post.title}</Link></h5>
                            <p className="card-text limit-2-text">{post.description}</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Đăng ngày: {post.timePost}</small>
                            </div>
                        </div>
                    </div> 
                </div>   
            );
          });
        return(
            <div className="page-wrapper">
                <div className="page-breadcrumb" style={{paddingTop:0}}>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 d-flex align-items-center">
                                <li className="breadcrumb-item"><Link to="/" className="link"><i className="mdi mdi-home-outline fs-4"></i></Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Post</li>
                                </ol>
                            </nav>
                            <h1 className="mb-0 fw-bold">Post</h1> 
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{paddingTop:0}}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">                
                    {posts}
                </div>
             </div>
          </div>
            )
        }
    };

export default Post;