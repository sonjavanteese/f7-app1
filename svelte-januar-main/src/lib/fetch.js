const timeProm = (delay) =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("done");
        }, delay);
    });

export const fetchData = async (url, delay = 10) => {
    await timeProm(delay);
    const response = await fetch(url);
    const mediaType = response.headers.get("content-type");
    let data;
    if (mediaType.includes("json")) {
        data = await response.json();
    } else {
        data = await response.text();
    }
    return data;
};

export default fetchData