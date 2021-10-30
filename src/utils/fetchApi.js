import config from '../config.json'
const env = config.currentEnv
const {baseUrl, key} = config.environments[env]

export function getUrl(id = "", type) {
    const query = id.replace(" ", "%20")
    const urls =  {
        "ID":`${baseUrl}/videos?part=snippet&id=${query}&key=${key}`,
        "RECOMMENDED": `${baseUrl}/search?part=snippet&relatedToVideoId=${query}&type=video&key=${key}&maxResults=20`,
        "QUERY": `${baseUrl}/search?part=snippet&q=${query}&type=video&key=${key}&maxResults=20`
    }

    return urls[type]
}

async function fetchApi(url){
    let data = [];
    try{
        data = await fetch(url)
            .then(res => {
                return res.json()
            });

        return data;

    } catch(e){
        throw new Error(`Failed fetching to url: ${url}`);
    }

}

export async function fetchVideos(ids){
    const stringIds = ids.join("&id=")
    const url = getUrl(stringIds, "ID")
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

export default fetchApi;