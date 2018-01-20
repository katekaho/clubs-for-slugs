const container = document.getElementById('orgs-list');

var clubs = [
      { name: 'Chemistry Club', category: 'academic',
            description: 'Learn about chemistry' },

      { name: 'Education for Sustainable Living Program (ESLP)', category: 'environmental',
            description: 'A student-run organization which offers student-facilitated Action Research Teams (ARTs) for credit every spring quarter at the University of California Santa Cruz.' },

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

      { name: 'Anthropology Society',category: 'academic', 
            description:'student run organization, focuses on the extracurricular enhancement of the anthropology student experience'},
      
      { name: 'Association for Computing Machinery',category: 'academic', 
            description:'ACM seeks to promote interest in computer science and other science- and engineering-related disciplines.'},

      { name: 'Chicanas and Latinas Educandose', category: 'academic',
            description: 'A program committed to increasing the retention and graduation rate for all raza here at UCSC'},      
      { name: 'Chinese Student & Scholars Association', category: 'academic',
	          description: 'Dedicated to fostering friendship in the Chinese Community' },

      { name: 'Cognitive Science Student Association', category: 'academic',
	          description: 'Founded to support and enrich the academic experience of students interested in the interdisciplinary study of brains and behavior' },
      
      { name: 'Communicating Oceanography Research Effectively', category: 'academic',
	          description: 'Graduate student organization that aims to improve the marine sciences through education, outreach, and diversification' },

      { name: 'Community Unified Student Network', category: 'academic',
	          description: 'Organization under Engaging Education that focuses on the retention rates of Asian/Pacific Islander students on campus' },

      { name: 'Engineers For Change', category: 'academic',
	          description: 'Our mission is to create a mutually beneficial partnership between our local community and UC Santa Cruz Students' },

      { name: 'Golden Key International Honor Society', category: 'academic',
	          description: 'We offer a sense of fellowship within the society pillars' },

      { name: 'A Step Forward', category: 'general',
	          description: 'Introduces UC Santa Cruz, the Filipino Student Association (FSA) community, and college life to newly admitted students.' },

      { name: 'Chinese Student Association', category: 'general',
	          description: 'A student organization promoting unity and empowerment among UCSC students through education' },
    ];

// Sorts clubs into alphabetical order
clubs = clubs.sort(function(a, b) {
      return a.name.localeCompare(b.name);
})

// Creates div with name of each club
for (var i = 0; i < clubs.length; i++) {
      var div = document.createElement("div");
      // Add classes
      div.classList.add("filterDiv");
      div.classList.add(clubs[i].category);

      var icon = document.createElement("div");
      icon.classList.add("icon");

      var header = document.createElement("h2");
      header.innerHTML = clubs[i].name;
      var para = document.createElement("p");
      para.innerHTML = clubs[i].description;

      div.appendChild(icon);
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
      var current = document.getElementsByClassName("btn active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}
