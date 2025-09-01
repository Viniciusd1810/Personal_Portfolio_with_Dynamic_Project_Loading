async function fetchProfileData() {
    const userUrl = 'https://raw.githubusercontent.com/Viniciusd1810/Personal_Portfolio_with_Dynamic_Project_Loading/refs/heads/main/assets/data/profile.json'
    const userResponse = await fetch(userUrl)
    return await userResponse.json()
}

const fetchProfileRepositories = async() => {
    const reposUrl = `https://api.github.com/users/viniciusd1810/repos`;
    const reposResponse = await fetch(reposUrl);
    return await reposResponse.json()
    }