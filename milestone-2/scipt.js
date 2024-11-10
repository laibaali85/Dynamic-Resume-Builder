"use strict";
var _a;
//element//
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const telElement = document.getElementById('tel');
    const EducationElement = document.getElementById('Education');
    const expElement = document.getElementById('exp');
    const skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && telElement && EducationElement && expElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const tel = telElement.value;
        const Education = EducationElement.value;
        const exp = expElement.value;
        const skills = skillsElement.value;
        //resume output
        const resumeOutput = `
    <div class="preview"> <h2>RESUME BY LAIBA ALI</h2>
    <p><strong>Name:</strong> ${name} </p>
    
    <p><strong>Email:</strong> ${email} </p>
    
    <p><strong>Contact No:</strong> ${tel} </p>
    
    <h3>Educattion: </h3>
    <p>${Education}</p>
    
    <h3>Experience:</h3>
    <p>${exp} </p>
    
    <h3>Skills: </h3>
    <p>${skills}</p>
</div>
    `;
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume Output Elements Are Missing");
        }
    }
    else {
        console.error("One Orr More Elements Are Missing");
    }
});