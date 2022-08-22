function getValueById(id) {
    const elementId = document.getElementById(id);
    const targetValueString = elementId.value;
    const targetValue = parseInt(targetValueString);
    elementId.value = "";
    return targetValue;
}

function setTextById(id, value) {
    const targetId = document.getElementById(id);
    targetId.innerText = value;
}