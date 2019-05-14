import React from 'react';
import PostData from '../../Data/data.json';
import bing from './img/bing.png';


function Post() {
  return (
    <div>
        {PostData.map((postDetail, index)=>{
          return <div>
            <div className="container">
            <div className="row">
            <div className="col-sm-3">
            <img src={bing} style={{height:'30px', width:'auto', marginBottom:'30px'}}/>
            <p>{postDetail.Item1}</p>
            <p>{postDetail.Price1}</p>
            <p>{postDetail.Item2}</p>
            <p>{postDetail.Price2}</p>
            <p>{postDetail.Item3}</p>
            <p>{postDetail.Price3}</p>
            <p>{postDetail.Item4}</p>
            <p>{postDetail.Price4}</p>
            <p>{postDetail.Item5}</p>
            <p>{postDetail.Price5}</p>
            </div>
            
            </div>
            </div>
            
            </div>
                  
        })}
    </div>
  );
}

export default Post;
