//element//
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //type
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const telElement = document.getElementById('tel') as HTMLInputElement;
    const EducationElement = document.getElementById('Education') as HTMLInputElement;
    const expElement = document.getElementById('exp') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && telElement && EducationElement && expElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const tel = telElement.value;
        const Education = EducationElement.value;
        const exp = expElement.value;
        const skills = skillsElement.value;

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
                <p>${skills}</p>
            </div>
            `;

            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
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
