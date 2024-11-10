//element//
document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const telElement = document.getElementById('tel') as HTMLInputElement;
    const EducationElement = document.getElementById('Education') as HTMLInputElement;
    const expElement = document.getElementById('exp') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(nameElement && emailElement && telElement && EducationElement && expElement && skillsElement){
        const name = nameElement.value
        const email = emailElement.value
        const tel = telElement.value
        const Education = EducationElement.value
        const exp = expElement.value
        const skills = skillsElement.value
  
    
        //resume output

    const resumeOutput =`
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


    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    
    }else{
        console.error("The Resume Output Elements Are Missing")
    }
}else{
    console.error("One Orr More Elements Are Missing");
    
}
}) 