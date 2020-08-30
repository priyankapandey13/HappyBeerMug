TweenMax.set('svg', {
    visibility: 'visible'
  })
  
  var tl = new TimelineMax();
  tl.staggerTo('#bubblegroup circle', 3, {
    attr: {
      cy: 200
    }
    ,
    ease:Power2.easeIn,
    repeat: -1
  }, 0.6)
  

  // var tl = new TimelineMax();
  // tl.staggerTo('#bubblegroup circle', 1, {
    // attr: {
      // cy: 200
    // }
    // ,
    // cycle:{
    // backgroundColor:["red", "white", "#00f"],
  // },
    // ease:Power2.easeIn,
    // repeat: -1,
    // duration: -1,
  // }, 0.6)
  
 
var eyeslid = new TimelineMax(); 
eyeslid.staggerFromTo(".eyes", 1, 
{transformOrigin:`0% 30%`},                     
{
  y:-10,
  ease:Power2.easeIn,
    repeat: -1,
  yoyo: true, 
}, 0);



var laughingmouth = new TimelineMax();
var laughingtongue = new TimelineMax();

laughingmouth.staggerFromTo(".mouth1", 1, {transformOrigin:`0% 30%`},
{
  y:8,
  ease:Power3.easeIn,
  repeat: -1,
  yoyo: true, 
  yoyoEase: true,
}, 0);


laughingtongue.staggerFromTo(".tongue", 1, {transformOrigin:`0% 30%`},
{
  y:8,
  ease:Power2.easeIn,
  repeat: -1,
  yoyo: true, 
}, 0);




// eyeslid.staggerFromTo(".eyes", {
		// duration: 0.05,
		// y: 40,
		// repeat: -1,
		// yoyo: true
	// });