//the fetch
fetch("https://randomfox.ca/floof")
    //the conversion (returns as string so need to convert to object)
    .then((response) => response.json())
    //A function for the action(What I want to do with data)
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox");
            foxImgElement.src = convertedData.image;
        }
    );

const getTheCat = async () => {
    const response = await fetch("http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false");
    const convertedData = await response.json();

    const catImgElement = document.querySelector("#cat");
    catImgElement.src = convertedData[0];
}
    
getTheCat();