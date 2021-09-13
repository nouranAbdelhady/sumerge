var numberOfFaces = 3;
var leftSide = document.getElementById("leftSide");
var rightSide = document.getElementById("rightSide");
function previewFaces() {
    for (var i = 0; i < numberOfFaces; i++) {
        var face = document.createElement("img");
        face.setAttribute("src", "smileyFace.jpg");
        var top_position = Math.random() * 600;
        var left_position = Math.random() * 400;
        face.style.top = top_position + "px";
        face.style.left = left_position + "px";
        leftSide.appendChild(face);
    }
    //copy left grid onto right
    var leftGrid = leftSide.cloneNode(true);
    rightSide.appendChild(leftGrid);
    //extra face [odd one], if clicked should level up
    var extraFace = document.createElement("img");
    extraFace.setAttribute("src", "smileyFace.jpg");
    var top_position = Math.random() * 400;
    var left_position = Math.random() * 400;
    extraFace.style.top = top_position + "px";
    extraFace.style.left = left_position + "px";
    rightSide.appendChild(extraFace);
    rightSide.lastChild.onclick = function nextLevel(event) {
        alert("Level Up!");
        numberOfFaces += 2;
        //erase old images
        leftSide.innerHTML = "";
        rightSide.innerHTML = "";
        previewFaces();
    };
}
