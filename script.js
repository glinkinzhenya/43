const data = [];
function requestData(metod, action) {
    const xml = new XMLHttpRequest();
    xml.open(metod, action);
    xml.send();
    let parseArr = response2 => JSON.parse(response2);

    xml.addEventListener("readystatechange", () => {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = parseArr(xml.response).children;
            response.forEach(item => {
                data.push(item);
            })
        }
    })
}

requestData("GET", "data.json");
requestData("GET", "data2.json");
console.log(data);










