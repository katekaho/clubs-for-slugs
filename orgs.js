const container = document.getElementById('orgs-list');

var clubs = [
      { name: 'Chemistry Club',
        category: 'academic',
        description: 'This club strive to build a community of UCSC students interested in chemistry and related fields. The club promotes networking with professors and local industrial organizations.',
        facebookUrl: "https://www.facebook.com/groups/ChemClubUCSC/" ,
        webUrl: "https://chemclubucsc.weebly.com/",
        instagramUrl: "",
        facebookName: "Chem Club at UCSC",
        webName: "Chem Club at UCSC",
        instagramName: "Chem Club at UCSC",
        email: "chemclub@ucsc.edu"
      },

      { name: 'Education for Sustainable Living Program (ESLP)',
        category: 'environmental',
        description: 'A student-run organization which offers student-facilitated Action Research Teams (ARTs) for credit every spring quarter at the University of California Santa Cruz.',
        facebookUrl: "https://www.facebook.com/educationforsustainablelivingprogram/" ,
        webUrl: "https://www.eslp-enviroslug.org/",
        instagramUrl: "",
        facebookName: "Education for Sustainable Living Program",
        webName: "Education for Sustainable Living Program",
        instagramName: "Education for Sustainable Living Program",
        email: "eslp@ucsc.edu"
      },

      { name: 'Active Minds',
        category: 'general',
        description: 'The leading nonprofit organization that empowers students to speak openly about mental health in order to educate others and encourage help-seeking.',
        facebookUrl: "https://www.facebook.com/activemindsucsc/" ,
        webUrl: "https://activemindsucscblog.wordpress.com/",
        instagramUrl: "https://www.instagram.com/activeminds.ucsc/",
        facebookName: "Active Minds UCSC",
        webName: "Active Minds UCSC",
        instagramName: "Active Minds UCSC",
        email: "activemindsucsc@gmail.com"
      },

      { name: 'Kappa Zeta',
        category: 'greek',
        description: 'Our sorority has been and always will be committed to promoting sisterhood, leadership, and life-long friendships.',
        facebookUrl: "https://www.facebook.com/kappazetaucsc/" ,
        webUrl: "https://kappazetaucsc.wordpress.com/",
        instagramUrl: "https://www.instagram.com/kappazetaucsc/",
        facebookName: "Kappa Zeta UCSC",
        webName: "Kappa Zeta UCSC",
        instagramName: "Kappa Zeta UCSC",
        email: ""
      },

      { name: 'The Hightones',
        category: 'visual-and-performance',
        description: 'A group of multi-talented, collegiate women whose voices in harmony bring to mind sugar, spice, and everything awesome!',
        facebookUrl: "https://www.facebook.com/hightones.acappella/" ,
        webUrl: "https://www.ucschightones.org/",
        instagramUrl: "",
        facebookName: "UCSC Hightones",
        webName: "UCSC Hightones",
        instagramName: "UCSC Hightones",
        email: "ucschightones@gmail.com"
      },

      { name: 'College Republicans',
        category: 'political',
        description: 'We recruit, train, and empower College Republicans to combat liberal bias on campus, and help to elect Republicans throughout our state.'},

      { name: 'Pre-Dental Society',
        category: 'professional',
        description: 'We are focused on providing our members with the resources necessary to become competitive dental school applicants.'},

      { name: 'Muslim Student Association',
        category: 'religious',
        description: 'We are dedicated to spreading truth and awareness about the real, peaceable message of Islam, and creating a safe and supportive environment for Muslims on campus.'},

      { name: 'Anthropology Society',
        category: 'academic',
        description:'A student run organization, focused on the extracurricular enhancement of the anthropology student experience.',
        facebookUrl: "https://www.facebook.com/groups/ucscanthrosociety/about/" ,
        webUrl: "https://anthro.ucsc.edu/about/anthro-society.html",
        instagramUrl: "",
        facebookName: "Anthropology Society",
        webName: "Anthro Society Page",
        instagramName: "",
        email: "" 
      },

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
	      description: 'We offer a sense of fellowship within the society pillars.',
        facebookUrl: "https://www.facebook.com/groups/ucscgoldenkey/" ,
        webUrl: "http://ucsc.goldenkey.org/",
        instagramUrl: "",
        facebookName: "UCSC Golden Key Honor Society",
        webName: "UCSC Golden Key Honor Society",
        instagramName: "UCSC Golden Key Honor Society",
        email: "goldenkeyucsc@gmail.com"
      },

      { name: 'A Step Forward',
        category: 'general',
	      description: 'Introduces UC Santa Cruz, the Filipino Student Association (FSA) community, and college life to newly admitted students.',
        facebookUrl: "https://www.facebook.com/groups/674147542707504/" },

      { name: 'Chinese Student Association',
        category: 'general',
	      description: 'A student organization promoting unity and empowerment among UCSC students through education' },

      { name: 'Alpha Epsilon Pi',
        category: 'greek',
        description: 'A social fraternity that seeks to proliferate and espouse the morals of Judaism through brotherhood, social action, and philanthropy.',
        facebookUrl: "https://www.facebook.com/UCSCAEPI/" ,
        webUrl: "https://chemclubucsc.weebly.com/",
        instagramUrl: "https://www.instagram.com/aepi_ucsc/",
        facebookName: "Alpha Epsilon Pi",
        webName: "Alpha Epsilon Pi",
        instagramName: "Alpha Epsilon Pi",
        email: "aepisc@gmail.com"
      },

      { name: 'Alpha Kappa Delta Phi',
        category: 'greek',
        description: 'We have dedicated ourselves to upholding and exemplifying our pillars of scholarship, leadership, service, Asian-awareness, and sisterhood.',
        facebookUrl: "https://www.facebook.com/ucsc.akdphi" ,
        webUrl: "http://ucscakdphi.wixsite.com/home",
        instagramUrl: "https://www.instagram.com/ucsc_akdphi/",
        facebookName: "UCSC Alpha Kappa Delta Phi",
        webName: "UCSC Alpha Kappa Delta Phi",
        instagramName: "UCSC Alpha Kappa Delta Phi",
        email: ""
      },


      { name: 'Alpha Phi Omega',
        category: 'greek',
        description: 'A national coeducational service organization founded on the principles of Leadership, Friendship, and Service. '},

      { name: 'Alpha Psi Sorority',
        category: 'greek',
        description: 'An organization founded on the ideals of academic excellence, intellectual achievement, and social development. ',
        facebookUrl: "https://www.facebook.com/UCSCAlphaPsi" ,
        webUrl: "http://alphapsiucsc.wixsite.com/alphapsiucsc",
        instagramUrl: "https://www.instagram.com/ucscalphapsi/",
        facebookName: "Alpha Psi Sorority",
        webName: "Alpha Psi Sorority",
        instagramName: "Alpha Psi Sorority",
        email: "alphapsiucsc@yahoo.com"
      },

      { name: 'Delta Sigma Pi',
        category: 'greek',
        description: 'An organization acilitates social activity among students, the community, and business organizations. ',
        facebookUrl: "https://www.facebook.com/ucscdsp/?ref=aymt_homepage_panel" ,
        webUrl: "https://www.ucscdsp.org/",
        instagramUrl: "http://instagram.com/ucscdsp",
        facebookName: "Delta Sigma Pi",
        webName: "Delta Sigma Pi",
        instagramName: "Delta Sigma Pi",
        email: "ucsc.dsp@gmail.com"
      },

      { name: 'Ambience at UCSC',
        category: 'visual-and-performance',
        description: 'We are a group of glovers'},

      { name: 'Cloud 9 A Cappella',
        category: 'visual-and-performance',
        description: 'Cloud 9 is an original a cappella group at UCSC. Established in 2001, we have been rocking collegiate a cappella for over a decade.'},

      { name: 'Banana Slugs for Animals',
        category:'political',
        description: 'A student organization, uses eye-catching displays, protests, tabling and volunteering to fight against animal injustice.'},

      { name: 'American Medical Student Association',
        category: 'professional',
        description: 'AMSA is designed to help premeds and med students network and learn about the challenges that will face them as doctors.'},

      { name: 'Klesis Christian Fellowship',
        category: 'religious',
        description: 'A UC Santa Cruz campus fellowship that meets weekly to study the Bible and build lasting friendships.',
        facebookUrl: "https://www.facebook.com/klesissantacruz/" ,
        webUrl: "https://www.ucsc.klesis.org/join-us/",
        instagramUrl: "https://www.instagram.com/klesis_ucsantacruz/",
        facebookName: "UCSC Klesis",
        webName: "UCSC Klesis",
        instagramName: "UCSC Klesis",
        email: "jason.lu@gpmail.org"
      },

      { name: 'Circle K International',
        category: 'service',
        description: 'Premier collegiate community service'},

      { name: 'Japanese Student Association (JSA)',
        description: 'CKI is the premier collegiate community service, leadership development, and friendship organization in the world. ',
        facebookUrl: "https://www.facebook.com/groups/ucsccirclek/10153792201631243/" ,
        webUrl: "https://ucsc-cki.weebly.com/cki.html",
        instagramUrl: "https://www.instagram.com/ucsccki/",
        facebookName: "UCSC Circle K International",
        webName: "UCSC Circle K International",
        instagramName: "UCSC Circle K International",
        email: "sec.ucsc.cki@gmail.com"
      },
      
      { name: 'Japanese Student Association (JSA)', 
        category: 'culture-and-identity',
        description: 'JSA is a student led organization of UCSC that supports and promote Japanese culture through cultural events, activities, and socials.',
        facebookUrl: "https://www.facebook.com/groups/JSA.UCSC/" ,
        webUrl: "http://jsaucsc.wixsite.com/jsaucsc",
        instagramUrl: "",
        facebookName: "UCSC JSA",
        webName: "UCSC JSA ",
        instagramName: "UCSC JSA ",
        email: "jsaucsc@gmail.com"
      },


    ];

