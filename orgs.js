const container = document.getElementById('orgs-list');

var clubs = [
      { name: 'Chemistry Club', category: 'academic',
            description: 'Learn about chemistry' },

      { name: 'The Russian Club', category: 'environmental',
            description: 'Lets talk Russia' },

      { name: 'Active Minds', category: 'general',
            description: 'Learn about chemistry' },

      { name: 'Kappa Zeta', category: 'Greek',
            description: 'Kappass' },

      { name: 'The Hightones', category: 'visual-and-performance',
            description: 'Acapella' },

      { name: 'College Republicans', category: 'political', 
            description: '....'},

      { name: 'Pre-Dental ', category: 'professional',
            description: 'Prepare for dental'},

      { name: 'Muslim Student Association', category: 'religious',
            description: 'Join us'},

      { name: 'Circle K International', category: 'service',
            description: 'Do service'},
    ];

// Sorts clubs into alphabetical order
clubs = clubs.sort(function(a, b) {
      return a.name.localeCompare(b.name);
})

// Creates div with name of each club
for (var i = 0; i < clubs.length; i++) {
      var div = document.createElement("div");
      div.classList.add("filterDiv");
      div.classList.add(clubs[i].category);
      var header = document.createElement("h2");
      var node1 = document.createTextNode(clubs[i].name);
      var para = document.createElement("p");
      var node2 = document.createTextNode(clubs[i].description);
      header.appendChild(node1);
      para.appendChild(node2);
      div.appendChild(header);
      div.appendChild(para);
      container.appendChild(div);
}

const categories = ['academic', 'culture-and-identity','environmental', 'general',
      'greek', 'visual-and-performance', 'political', 'professional', 
      'religious', 'service'];


// Copied example from w3schools.com to filter lists
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}