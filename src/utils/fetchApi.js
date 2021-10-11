async function fetchApi(url){
    let data = [];
    try{
        data = await fetch(url)
            .then(res => res.json());

        return data;

    } catch(e){
        throw new Error(`Failed fetching to url: ${url}`);
    }

}

export default fetchApi;