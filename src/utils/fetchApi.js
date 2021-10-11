async function fetchApi(url){
    let data = [];
    try{
        data = await fetch(url)
            .then(res => res.json());

        return data;

    } catch(e){
        console.log(e);
        return data;
    }

}

export default fetchApi;