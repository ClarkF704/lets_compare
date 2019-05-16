import React from 'react';
import PostData from '../../Data/data.json';
import PostData2 from '../../Data/data2.json';
import { Spring } from  'react-spring/renderprops';
import bing from './img/bing.png';
import craig from './img/craig.png';


function Post() {
  return (
    <div>
      <div className="container">
      <div className="row">
      <div className="col-sm-4">
      {PostData.map((postDetail, index)=>{
          return <div>
            <Spring
            from={{ opacity:0}}
            to={{opacity: 1}}
            config={{ delay: 1000, duration:1000 }}
            >
            { props => (
            <div style={props}>
            {/* Insert below */}
            <div style={{textAlign:'center'}}>
              <img src={bing} style={{height:'30px', width:'auto', marginBottom:'30px'}}/>
            </div>
            <div style={{fontFamily:'Libre Baskerville', color:'white', backgroundColor:'black', paddingLeft:'15px', paddingTop:'15px', paddingBottom:'15px', paddinRight:'15px', borderRadius:'8%'}}>
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
            ) }
            </Spring>
           
            </div>     
        })}
      </div>
      <div className="col-sm-4">
      <strong>
        <p style={{textAlign:'center', fontFamily:'Roboto Mono', color:'white' }}>Be sure to type a specific item.</p>
        <p style={{textAlign:'center', fontFamily:'Roboto Mono', color:'black' }}>Data will NOT update if nothing is found.</p>
      </strong>
      
      </div>
      <div className="col-sm-4">
      {PostData2.map((postDetail2, index)=>{
          return <div>
            <Spring
            from={{ opacity:0}}
            to={{opacity: 1}}
            config={{ delay: 1000, duration:1000 }}
            >
            { props => (
            <div style={props}>
            {/* Insert below */}
            <div style={{textAlign:'center'}}>
              <img src={craig} style={{height:'30px', width:'auto', marginBottom:'30px'}}/>
            </div>
            <div style={{fontFamily:'Libre Baskerville', color:'white', backgroundColor:'black', paddingLeft:'15px', paddingTop:'15px', paddingBottom:'15px', paddinRight:'15px', borderRadius:'8%'}}>
             <p>{postDetail2.Item1}</p>
            <p>{postDetail2.Price1}</p>
            <p>{postDetail2.Item2}</p>
            <p>{postDetail2.Price2}</p>
            <p>{postDetail2.Item3}</p>
            <p>{postDetail2.Price3}</p>
            <p>{postDetail2.Item4}</p>
            <p>{postDetail2.Price4}</p>
            <p>{postDetail2.Item5}</p>
            <p>{postDetail2.Price5}</p>
            </div>
           

            </div>
            ) }
            </Spring>
            
            </div>     
        })}
      </div>
      </div>
      </div>
        
    </div>
  );
}

export default Post;







