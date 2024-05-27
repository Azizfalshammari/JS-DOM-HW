

let profileImage = document.querySelector('.main-image');

profileImage.onmouseover = function() {
    this.src = './catpic.png'; 
};

profileImage.onmouseout = function() {
    this.src = './personA.png'; 
};


let skills = document.querySelector('.SKILLS');

skills.onmouseover = function() {
    this.textContent = 'SKILLS';
};

skills.onmouseout = function() {
    this.textContent ='SKILLS'; 
};