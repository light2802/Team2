console.clear();
var body = document.body;

var modal1 = createModal1(document.querySelector("#modal-1"));
var openButton1 = document.querySelector("#open-button-1");

openButton1.addEventListener("click", function() {
  modal1.open();
});

function createModal1(container) {
  
  var content1 = container.querySelector("#content-1");
  var dialog = container.querySelector(".modal-dialog");
  var polygon = container.querySelector(".modal-polygon");
  var svg1 = container.querySelector("#svg-1");
  
  var point1 = createPoint(45, 45);
  var point2 = createPoint(55, 45);
  var point3 = createPoint(55, 55);
  var point4 = createPoint(45, 55);
      
  var animation = new TimelineMax({    
      onReverseComplete: onReverseComplete,
      onStart: onStart,
      paused: true
    })     
    .to(point1, 0.3, {
      x: 15,
      y: 30,
      ease: Power4.easeIn
    }, 0)
    .to(point4, 0.3, {
      x: 5,
      y: 80,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(point2, 0.3, {
      x: 100,
      y: 0,
      ease: Power2.easeIn
    }, "-=0.2")
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(point4, 0.3, {
      x: 0,
      y: 100,
      ease: Power2.easeIn
    }, "-=0.1")  
    .to(container, 1, {
      autoAlpha: 1
    }, 0)  
    .to(content1, 1, {
      autoAlpha: 1
    })
  
  var modal1 = {
    animation: animation,
    container: container,
    content1: content1,
    dialog: dialog,    
    isOpen: false,
    open: open,
    close: close   
  };
  
  // body.removeChild(container);
    
  function onClick() {
    
    if (modal1.isOpen) {
      close();
    }
  }
  
  function onStart() {
    body.appendChild(container);
    container.addEventListener("click", onClick);
  }
  
  function onReverseComplete() {
    container.removeEventListener("click", onClick);
    body.removeChild(container);
  }
  
  function open() {
    modal1.isOpen = true;
    animation.play().timeScale(2);
  }
  
  function close() {
    modal1.isOpen = false;
    animation.reverse().timeScale(2.5);
  }
    
  function createPoint(x, y) {
    var point = polygon.points.appendItem(svg1.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }
  
  return modal1;
}



var modal2 = createModal2(document.querySelector("#modal-2"));
var openButton2 = document.querySelector("#open-button-2");

openButton2.addEventListener("click", function() {
  modal2.open();
});

function createModal2(container) {
  
  var content2 = container.querySelector("#content-2");
  var dialog = container.querySelector(".modal-dialog");
  var polygon2 = container.querySelector("#polygon-2");
  var svg2 = container.querySelector("#svg-2");
  
  var point1 = createPoint(45, 45);
  var point2 = createPoint(55, 45);
  var point3 = createPoint(55, 55);
  var point4 = createPoint(45, 55);
      
  var animation = new TimelineMax({    
      onReverseComplete: onReverseComplete,
      onStart: onStart,
      paused: true
    })     
    .to(point1, 0.3, {
      x: 15,
      y: 30,
      ease: Power4.easeIn
    }, 0)
    .to(point4, 0.3, {
      x: 5,
      y: 80,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(point2, 0.3, {
      x: 100,
      y: 0,
      ease: Power2.easeIn
    }, "-=0.2")
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(point4, 0.3, {
      x: 0,
      y: 100,
      ease: Power2.easeIn
    }, "-=0.1")  
    .to(container, 1, {
      autoAlpha: 1
    }, 0)  
    .to(content2, 1, {
      autoAlpha: 1
    })
  
  var modal2 = {
    animation: animation,
    container: container,
    content2: content2,
    dialog: dialog,    
    isOpen: false,
    open: open,
    close: close   
  };
  
  // body.removeChild(container);
    
  function onClick() {
    
    if (modal2.isOpen) {
      close();
    }
  }
  
  function onStart() {
    body.appendChild(container);
    container.addEventListener("click", onClick);
  }
  
  function onReverseComplete() {
    container.removeEventListener("click", onClick);
    body.removeChild(container);
  }
  
  function open() {
    modal2.isOpen = true;
    animation.play().timeScale(2);
  }
  
  function close() {
    modal2.isOpen = false;
    animation.reverse().timeScale(2.5);
  }
    
  function createPoint(x, y) {
    var point = polygon2.points.appendItem(svg2.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }
  
  return modal2;
}



var modal3 = createModal3(document.querySelector("#modal-3"));
var openButton3 = document.querySelector("#open-button-3");

openButton3.addEventListener("click", function() {
  modal3.open();
});

function createModal3(container) {
  
  var content3 = container.querySelector("#content-3");
  var dialog = container.querySelector(".modal-dialog");
  var polygon3 = container.querySelector("#polygon-3");
  var svg3 = container.querySelector("#svg-3");
  
  var point1 = createPoint(45, 45);
  var point2 = createPoint(55, 45);
  var point3 = createPoint(55, 55);
  var point4 = createPoint(45, 55);
      
  var animation = new TimelineMax({    
      onReverseComplete: onReverseComplete,
      onStart: onStart,
      paused: true
    })     
    .to(point1, 0.3, {
      x: 15,
      y: 30,
      ease: Power4.easeIn
    }, 0)
    .to(point4, 0.3, {
      x: 5,
      y: 80,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(point2, 0.3, {
      x: 100,
      y: 0,
      ease: Power2.easeIn
    }, "-=0.2")
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(point4, 0.3, {
      x: 0,
      y: 100,
      ease: Power2.easeIn
    }, "-=0.1")  
    .to(container, 1, {
      autoAlpha: 1
    }, 0)  
    .to(content3, 1, {
      autoAlpha: 1
    })
  
  var modal3 = {
    animation: animation,
    container: container,
    content3: content3,
    dialog: dialog,    
    isOpen: false,
    open: open,
    close: close   
  };
  
  // body.removeChild(container);
    
  function onClick() {
    
    if (modal3.isOpen) {
      close();
    }
  }
  
  function onStart() {
    body.appendChild(container);
    container.addEventListener("click", onClick);
  }
  
  function onReverseComplete() {
    container.removeEventListener("click", onClick);
    body.removeChild(container);
  }
  
  function open() {
    modal3.isOpen = true;
    animation.play().timeScale(2);
  }
  
  function close() {
    modal3.isOpen = false;
    animation.reverse().timeScale(2.5);
  }
    
  function createPoint(x, y) {
    var point = polygon3.points.appendItem(svg3.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }
  
  return modal3;
}



var modal4 = createModal4(document.querySelector("#modal-4"));
var openButton4 = document.querySelector("#open-button-4");

openButton4.addEventListener("click", function() {
  modal4.open();
});

function createModal4(container) {
  
  var content4 = container.querySelector("#content-4");
  var dialog = container.querySelector(".modal-dialog");
  var polygon4 = container.querySelector("#polygon-4");
  var svg4 = container.querySelector("#svg-4");
  
  var point1 = createPoint(45, 45);
  var point2 = createPoint(55, 45);
  var point3 = createPoint(55, 55);
  var point4 = createPoint(45, 55);
      
  var animation = new TimelineMax({    
      onReverseComplete: onReverseComplete,
      onStart: onStart,
      paused: true
    })     
    .to(point1, 0.3, {
      x: 15,
      y: 30,
      ease: Power4.easeIn
    }, 0)
    .to(point4, 0.3, {
      x: 5,
      y: 80,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(point2, 0.3, {
      x: 100,
      y: 0,
      ease: Power2.easeIn
    }, "-=0.2")
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(point4, 0.3, {
      x: 0,
      y: 100,
      ease: Power2.easeIn
    }, "-=0.1")  
    .to(container, 1, {
      autoAlpha: 1
    }, 0)  
    .to(content4, 1, {
      autoAlpha: 1
    })
  
  var modal4 = {
    animation: animation,
    container: container,
    content4: content4,
    dialog: dialog,    
    isOpen: false,
    open: open,
    close: close   
  };
  
  // body.removeChild(container);
    
  function onClick() {
    
    if (modal4.isOpen) {
      close();
    }
  }
  
  function onStart() {
    body.appendChild(container);
    container.addEventListener("click", onClick);
  }
  
  function onReverseComplete() {
    container.removeEventListener("click", onClick);
    body.removeChild(container);
  }
  
  function open() {
    modal4.isOpen = true;
    animation.play().timeScale(2);
  }
  
  function close() {
    modal4.isOpen = false;
    animation.reverse().timeScale(2.5);
  }
    
  function createPoint(x, y) {
    var point = polygon4.points.appendItem(svg4.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }
  
  return modal4;
}



// var modal2 = createModal2(document.querySelector("#modal-2"));
// var openButton2 = document.querySelector("#open-button-2");

// openButton2.addEventListener("click", function() {
//   modal2.open();
// });

// function createModal2(container) {
  
//   var content2 = container.querySelector("#content-2");
//   var dialog = container.querySelector(".modal-dialog");
//   var polygon2 = container.querySelector("#polygon-2");
//   var svg2 = container.querySelector("#svg-2");
  
//   var point1 = createPoint(60, 60);
//   var point2 = createPoint(70, 70);
//   var point3 = createPoint(70, 70);
//   var point4 = createPoint(60, 70);
      
//   var animation = new TimelineMax({    
//       onReverseComplete: onReverseComplete,
//       onStart: onStart,
//       paused: true
//     })     
//     .to(point1, 0.3, {
//       x: 15,
//       y: 30,
//       ease: Power4.easeIn
//     }, 0)
//     .to(point4, 0.3, {
//       x: 5,
//       y: 80,
//       ease: Power2.easeIn
//     }, "-=0.1")
//     .to(point1, 0.3, {
//       x: 0,
//       y: 0,
//       ease: Power3.easeIn
//     })
//     .to(point2, 0.3, {
//       x: 100,
//       y: 0,
//       ease: Power2.easeIn
//     }, "-=0.2")
//     .to(point3, 0.3, {
//       x: 100,
//       y: 100,
//       ease: Power2.easeIn
//     })
//     .to(point4, 0.3, {
//       x: 0,
//       y: 100,
//       ease: Power2.easeIn
//     }, "-=0.1")  
//     .to(container, 1, {
//       autoAlpha: 1
//     }, 0)  
//     .to(content2, 1, {
//       autoAlpha: 1
//     })
  
//   var modal2 = {
//     animation: animation,
//     container: container,
//     content2: content2,
//     dialog: dialog,    
//     isOpen: false,
//     open: open,
//     close: close   
//   };
  
//   // body.removeChild(container);
    
//   function onClick() {
    
//     if (modal2.isOpen) {
//       close();
//     }
//   }
  
//   function onStart() {
//     body.appendChild(container);
//     container.addEventListener("click", onClick);
//   }
  
//   function onReverseComplete() {
//     container.removeEventListener("click", onClick);
//     body.removeChild(container);
//   }
  
//   function open() {
//     modal2.isOpen = true;
//     animation.play().timeScale(2);
//   }
  
//   function close() {
//     modal2.isOpen = false;
//     animation.reverse().timeScale(2.5);
//   }
    
//   function createPoint(x, y) {
//     var point = polygon2.points.appendItem(svg2.createSVGPoint());
//     point.x = x || 0;
//     point.y = y || 0;
//     return point;
//   }
  
//   return modal2;
// }



// var modal2 = createModal2(document.querySelector("#modal-2"));
// var openButton2 = document.querySelector("#open-button-2");

// openButton2.addEventListener("click", function() {
//   modal2.open();
// });

// function createModal2(container) {
  
//   var content2 = container.querySelector("#content-2");
//   var dialog = container.querySelector(".modal-dialog");
//   var polygon2 = container.querySelector("#polygon-2");
//   var svg2 = container.querySelector("#svg-2");
  
//   var point1 = createPoint(60, 60);
//   var point2 = createPoint(70, 70);
//   var point3 = createPoint(70, 70);
//   var point4 = createPoint(60, 70);
      
//   var animation = new TimelineMax({    
//       onReverseComplete: onReverseComplete,
//       onStart: onStart,
//       paused: true
//     })     
//     .to(point1, 0.3, {
//       x: 15,
//       y: 30,
//       ease: Power4.easeIn
//     }, 0)
//     .to(point4, 0.3, {
//       x: 5,
//       y: 80,
//       ease: Power2.easeIn
//     }, "-=0.1")
//     .to(point1, 0.3, {
//       x: 0,
//       y: 0,
//       ease: Power3.easeIn
//     })
//     .to(point2, 0.3, {
//       x: 100,
//       y: 0,
//       ease: Power2.easeIn
//     }, "-=0.2")
//     .to(point3, 0.3, {
//       x: 100,
//       y: 100,
//       ease: Power2.easeIn
//     })
//     .to(point4, 0.3, {
//       x: 0,
//       y: 100,
//       ease: Power2.easeIn
//     }, "-=0.1")  
//     .to(container, 1, {
//       autoAlpha: 1
//     }, 0)  
//     .to(content2, 1, {
//       autoAlpha: 1
//     })
  
//   var modal2 = {
//     animation: animation,
//     container: container,
//     content2: content2,
//     dialog: dialog,    
//     isOpen: false,
//     open: open,
//     close: close   
//   };
  
//   // body.removeChild(container);
    
//   function onClick() {
    
//     if (modal2.isOpen) {
//       close();
//     }
//   }
  
//   function onStart() {
//     body.appendChild(container);
//     container.addEventListener("click", onClick);
//   }
  
//   function onReverseComplete() {
//     container.removeEventListener("click", onClick);
//     body.removeChild(container);
//   }
  
//   function open() {
//     modal2.isOpen = true;
//     animation.play().timeScale(2);
//   }
  
//   function close() {
//     modal2.isOpen = false;
//     animation.reverse().timeScale(2.5);
//   }
    
//   function createPoint(x, y) {
//     var point = polygon2.points.appendItem(svg2.createSVGPoint());
//     point.x = x || 0;
//     point.y = y || 0;
//     return point;
//   }
  
//   return modal2;
// }



// var modal2 = createModal2(document.querySelector("#modal-2"));
// var openButton2 = document.querySelector("#open-button-2");

// openButton2.addEventListener("click", function() {
//   modal2.open();
// });

// function createModal2(container) {
  
//   var content2 = container.querySelector("#content-2");
//   var dialog = container.querySelector(".modal-dialog");
//   var polygon2 = container.querySelector("#polygon-2");
//   var svg2 = container.querySelector("#svg-2");
  
//   var point1 = createPoint(60, 60);
//   var point2 = createPoint(70, 70);
//   var point3 = createPoint(70, 70);
//   var point4 = createPoint(60, 70);
      
//   var animation = new TimelineMax({    
//       onReverseComplete: onReverseComplete,
//       onStart: onStart,
//       paused: true
//     })     
//     .to(point1, 0.3, {
//       x: 15,
//       y: 30,
//       ease: Power4.easeIn
//     }, 0)
//     .to(point4, 0.3, {
//       x: 5,
//       y: 80,
//       ease: Power2.easeIn
//     }, "-=0.1")
//     .to(point1, 0.3, {
//       x: 0,
//       y: 0,
//       ease: Power3.easeIn
//     })
//     .to(point2, 0.3, {
//       x: 100,
//       y: 0,
//       ease: Power2.easeIn
//     }, "-=0.2")
//     .to(point3, 0.3, {
//       x: 100,
//       y: 100,
//       ease: Power2.easeIn
//     })
//     .to(point4, 0.3, {
//       x: 0,
//       y: 100,
//       ease: Power2.easeIn
//     }, "-=0.1")  
//     .to(container, 1, {
//       autoAlpha: 1
//     }, 0)  
//     .to(content2, 1, {
//       autoAlpha: 1
//     })
  
//   var modal2 = {
//     animation: animation,
//     container: container,
//     content2: content2,
//     dialog: dialog,    
//     isOpen: false,
//     open: open,
//     close: close   
//   };
  
//   // body.removeChild(container);
    
//   function onClick() {
    
//     if (modal2.isOpen) {
//       close();
//     }
//   }
  
//   function onStart() {
//     body.appendChild(container);
//     container.addEventListener("click", onClick);
//   }
  
//   function onReverseComplete() {
//     container.removeEventListener("click", onClick);
//     body.removeChild(container);
//   }
  
//   function open() {
//     modal2.isOpen = true;
//     animation.play().timeScale(2);
//   }
  
//   function close() {
//     modal2.isOpen = false;
//     animation.reverse().timeScale(2.5);
//   }
    
//   function createPoint(x, y) {
//     var point = polygon2.points.appendItem(svg2.createSVGPoint());
//     point.x = x || 0;
//     point.y = y || 0;
//     return point;
//   }
  
//   return modal2;
// }



// var modal2 = createModal2(document.querySelector("#modal-2"));
// var openButton2 = document.querySelector("#open-button-2");

// openButton2.addEventListener("click", function() {
//   modal2.open();
// });

// function createModal2(container) {
  
//   var content2 = container.querySelector("#content-2");
//   var dialog = container.querySelector(".modal-dialog");
//   var polygon2 = container.querySelector("#polygon-2");
//   var svg2 = container.querySelector("#svg-2");
  
//   var point1 = createPoint(60, 60);
//   var point2 = createPoint(70, 70);
//   var point3 = createPoint(70, 70);
//   var point4 = createPoint(60, 70);
      
//   var animation = new TimelineMax({    
//       onReverseComplete: onReverseComplete,
//       onStart: onStart,
//       paused: true
//     })     
//     .to(point1, 0.3, {
//       x: 15,
//       y: 30,
//       ease: Power4.easeIn
//     }, 0)
//     .to(point4, 0.3, {
//       x: 5,
//       y: 80,
//       ease: Power2.easeIn
//     }, "-=0.1")
//     .to(point1, 0.3, {
//       x: 0,
//       y: 0,
//       ease: Power3.easeIn
//     })
//     .to(point2, 0.3, {
//       x: 100,
//       y: 0,
//       ease: Power2.easeIn
//     }, "-=0.2")
//     .to(point3, 0.3, {
//       x: 100,
//       y: 100,
//       ease: Power2.easeIn
//     })
//     .to(point4, 0.3, {
//       x: 0,
//       y: 100,
//       ease: Power2.easeIn
//     }, "-=0.1")  
//     .to(container, 1, {
//       autoAlpha: 1
//     }, 0)  
//     .to(content2, 1, {
//       autoAlpha: 1
//     })
  
//   var modal2 = {
//     animation: animation,
//     container: container,
//     content2: content2,
//     dialog: dialog,    
//     isOpen: false,
//     open: open,
//     close: close   
//   };
  
//   // body.removeChild(container);
    
//   function onClick() {
    
//     if (modal2.isOpen) {
//       close();
//     }
//   }
  
//   function onStart() {
//     body.appendChild(container);
//     container.addEventListener("click", onClick);
//   }
  
//   function onReverseComplete() {
//     container.removeEventListener("click", onClick);
//     body.removeChild(container);
//   }
  
//   function open() {
//     modal2.isOpen = true;
//     animation.play().timeScale(2);
//   }
  
//   function close() {
//     modal2.isOpen = false;
//     animation.reverse().timeScale(2.5);
//   }
    
//   function createPoint(x, y) {
//     var point = polygon2.points.appendItem(svg2.createSVGPoint());
//     point.x = x || 0;
//     point.y = y || 0;
//     return point;
//   }
  
//   return modal2;
// }
