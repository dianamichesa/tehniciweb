function addCat() {
    var namecat= document.getElementById("name").value;
    var weightcat = document.getElementById("weight").value;
    var colorcat = document.getElementById("color").value;
    let xhhtp = new XMLHttpRequest();

    xhhtp.onreadystatechange = function () {
        if (this.readyState === 4)
            alert("Request done" + this.status);
    };

    xhhtp.open("POST", "http://localhost:3000/cats/post");

    xhhtp.setRequestHeader("Content-Type", "application/json");

    let json = {
        name: namecat,
        weight: weightcat,
        color: colorcat,
    }
    var json_string = JSON.stringify(json);
    xhhtp.send(json_string);
}