var first = true;

// Sorts clubs into alphabetical order
clubs = clubs.sort(function(a, b) {
      return a.name.localeCompare(b.name);
})

// Creates and formats image icon
function createIcon(imgLink, actualLink, name) {
  var iconDiv = document.createElement("div");
  var link = document.createElement("img");
  var a = document.createElement("a");
  a.setAttribute("href", actualLink);
  if (actualLink == undefined) {
    a.setAttribute("href", "");
  }
  // Opens links in new tab
  a.setAttribute("target", "_blank");
  a.classList.add("various-links")
  if (name != undefined) {
    a.innerHTML = name;
  }
  iconDiv.classList.add("icons");
  link.classList.add("icon-pic");
  link.setAttribute("src", imgLink);
  link.setAttribute("height", "40px");
  iconDiv.appendChild(link);
  iconDiv.appendChild(a);
  hiddenInfo.appendChild(iconDiv);
  return iconDiv;
}

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
      hiddenInfo.classList.add("collapse");

      var email = createIcon("img/emailLogo.png", clubs[i].email, clubs[i].email);
      var facebook = createIcon("img/facebookLogo.png", clubs[i].facebookUrl, clubs[i].facebookName);
      var web = createIcon("img/webLogo.png", clubs[i].webUrl, clubs[i].webName);
      var instagram = createIcon("img/instagramLogo.png", clubs[i].instagramUrl, clubs[i].instagramName);

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
