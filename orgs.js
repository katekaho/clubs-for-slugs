const container = document.getElementById('orgs-list');

var clubs = [
      { name: 'Chemistry Club', 
        category: 'academic',
        description: 'Learn about chemistry',
        facebook: "" },

      { name: 'Education for Sustainable Living Program (ESLP)', 
        category: 'environmental',
        description: 'A student-run organization which offers student-facilitated Action Research Teams (ARTs) for credit every spring quarter at the University of California Santa Cruz.' },

      { name: 'Active Minds', 
        category: 'general',
        description: 'Learn about chemistry' },

      { name: 'Kappa Zeta', 
        category: 'greek',
        description: 'Kappass' },

      { name: 'The Hightones', 
        category: 'visual-and-performance',
        description: 'Acapella' },

      { name: 'College Republicans', 
        category: 'political',
        description: '....'},

      { name: 'Pre-Dental ', 
        category: 'professional',
        description: 'Prepare for dental'},

      { name: 'Muslim Student Association', 
        category: 'religious',
        description: 'Join us'},

      { name: 'Anthropology Society',
        category: 'academic',
        description:'student run organization, focuses on the extracurricular enhancement of the anthropology student experience',
        facebook: "https://www.facebook.com/groups/ucscanthrosociety/about/"},

      { name: 'Association for Computing Machinery',
        category: 'academic',
        description:'ACM seeks to promote interest in computer science and other science- and engineering-related disciplines.'},

      { name: 'Chicanas and Latinas Educandose', 
        category: 'academic',
        description: 'A program committed to increasing the retention and graduation rate for all raza here at UCSC'},

      { name: 'Chinese Student & Scholars Association', 
        category: 'academic',
	      description: 'Dedicated to fostering friendship in the Chinese Community' },

      { name: 'Cognitive Science Student Association', 
        category: 'academic',
	      description: 'Founded to support and enrich the academic experience of students interested in the interdisciplinary study of brains and behavior' },

      { name: 'Communicating Oceanography Research Effectively', 
        category: 'academic',
	      description: 'Graduate student organization that aims to improve the marine sciences through education, outreach, and diversification' },

      { name: 'Community Unified Student Network', 
        category: 'academic',
	      description: 'Organization under Engaging Education that focuses on the retention rates of Asian/Pacific Islander students on campus' },

      { name: 'Engineers For Change', 
        category: 'academic',
	      description: 'Our mission is to create a mutually beneficial partnership between our local community and UC Santa Cruz Students' },

      { name: 'Golden Key International Honor Society', 
        category: 'academic',
	      description: 'We offer a sense of fellowship within the society pillars' },

      { name: 'A Step Forward', 
        category: 'general',
	      description: 'Introduces UC Santa Cruz, the Filipino Student Association (FSA) community, and college life to newly admitted students.' },

      { name: 'Chinese Student Association', 
        category: 'general',
	      description: 'A student organization promoting unity and empowerment among UCSC students through education' },

      { name: 'Alpha Epsilon Pi', 
        category: 'greek',
        description: 'The Jewish fraternity'},

      { name: 'Alpha Kappa Delta Phi', 
        category: 'greek',
        description: 'Love * Friendship * Sisterhood'},

      { name: 'Alpha Phi Omega', 
        category: 'greek',
        description: 'Be a leader. Be a friend. Be of service'},

      { name: 'Alpha Psi Sorority', 
        category: 'greek',
        description: 'Join us in the pursuit of lifelong friendship'},

      { name: 'Delta Sigma Pi', 
        category: 'greek',
        description: 'Americas Foremost Co-ed Professional Fraternity'},

      { name: 'Ambience at UCSC', 
        category: 'visual-and-performance',
        description: 'We are a group of glovers'},

      { name: 'Cloud 9 A Cappella', 
        category: 'visual-and-performance',
        description: 'UCSC orginall a cappella group'},

      { name: 'Banana Slugs for Animals', 
        category:'political',
        description: 'Animal rights group at UCSC'},

      { name: 'American Medical Student Association', 
        category: 'professional',
        description: 'Dreaming of becoming a doctor, join AMSA'},

      { name: 'Klesis Christian Fellowship', 
        category: 'religious',
        description: 'Meets weekly to study the bible'},

      { name: 'Circle K International', 
        category: 'service',
        description: 'Premier collegiate community service'},
      
      { name: 'Japanese Student Association (JSA)', 
        category: 'culture-and-identity',
        description: 'JSA is a student led organization of UCSC that supports and promote Japanese culture through cultural events, activities, and socials.'},

    ];

var first = true;

// Sorts clubs into alphabetical order
clubs = clubs.sort(function(a, b) {
      return a.name.localeCompare(b.name);
})

// Creates div with name of each club
for (var i = 0; i < clubs.length; i++) {
      // Div that contains club info
      var div = document.createElement("div");
      div.classList.add("filterDiv");
      div.classList.add(clubs[i].category);

      var clubHeader = document.createElement("h2");
      clubHeader.classList.add("clickHeader");
      clubHeader.innerHTML = clubs[i].name;

      var para = document.createElement("p");
      para.innerHTML = clubs[i].description;

      var hiddenInfo = document.createElement("div");
      hiddenInfo.innerHTML = clubs[i].facebook;
      hiddenInfo.classList.add("collapse");

      // Creates accordion affect
      clubHeader.onclick = function(e){
        if (first) {first = false;}
        else {
          var current = document.getElementsByClassName("collapse show");
          current[0].className = current[0].className.replace(" show", "");
        }
        e.target.nextElementSibling.nextElementSibling.classList.add("show");
      }

      div.appendChild(clubHeader);
      div.appendChild(para);
      div.appendChild(hiddenInfo);

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
