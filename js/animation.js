console.log("hello");

// Colors
var t2 = anime.timeline({
  easing: "easeOutExpo",
  duration: 18000,
  loop: true
});


t2.add({
  targets: ".blue",
opacity:[
  {value:0, duration:6000},
  {value:.5, duration:3000, delay: 4000},
  {value: 1, duration:2000, delay: 3000},
  {value:.8, duration:3000, delay: 4000},
  {value:0, duration:6000}
],
// translateX: [
//   { value: -40, duration: 6000, delay: 6000 },
//   { value: 0, duration: 7000, delay: 7000 }
// ],
// translateY: [
//   { value: -50, duration: 6000 },
//   { value: 50, duration: 6000, delay: 6000 },
//   { value: 0, duration: 6000, delay: 6000 }
// ],
// rotate: [
// {value: 0, duration:9000},
// {value: 90, duration:9000},
// ]

})

// t1.add({
//   targets: ".blue, .el",
//   duration: 6000,
//   keyframes: [
//     { opacity: 0 },
//     { opacity: 0.8 },
//     { opacity: 0.4 },
//     { opacity: 1 }
//   ]
// })
//   .add({
//     targets: ".red, .el",
//     duration: 6000,
//     keyframes: [
//       { opacity: 0 },
//       { opacity: 0.57 },
//       { opacity: 0.87 },
//       { opacity: 0.37 }
//     ]
//   })
//   .add({
//     targets: ".green, .el",
//     duration: 6000,
//     keyframes: [
//       { opacity: 0 },
//       { opacity: 0.37 },
//       { opacity: 0.87 },
//       { opacity: 0.27 },
//       { opacity: 0.67 },
//       { opacity: 0.27 }
//     ]
//   });


//    end colors

// begin Grain

// anime({
//   targets: ".grain",
//   keyframes: [
//     {
//       translateX: function() {
//         return anime.random(0, 7);
//       }
//     }
//   ],
//   duration: 600,
//   easing: "easeOutElastic(1, .8)",
//   loop: true
// });
// anime({
//   targets: ".grain2",
//   keyframes: [
//     {
//       translateX: function() {
//         return anime.random(0, -7);
//       }
//     }
//   ],
//   duration: 600,
//   delay: 600,
//   easing: "easeOutElastic(1, .8)",
//   loop: true
// });

//  end grain

// fisherman Ward

//orb Animation

var div = document.getElementById("orb");
div.onmouseover = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "#f5ad09";
  
    anime({
      targets: '.caracara',
      translateX: [ '0%','-2400%'],
      translateY: [ '0%','2400%'],
      loop: 2,
      duration: 3500,
      endDelay:1000, 
      easing:'easeInSine'


    })
};
div.onmouseout = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "#f75534";
};

const orb = document.getElementById("orb");
const box = document.getElementById("box");





// function animateOrb(backgroundColor, duration) {
//   anime.remove(box);
//   anime({
//     targets: box,
//     backgroundColor: box.style.backgroundColor,
//     duration: duration
//   });
// }

// function orbEnter() {
//   animateOrb("#f75534", 800);
// }
// function orbLeave() {
//   animateOrb("#325769", 800);
// }

// orb.addEventListener("mouseEnter", orbEnter, false);
// orb.addEventListener("mouseLeave", orbLeave, false);

//TD
var TDHover = document.getElementById("TD");
TDHover.onmouseover = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "rgb(139, 155, 212)";
};
TDHover.onmouseout = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "#f75534";
};

// TD Dashboard
var TDdbHover = document.getElementById("TDdb");
TDdbHover.onmouseover = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "rgb(139, 155, 212)";
};
TDdbHover.onmouseout = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "#f75534";
};
// Build Audience
var TDbaHover = document.getElementById("TDba");
TDbaHover.onmouseover = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "rgb(139, 155, 212)";
};
TDbaHover.onmouseout = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "#f75534";
};
// Check analytics
var TDcaHover = document.getElementById("TDca");
TDcaHover.onmouseover = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "rgb(139, 155, 212)";
};
TDcaHover.onmouseout = function() {
  var box = document.getElementById("box");
  box.style.backgroundColor = "#f75534";
};

// Get element by ID

const TD = document.getElementById("TD");
const TDdb = document.getElementById("TDdb");
const TDba = document.getElementById("TDba");
const TDca = document.getElementById("TDca");

// gradient
var t1 = anime.timeline({
  easing: "easeOutExpo",
  duration: 108000,
  loop: true
});

t1.add({
  targets: ".blue, .el",
  easing: "easeOutExpo",
  duration: 36000,
  keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }]
})
  .add({
    targets: ".red, .el",
    easing: "easeOutExpo",
    duration: 36000,

    keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }]
  })
  .add({
    targets: ".green, .el",
    easing: "easeOutExpo",
    duration: 36000,
    keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }]
  });
