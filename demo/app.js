    var React = require('react');
    var ReactDOM = require('react-dom');
    var Carousel = require('../src/carousel/carousel');

    var App = React.createClass({
        render: function() {
          var divStyle={
             backgroundColor:'blue',
             textAlign:'center',
             lineHeight:'150px',
             color:'#fff',
             fontSize:'18px'
          };
          return (
            <div style={{margin:'50px'}}>
               <h2>轮播图片：</h2>
               <Carousel 
                  width={600}      //设置轮播器宽度 
                  height={250}     //设置轮播器高度
                  autoPlay={true}  //设置自动轮播
                  duration={0.5}   //设置图片切换的速度时间
                  interval={1.5}   //设置每张图片停留时间
                  dots={true}      //设置显示小圆点
                  arrows={true}    //设置显示前后箭头
                  mouseTouch={true}//设置支持鼠标拖动切换
                  handTouch={true} //设置支持移动端触屏滑动
               >
                  <img src='./src/carousel/image/1.jpg'/>
                  <img src='./src/carousel/image/2.jpg'/>
                  <img src='./src/carousel/image/3.jpg'/>
                  <img src='./src/carousel/image/4.jpg'/>
                  <img src='./src/carousel/image/5.jpg'/>
                  <img src='./src/carousel/image/6.jpg'/>
                  <img src='./src/carousel/image/7.jpg'/>
                  <img src='./src/carousel/image/8.jpg'/>
               </Carousel> 

               <h2 style={{marginTop:'50px'}}>轮播div：</h2>
               <Carousel 
                  width={300}      //设置轮播器宽度
                  height={150}     //设置轮播器高度
                  autoPlay={true}  //设置自动轮播
                  duration={0.5}   //设置div切换的速度时间
                  interval={1.5}   //设置每个div停留时间
                  dots={true}      //设置显示小圆点
                  arrows={true}    //设置显示前后箭头
                  mouseTouch={true}//设置支持鼠标拖动切换
                  handTouch={true} //设置支持移动端触屏滑动
                  dotStyle={{d:10,space:3,color:'#999',activeColor:'#333'}} //设置小圆点样式
                  arrowStyle={{bgWidth:20,bgHeight:40,fontSize:15}} //设置箭头样式
               >
                  <div style={divStyle}>1</div>
                  <div style={divStyle}>2</div>
                  <div style={divStyle}>3</div>
                  <div style={divStyle}>4</div>
                  <div style={divStyle}>5</div>
                  <div style={divStyle}>6</div>
               </Carousel> 
            </div>
          );
        }
    });
    
    ReactDOM.render(<App />, document.getElementById('AppContainer'));






