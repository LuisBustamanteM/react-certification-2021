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

export default fetchApi;