import {useState, useEffect, useContext} from 'react'
import fetchApi from "../utils/fetchApi"
import config from '../config.json'
import {DispatchContext} from "../components/App/App.component";

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

    // check if query is an array
    useEffect(() => {
        if (id !== ""){
            fetchApi(getUrl(id, urlType))
                .then( (data) => {
                    const items = data.items.filter(item => item.snippet)
                    setVideos(items)
                })
                .catch((e) => {
                    console.log("ERROR: ", e)
                });
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return { setId, id, videos}
}


export const useFetchId = (ids = []) => {
    const [videos, setVideos] = useState([])
    const [idList, setIdList] = useState(ids)

    // check if query is an array
    useEffect(() => {
        if (idList.length > 0){
            const stringIds = ids.join("&id=")
            fetchApi(getUrl(stringIds, "SINGLE"))
                .then( (data) => {
                    const items = data.items.filter(item => item.snippet)
                    setVideos(items)
                })
                .catch((e) => {
                    console.log("ERROR: ", e)
                });
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idList, setIdList]);

    return { videos, idList }
}