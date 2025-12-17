async function getjoke() {

    // api call 
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");

    // convert response to json format
    let data = await response.json();

    // get the joke on screen
    document.getElementById("joke").innerText = data.setup + " 😂 " + data.punchline;
}