// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  function clouds() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#clouds", 52, {
      backgroundPosition: "-2247px bottom",
      force3D:true,
      rotation:0.01,
      z:0.01,
      //autoRound:false,
      ease: Linear.easeNone
    });
    
    return tl;
  }

  var masterTL = new TimelineMax({
    repeat: -1
  });
  
  // window load event makes sure image is 
// loaded before running animation
  window.onload = function() {
    console.log("Hello??")
    masterTL
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();

  };
  
});