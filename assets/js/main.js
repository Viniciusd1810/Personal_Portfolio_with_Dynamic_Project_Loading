function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job


    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<img src="${skill.logo}" alt="${skill.name}">`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateEducations(profileData) {
    const educations = document.getElementById('profile.educations')
    educations.innerHTML = profileData.educations.map(education => `
        <li>
            <span class="education__title">${education.name}</span>
            <span class="education__period">${education.period}</span>
            <p>${education.description}</p>
        </li>`).join('')
}

function updateProjects(profileData) {
    const projects = document.getElementById('profile.projects')
    projects.innerHTML = profileData.projects.map(project => `    
        <li>
            <span class="projects__title github">${project.name}</span>
            <a href="${project.url}" target="_blank">Link to Project</a>
        </li>`).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `    
        <li>
            <span class="professionalExperience__title">${experience.name}</span>
            <span class="professionalExperience__period">${experience.period}</span>
            <p>${experience.description}</p>
        </li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData)
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjects(profileData)
    updateProfessionalExperience(profileData)
    updateEducations(profileData)
})()

