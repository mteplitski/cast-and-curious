export const get = async (apiUrl) => {
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/${apiUrl}`;
    // const res = await axios({
    //     headers: { "content-type": "application/json"},
    //     url,
    //     method: 'GET'
    // });
    const res = await fetch(url);
    return res;
}

export const formatDuration = (time) => `${(time/1000)/60} mins`;

export const formatDate = (date) => date.slice(0, 10);