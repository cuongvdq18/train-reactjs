import React from "react"
import {useParams} from "react-router-dom"
import postData from "../element/postData"
import { Link } from "react-router-dom";


function PostDetail() {
    const posts = postData.map(post => {
        return (
            <div key={post.id}>
                <Link to={`/post/${post.id}`}>
                <div className="card mb-3" style={{maxWidth: "100%"}}>
                    <div className="row">
                        <div className="col-sm-4" style={{paddingRight:0}}>
                            <img src={post.imgTitle} width={"100%"} height={"100%"} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-sm-8">
                
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text"><small className="text-muted">Đăng ngày {post.timePost}</small></p>
                        </div>
                
                    </div>
                    </div>
                </Link>
            </div>   
        );
      });

    const {postID} = useParams()
    const thisPost = postData.find(prod => prod.id === postID)
    
    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb" style={{paddingTop:0}}>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 d-flex align-items-center">
                                <li className="breadcrumb-item"><Link to="/" className="link"><i className="mdi mdi-home-outline fs-4"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/post" className="link">Post</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Post Detail</li>
                                </ol>
                            </nav>
                            <div className="row">
                            <h1 className="mb-0 fw-bold ">{thisPost.title}</h1> 
                                <div className="col-8">
                                <small  className="text-muted" >Đăng ngày: {thisPost.timePost}</small>
                                <div style={{width:"100%",marginTop:"2%"}}>
                                <img className="card-img"  src={thisPost.imgDescp}/>
                                </div>
                                <h4 style={{marginTop:30}}>{thisPost.description}</h4>
                                <p className="card-text">{thisPost.content}</p>
                                </div>
                                <div className="col-4" style={{marginTop:"3%"}}>
                                <h2 className="mb-0 fw-bold ">Post Recent</h2> 
                                <div className="row row-cols-1">                
                                    {posts}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default PostDetail