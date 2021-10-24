import {useState, useEffect} from 'react'
import fetchApi from "../utils/fetchApi"
import config from '../config.json'

const env = config.currentEnv
const {baseUrl, key} = config.environments[env]

export function getUrl (id = "", type) {
    const query = id.replace(" ", "%20")
    const urls =  {
        "SINGLE":`${baseUrl}/videos?part=snippet&id=${query}&key=${key}`,
        "RECOMMENDED": `${baseUrl}/search?part=snippet&relatedToVideoId=${query}&type=video&key=${key}&maxResults=20`,
        "LIST": `${baseUrl}/search?part=snippet&q=${query}&type=video&key=${key}&maxResults=20`
    }

    return urls[type]
}

export const useFetch = (urlType, query = "") => {
    const [id, setId] = useState(query)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        if (id !== ""){
            fetchApi(getUrl(id, urlType))
                .then((data) => {
                    setVideos(data.items)
                })
                .catch((e) => {
                    console.log("ERROR: ", e)
                    setVideos([])
                });
        }
    }, [id]);

    return { setId, id, videos}
}