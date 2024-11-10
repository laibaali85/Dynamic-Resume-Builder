//element//
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //type
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const telElement = document.getElementById('tel') as HTMLInputElement;
    const EducationElement = document.getElementById('Education') as HTMLTextAreaElement;
    const expElement = document.getElementById('exp') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    //** 
    const usernameElement = document.getElementById(
        "username"
    )as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && telElement && EducationElement && expElement && skillsElement && usernameElement) {
     
        ///*************************//////  
        // get values from 
        const name = nameElement.value;
        const email = emailElement.value;
        const tel = telElement.value;
        const Education = EducationElement.value;
        const exp = expElement.value;
        const skills = skillsElement.value;
       ///**
        const username = usernameElement.value;
        const uniquePath = `resume/${username.replace(/\s+/g,'_')}_cv.html`
      ///////**8888888//// *//////////////////

        //[picture element]
        const profilePictureFile: Blob | undefined = profilePictureInput.files?.[0];
        const reader = new FileReader();

        reader.onload = () => {
            const profilePictureURL = reader.result as string;

            //resume output
            const resumeOutput = `
            <div class="preview">
                <h2>RESUME BUILDER</h2>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="PROFILE PICTURE" class="profilePicture">` : ''}
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact No:</strong> ${tel}</p>
                <h3>Education:</h3>
                <p>${Education}</p>
                <h3>Experience:</h3>
                <p>${exp}</p>
                <h3>Skills:</h3>
                <p>${skills}</p> <br>
            </div>
            `;
                
             //**
             const downloadLink = document.createElement('a')
             downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
             downloadLink.download = uniquePath;
            //  downloadLink.textContent = 'DOWNLOAD YOUR 2024 RESUME';

             ////////////////////////////////////////////////////

            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.classList.remove("hiddden");

                /////////create conatainar for buttons
                const buttonsContainar = document.createElement("div");
                buttonsContainar.id = "buttonsContainar";
                resumeOutputElement.appendChild(buttonsContainar);

                /////////////////ADD PDF
                const downloadButton = document.createElement("button");
                downloadButton.textContent = "DOWNLOAD AS PDF"; 
                downloadButton.addEventListener("click", () => {
                    window.print(); //to save as pdf
                });
                buttonsContainar.appendChild(downloadButton);
                    


                ///////////////add shareable link
                const shareLinkButton = document.createElement("button");
                shareLinkButton.textContent = "COPY SHAREABLE LINK"; 
                shareLinkButton.addEventListener("click", async ()=>{
                    try{
                        //create a unique sharable link
                        const shareableLink = `https://yourdomain.com/resume/${name.replace(
                            /\s+/g,
                            "_"
                        )}_cv.html`;

                        //use clipboard api to copy the shareable link
                        await navigator.clipboard.writeText(shareableLink);
                        alert("SHAREABLE LINK COPY TO CLIPBOARD!");



                    
                    } catch (err){
                        console.error("FAILED TO COPY LINK", err);
                        alert("FAILED TO COPY LINK TO CLIPBOARD. PLEASE TRY AGAIN.");  
                    }
                });
                buttonsContainar.appendChild(shareLinkButton);




                 //**
               resumeOutputElement.appendChild(downloadLink)
               
               resumeOutputElement.style.display="block";
            } else {
                console.error("The Resume Output Element is missing");
            }
        };

        if (profilePictureFile) {
            reader.readAsDataURL(profilePictureFile);
        } else {
            // Handle case where no file was selected
            const resumeOutput = `
            <div class="preview">
                <h2>RESUME BUILDER</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact No:</strong> ${tel}</p>
                <h3>Education:</h3>
                <p>${Education}</p>
                <h3>Experience:</h3>
                <p>${exp}</p>
                <h3>Skills:</h3>
                <p>${skills}</p>
            </div>
            `;

            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;


            } else {
                console.error("The Resume Output Element is missing");
            }
        }
    } else {
        console.error("One or more elements are missing");
    }
});
