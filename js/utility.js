function getValueById(id) {
    const elementId = document.getElementById(id);
    const targetValueString = elementId.value;
    const targetValue = parseInt(targetValueString);
    elementId.value = "";
    if (isNaN(targetValue)) {
        alert("Input A Proper Budget Amount In Numbers")
        return 0;
    }

    return targetValue;
}

function setTextById(id, value) {
    const targetId = document.getElementById(id);
    targetId.innerText = value;
}