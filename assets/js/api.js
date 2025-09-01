async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Viniciusd1810/Personal_Portfolio_with_Dynamic_Project_Loading/refs/heads/main/assets/data/profile.json'
    const userResponse = await fetch(url)
    return await userResponse.json()
}

const fetchProfileRepositories = async() => {
    const repositoriesData = `https://api.github.com/users/viniciusd1810/repos`;
    const reposResponse = await fetch(repositoriesData);
    return await reposResponse.json()
    }