import {useState, useEffect} from 'react';
import fetchApi from "../utils/fetchApi";
import config from "../../config.json";

let env = config.currentEnv;
let {baseUrl, part, keys, maxResults} = config.environments[env].api

// return setQuery & items
export const useFetch = () => {
    const [text, setText] = useState("")
    const [videos, setVideos] = useState([])


    // Should get an environment variable to get route
    // Format: https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=smash%20bros&key=[key]&maxResults=20
    useEffect(() => {

        const url = `${baseUrl}?part=${part}${text ? "&q=" + text.replace(" ", "%20") : ""}&key=${keys.youtubeAPI}&maxResults=${maxResults}`

        fetchApi(url)
            .then((data) => {
                setVideos(data.items)
            })
            .catch((e) => {
                console.log("ERROR: ", e)
                setVideos([])
            });

    }, [text]);

    return { text, setText, videos}
}
