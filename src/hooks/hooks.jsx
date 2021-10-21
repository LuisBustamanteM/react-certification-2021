import {useState, useEffect} from 'react'
import fetchApi from "../utils/fetchApi"
import config from '../config.json'

let env = config.currentEnv;

// return setQuery & items
export const useFetch = (type = "LIST") => {
    const [text, setText] = useState("")
    const [videos, setVideos] = useState([])
    const {baseUrl, part, keys, maxResults} = config.environments[env][type].api

    // Should get an environment variable to get route
    // Format: https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=smash%20bros&key=[key]&maxResults=20
    useEffect(() => {
        let urls = {
            "SINGLE": `${baseUrl}?part=${part}${text ? "&id=" + text.replace(" ", "%20") : ""}&key=${keys.youtubeAPI}`,
            "LIST": `${baseUrl}?part=${part}${text ? "&q=" + text.replace(" ", "%20") : ""}&key=${keys.youtubeAPI}&maxResults=${maxResults}`
        }

        fetchApi(urls[type])
            .then((data) => {
                console.log("FETCH API CALLED FROM NAVBAR")
                setVideos(data.items)
            })
            .catch((e) => {
                console.log("ERROR: ", e)
                setVideos([])
            });

    }, [text]);

    return { text, setText, videos}
}

export const useFetchSingleVideo = () => {
    const [id, setId] = useState("")
    const [video, setVideo] = useState([])
    const {baseUrl, part, keys} = config.environments[env]["SINGLE"].api

    // Should get an environment variable to get route
    // Format: https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=smash%20bros&key=[key]&maxResults=20
    useEffect(() => {
        // https://www.googleapis.com/youtube/v3/videos?part=snippet&id=hYrNGzi8o98&key={{APIKey}}
        let url = `${baseUrl}?part=${part}&id=${id}&key=${keys.youtubeAPI}`
        fetchApi(url)
            .then((data) => {
                setVideo(data.items)
            })
            .catch((e) => {
                console.log("ERROR: ", e)
                setVideo([])
            });

    }, [id]);

    return { id, setId, video}
}

export const useFetchRecommendedVideos = () => {
    const [id, setId] = useState("")
    const [videos, setVideos] = useState([])
    const {baseUrl, part, keys} = config.environments[env]["SINGLE"].api

    // Should get an environment variable to get route
    // Format: https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=smash%20bros&key=[key]&maxResults=20
    useEffect(() => {
        let url =  `${baseUrl}?part=${part}&id=${id}&key=${keys.youtubeAPI}`

        fetchApi(url)
            .then((data) => {
                setVideos(data.items)
            })
            .catch((e) => {
                console.log("ERROR: ", e)
                setVideos([])
            });

    }, [id]);

    return { setId, videos}
}