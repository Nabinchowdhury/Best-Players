let count = 0;
function selectPlayer(event) {
    count++
    const cardBody = document.getElementById("card-body");
    // console.log(cardBody);
    if (count <= 5) {
        const selectedBtn = event;
        selectedBtn.style.backgroundColor = "grey";
        selectedBtn.disabled = true;

        const selectedPlayerName = event.parentNode.children[0].innerText;
        const showSelectedPlayerName = document.createElement("ul");
        showSelectedPlayerName.className = "text-start";
        showSelectedPlayerName.style.listStyle = "none";
        // <ul class="text-start" style="list-style: none">
        showSelectedPlayerName.innerHTML = `
        
        <li class="my-4">${count}. ${selectedPlayerName}</li></ul>
        `
        cardBody.appendChild(showSelectedPlayerName)

        // selectedBtn.className = "bg-secondary",
        // console.log(selectedPlayerName);
    }
    else { alert("Already selected five Players") }


}