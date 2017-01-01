# Carousel轮播器组件

## 一、运行Demo

1. npm install
2. gulp watch

有些时候国内npm源访问比较慢，那么推荐使用cnpm。

1. npm install cnpm -g
2. cnpm install
3. gulp watch

## 二、用法Usage

#####   详细实例见demo 

1. 最常用的轮播图片：

        var React = require('react');
        var ReactDOM = require('react-dom');
        var Carousel = require('../src/carousel/carousel');
        var App = React.createClass({ 
          render: function() {
            return (
              <div style={{margin:'50px'}}>
                 <h2>轮播图片：</h2>
                 <Carousel 
                    width={600}       //设置轮播器宽度
                    height={250}      //设置轮播器高度
                    autoPlay={true}   //设置自动轮播 
                    duration={0.5}    //设置图片切换的速度时间
                    interval={1.5}    //设置每张图片停留时间
                    dots={true}       //设置显示小圆点
                    arrows={true}     //设置显示前后箭头
                    mouseTouch={true} //设置支持鼠标拖动切换
                    handTouch={true}  //设置支持移动端触屏滑动
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
              </div>
            );
          }
        });
        ReactDOM.render(<App />, document.getElementById('AppContainer'));

2. 除轮播图片外还可轮播div，div内可根据需求放任意元素：

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
                 <h2>轮播div：</h2>
                 <Carousel 
                    width={300}       //设置轮播器宽度
                    height={150}      //设置轮播器高度
                    autoPlay={true}   //设置自动轮播
                    duration={0.5}    //设置div切换的速度时间
                    interval={1.5}    //设置每个div停留时间
                    dots={true}       //设置显示小圆点
                    arrows={true}     //设置显示前后箭头
                    mouseTouch={true} //设置支持鼠标拖动切换
                    handTouch={true}  //设置支持移动端触屏滑动
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

## 三、API

1. Carousel参数解析

   * width:               配置轮播器的宽度，是一个数值，默认单位为’px‘；

   * height:              配置轮播器的高度，是一个数值，默认单位为’px‘；

   * autoPlay:          配置是否需要自动轮播，是一个布尔值，true表示自动轮播，false表示禁止自动轮播；

   * duration:          配置图片或div切换时的速度时间，是一个数值，默认单位为’s‘；

   * interval:            配置自动轮播时，一张图片或div停留的时间，是一个数值，默认单位为’s‘；

   * dots:                  配置是否需要小圆点，是一个布尔值，true表示需要小圆点，false表示不需要小圆点；             

   * arrows:              配置是否需要前后箭头，是一个布尔值，true表示需要箭头，false表示不需要箭头；

   * mouseTouch:   配置是否支持鼠标拖动切换，是一个布尔值，true表示支持，false表示不支持； 

   * handTouch:      配置是否支持移动端触屏滑动切换，是一个布尔值，true表示支持，false表示不支持；

   * dotStyle:            配置小圆点样式，包括：                                                                                                                        

     ​                                d:   配置小圆点的直径，是一个数值，默认单位为’px‘；

     ​                                space:   配置小圆点之间的间隔，是一个数值，默认单位为’px‘；

     ​                                color:   配置小圆点的显示颜色，是一个颜色值字符串，如’#fff‘；

     ​                                activecolor:   配置小圆点的触发颜色，是一个颜色值字符串，如'#666'；

   * arrowStyle:        配置前后箭头样式，包括：

     ​                                bgWidth:   配置前后箭头背景的宽度，是一个数值，默认单位为’px‘；

     ​                                bgHeight:  配置前后箭头背景的高度，是一个数值，默认单位为’px‘；

     ​                                fontSize:    配置前后箭头的大小，是一个数值，默认单位为’px‘。


2. Carousel默认参数配置

​       以下为轮播器组件的默认配置，在使用中可根据需要更改配置：

     { 
        width:600,
        height:300,
        autoPlay:true,
        duration:0.5,
        interval:1.5,
        dots:true,
        arrows:true,
        mouseTouch:true,
        handTouch:true,
        dotStyle:{d:12,space:4,color:'#fff',activeColor:'#666'},
        arrowStyle:{bgWidth:30,bgHeight:65,fontSize:20}        
     };














