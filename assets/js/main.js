function updateProfileInfo(profileData) {
    const photo = document.getElementById('profileData.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profileData.name')
    name.innerText = profileData.name

    const job = document.getElementById('profileData.job')
    job.innerText = profileData.job


    const location = document.getElementById('profileData.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profileData.phone')
    phone.innerText = profileData.phone
    phone.href = 'tel:${profileData.phone}'

    const email = document.getElementById('profileData.email')
    email.innerText = profileData.email
    email.href = 'mailto:${profileData.email}'


}


(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData)
})()

