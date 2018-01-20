const container = document.getElementById('page-content');

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
      div.classList.add("org");
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
