document.getElementById("players-budget").addEventListener('click', function () {
    calculatePlayersExpense();

})

function calculatePlayersExpense() {
    const cardBody = document.getElementById("card-body")

    if (cardBody.children.length < 5) {
        return alert("You Must Select Five Players")
    }

    const perPlayerBudget = getValueById("per-player-budget");

    const totalPlayersExpenses = perPlayerBudget * 5;
    // console.log(perPlayerBudget)
    setTextById("players-expenses", totalPlayersExpenses)

    return totalPlayersExpenses;
}