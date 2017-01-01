var CarouselCss = {
   carousel:{
   	 overflow:'hidden',
     position:'relative'
   },
   allitems:{
     transition:'transform 0s ease 0s'
   },
   item:{
   	 position:'absolute',
   	 marginRight:'10px'
   },
   alldots:{
   	 position:'absolute',
     left:'50%',
     transform:'translateX(-50%)',
     bottom:'5px'
   },
   dot:{
   	 borderRadius:'50%',
   	 float:'left',
   	 cursor:'pointer',
   	 transition:'all 0.2s ease 0s'
   },
   arrow:{
     position:'absolute',
     textAlign:'center',    
     backgroundColor:'#000',
     opacity:0.3,
     color:'#fff',
     top:'50%',
     transform:'translateY(-50%)',
     cursor:'pointer'
   },
   arrowleft:{
     left:0
   },
   arrowright:{   
     right:0
   }
};

module.exports = CarouselCss;