import config from '../config.json'
const env = config.currentEnv
const {baseUrl, key} = config.environments[env]

export function getUrl(id = "", type) {
    if (typeof id === "object"){
        id = id.join("&id=")
    }

    const query = id.replace(" ", "%20")
    const urls =  {
        "ID":`${baseUrl}/videos?part=snippet&id=${query}&key=${key}`,
        "RECOMMENDED": `${baseUrl}/search?part=snippet&relatedToVideoId=${query}&type=video&key=${key}&maxResults=20`,
        "QUERY": `${baseUrl}/search?part=snippet&q=${query}&type=video&key=${key}&maxResults=20`
    }

    return urls[type]
}

export async function fetchVideos(ids, type){
    const url = getUrl(ids, type)
    let items = []

    try{
        items = await fetch(url)
            .then(res =>  res.json())
            .then(res => res.items.filter(item => item.snippet))

        return items
    } catch(e){
        throw new Error(`Failed fetching to url: ${url}  With error: ${e}`);
    }
}

export async function fetchLogin(username, password) {
    try{
        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        return await res.json()

    } catch (e) {
        console.log("ERROR: ", e)
    }
}