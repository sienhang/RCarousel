var React = require('react');
var insertKeyframesRule = require('react-kit/insertKeyframesRule');
var CarouselCss = require('./carouselCss');
var _ ={};
_.extend = require('lodash/extend');

var Carousel = React.createClass({
   getDefaultProps:function(){
      return {
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
   },
   getInitialState:function(){
      return {nowindex:0,mouseMove:'',mouseUp:'',autoName:'',startX:0,moveX:0,duration:this.props.duration+'s',arrowShow:false};
   },
   componentDidMount:function(){
      if(this.props.autoPlay){
         this.setState({autoName:this.setInterval()});
      } 
   },
   shouldComponentUpdate:function(nextProps,nextState){
      var t = this;
      var itemLength = t.props.children.length;
      if(t.state.nowindex==0 && nextState.nowindex==-1){
         var func=function(){
            t.setState({nowindex:itemLength-1,duration:'0s'});
            t.refs.myitems.removeEventListener("transitionend",func); 
         };
         t.refs.myitems.addEventListener("transitionend",func);
      }else if(t.state.nowindex==itemLength-1 && nextState.nowindex==itemLength){
         var func=function(){
            t.setState({nowindex:0,duration:'0s'});
            t.refs.myitems.removeEventListener("transitionend",func); 
         };
         t.refs.myitems.addEventListener("transitionend",func);
      }else{
         t.setState({duration:this.props.duration+'s'});
      }
      return true;
   },
   dotOver:function(i){
      clearInterval(this.state.autoName);
      this.setState({nowindex:i});
   },
   dotOut:function(){
      if(this.props.autoPlay){
         this.setState({autoName:this.setInterval()});
      } 
   },
   itemOver:function(){
      clearInterval(this.state.autoName);
      this.setState({arrowShow:true});
   },
   itemOut:function(){
      if(this.props.autoPlay){
         this.setState({autoName:this.setInterval()});
      } 
      this.setState({arrowShow:false});
   },
   mouseDown:function(e){
      e.preventDefault();
      if(this.props.mouseTouch){
         this.setState({mouseMove:this.mouseMove,mouseUp:this.mouseUp,startX:e.pageX});         
      }
   },
   mouseMove:function(e){
      var x = e.pageX-this.state.startX;
      this.setState({moveX:x});
   },
   mouseUp:function(e){
      var x = e.pageX-this.state.startX;
      if(x>100 || x<-100){
      	 var nowindex=this.state.nowindex-x/(Math.abs(x)); 
     	   this.setState({nowindex:nowindex,mouseMove:'',mouseUp:'',moveX:0});
      }
      if(x>=-100 && x<=100){
         this.setState({nowindex:this.state.nowindex,mouseMove:'',mouseUp:'',moveX:0});
      }
   },
   touchStart:function(e){
      e.preventDefault();
      if(this.props.handTouch){
         clearInterval(this.state.autoName);
         this.setState({startX:e.touches[0].pageX});         
      }
   },
   touchMove:function(e){
      if(this.state.startX){
         var x = e.touches[0].pageX-this.state.startX;
         this.setState({moveX:x});          
      }
   },
   touchEnd:function(e){
      if(this.state.startX){
         if(this.props.autoPlay){
            this.setState({autoName:this.setInterval()});
         }       
         var x = this.state.moveX;
         if(x>80 || x<-80){
             var nowindex=this.state.nowindex-x/(Math.abs(x)); 
            this.setState({nowindex:nowindex,moveX:0});
         }
         if(x>=-80 && x<=80){
            this.setState({nowindex:this.state.nowindex,moveX:0});
         }         
      }
   },
   handleLeft:function(){
      this.setState({nowindex:this.state.nowindex-1});
   },
   handleRight:function(){
      this.setState({nowindex:this.state.nowindex+1});
   },
   setInterval:function(){
      var t=this;
      var interval = (t.props.interval)*1000;
      var autoCarousel = setInterval(function(){
         t.setState({nowindex:t.state.nowindex+1});        
      },interval);
      return autoCarousel;
   },
   setItems:function(){
      var t = this;    
      var items = [];
      var width = parseInt(t.props.width)+10;
      var itemLength = t.props.children.length;
      React.Children.map(t.props.children,function(child,index){
         var newchild=React.cloneElement(child,{style:_.extend({},child.props.style||{},{width:t.props.width,height:t.props.height})});    
         var imgTag1=<div style={_.extend({},CarouselCss.item,{left:index*width})}>{newchild}</div>;
         var imgTag2=<div style={_.extend({},CarouselCss.item,{left:itemLength*width})}>{newchild}</div>;
         var imgTag3=<div style={_.extend({},CarouselCss.item,{left:-width})}>{newchild}</div>;
         if(index===0){
            items.push(imgTag1,imgTag2);
         }else if(index===(itemLength-1)){
            items.push(imgTag1,imgTag3);
         }else{
            items.push(imgTag1);
         }
      });         
      return items;     
   },
   setDots:function(){
      if(this.props.dots){
         var dots = [];
         var itemLength = this.props.children.length;
         var nowindex = this.state.nowindex==-1?itemLength-1:this.state.nowindex==itemLength?0:this.state.nowindex;
         var dstyle = this.props.dotStyle;
         for(var i=0;i<itemLength;i++){
             var width = dstyle.d?dstyle.d:12;
             var height = width;
             var margin = dstyle.space?dstyle.space:4;
             var color = dstyle.color?dstyle.color:'#fff';
             var activeColor = dstyle.activeColor?dstyle.activeColor:'#666';
             var bgcolor = nowindex===i ? activeColor:color;
             var dotStyle={width:width,height:height,margin:margin+'px',backgroundColor:bgcolor};
             dots.push(
                <div style={_.extend({},CarouselCss.dot,dotStyle)} onMouseOver={this.dotOver.bind(this,i)} onMouseOut={this.dotOut}></div>
             );
         }
         return dots;          
      }
   },
   setArrows:function(){
      if(this.props.arrows){
         var arrows = [];
         var width = this.props.arrowStyle.bgWidth?this.props.arrowStyle.bgWidth:30;
         var height = this.props.arrowStyle.bgHeight?this.props.arrowStyle.bgHeight:65;
         var lineHeight = (height+2)+'px';
         var fontSize = this.props.arrowStyle.fontSize?this.props.arrowStyle.fontSize:20;
         var arrowStyle = _.extend({},CarouselCss.arrow,{width:width,height:height,lineHeight:lineHeight,fontSize:fontSize+'px'});
         arrows.push(<div style={_.extend({},arrowStyle,CarouselCss.arrowleft)} onClick={this.handleLeft}>&lt;</div>);
         arrows.push(<div style={_.extend({},arrowStyle,CarouselCss.arrowright)} onClick={this.handleRight}>&gt;</div>);
         return arrows;         
      }
   },
   setAnimate:function(){
     var width = parseInt(this.props.width)+10;
     var position = 'translateX('+((-width)*this.state.nowindex+(this.state.moveX))+'px)';
     var animateStyle={transform:position,transitionDuration:this.state.duration}      
     return animateStyle;
   },
   render:function(){
        var display = this.state.arrowShow?'block':'none';
   	  return (
   	  	 <div style={_.extend({},CarouselCss.carousel,{width:this.props.width,height:this.props.height})}>
   	  	    <div ref="myitems" style={_.extend({},CarouselCss.allitems,this.setAnimate())} onMouseOver={this.itemOver} onMouseOut={this.itemOut} onMouseDown={this.mouseDown} onMouseMove={this.state.mouseMove} onMouseUp={this.state.mouseUp} onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd}>
	   	  	    {this.setItems()}   	  	    
   	  	    </div>
   	  	    <div style={CarouselCss.alldots}>{this.setDots()}</div>
             <div style={{display:display}} onMouseOver={this.itemOver} onMouseOut={this.itemOut}>{this.setArrows()}</div>
   	  	 </div>
   	  );	  
   }
});

module.exports = Carousel;
