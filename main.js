const profileImage = document.querySelector('.main-image');
const educationSection = document.querySelector('.EDUCATION');
const skillsSection = document.querySelector('.SKILLSTITLE');
const contactSection = document.querySelector('.CONTACT');
const languagesSection = document.querySelector('.LANGUAGES');
const workExperienceSection = document.querySelector('.Experience-section');
const referenceSection = document.querySelector('.refrences-section');

profileImage.onmouseover = function() {
    this.src = './catpic.png'; 
};

profileImage.onmouseout = function() {
    this.src = './personA.png';
};

skillsSection.onmouseover = function() {
    const catSkills = [
        'Paw-fessional',
        'Meow-ssaging',
        'Whisker Whisperer',
        'Stealthy Expert',
        'Tail Charm',
        'Box Champion',
        'Yarn Connoisseur'
    ];

    document.querySelector('.skills-list').innerHTML = catSkills.map(skill => `<li>${skill}</li>`).join('');
};

skillsSection.onmouseout = function() {
    const originalSkills = [
        'Project Management',
        'Public Relations',
        'Teamwork',
        'Time Management',
        'Leadership',
        'Effective Communication',
        'Critical Thinking'
    ];

    document.querySelector('.skills-list').innerHTML = originalSkills.map(skill => `<li>${skill}</li>`).join('');
};

educationSection.onmouseover = function() {
    const catEducation = [
        'Cat University',
        'Purring Studies',
        'Scratching Techniques'
    ];

    document.querySelector('.edu-list').innerHTML = catEducation.map(edu => `<li>${edu}</li>`).join('');
};

educationSection.onmouseout = function() {
    const originalEducation = [
        'Bachelor of Business',
        'GPA: 3.8/4.0'
    ];

    document.querySelector('.edu-list').innerHTML = originalEducation.map(edu => `<li>${edu}</li>`).join('');
};

contactSection.onmouseover = function() {
    const catContact = [
        '+123-456-7890 (meow)',
        'hello@catlovers.com',
        '123 Catnip Lane, Kitty City',
        'www.catlovers.com'
    ];

    document.querySelector('.contact-list').innerHTML = catContact.map(contact => `<li>${contact}</li>`).join('');
};

contactSection.onmouseout = function() {
    const originalContact = [
        '+123-456-7890',
        'hello@reallygreatsite.com',
        '123 Anywhere St., Any City',
        'www.reallygreatsite.com'
    ];

    document.querySelector('.contact-list').innerHTML = originalContact.map(contact => `<li>${contact}</li>`).join('');
};

languagesSection.onmouseover = function() {
    const catLanguages = [
        'Catish (Fluent)',
        'Purr-sian (Fluent)',
        'Meow-xican (Basic)',
        'Paw-luguese (Intermediate)'
    ];

    document.querySelector('.LANGUAGES-list').innerHTML = catLanguages.map(language => `<li>${language}</li>`).join('');
};

languagesSection.onmouseout = function() {
    const originalLanguages = [
        'English (Fluent)',
        'French (Fluent)',
        'German (Basic)',
        'Spanish (Intermediate)'
    ];

    document.querySelector('.LANGUAGES-list').innerHTML = originalLanguages.map(language => `<li>${language}</li>`).join('');
};

workExperienceSection.onmouseover = function() {
    const catWorkExperience = [
        'Professional Napper',
        'Treat Tester',
        'Mouse Hunter'
    ];

    document.querySelectorAll('.Experience-section ul').forEach(list => {
        list.innerHTML = catWorkExperience.map(experience => `<li>${experience}</li>`).join('');
    });
};

workExperienceSection.onmouseout = function() {
    const originalExperience = [
        '<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</li>',
        '<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</li>',
        '<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</li>'
    ];

    document.querySelectorAll('.Experience-section ul').forEach(list => {
        list.innerHTML = originalExperience.join('');
    });
};

referenceSection.onmouseover = function() {
    const catReferences = [
        '<li><h3 class="firstRefName">Mittens Smith</h3></li>',
        '<li>Paw-sident of Cat Club</li>',
        '<li>Phone: 123-456-7890</li>',
        '<li>Email: meow@catclub.com</li>',
        '<li><h3 class="secondRefName">Whiskers Johnson</h3></li>',
        '<li>Catnip Connoisseur</li>',
        '<li>Phone: 987-654-3210</li>',
        '<li>Email: whiskers@catniplover.com</li>'
    ];

    document.querySelector('.firstRefData').innerHTML = catReferences.join('');
};

referenceSection.onmouseout = function() {
    const originalReferences = [
        '<li><h3 class="firstRefName">Estelle Darcy</h3></li>',
        '<li>Wardiere Inc. / CTO</li>',
        '<li>Phone: 123-456-7890</li>',
        '<li>Email: hello@reallygreatsite.com</li>',
        '<li><h3 class="secondRefName">Harper Richard</h3></li>',
        '<li>Wardiere Inc. / CTO</li>',
        '<li>Phone: 123-456-7890</li>',
        '<li>Email: hello@reallygreatsite.com</li>'
    ];

    document.querySelector('.firstRefData').innerHTML = originalReferences.join('');
};
