async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Viniciusd1810/Personal_Portfolio_with_Dynamic_Project_Loading/refs/heads/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}