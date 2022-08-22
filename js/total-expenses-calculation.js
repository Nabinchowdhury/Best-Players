document.getElementById("total-budget").addEventListener('click', function () {
    const playersExpense = calculatePlayersExpense();
    if (isNaN(playersExpense)) {
        return;
    }
    const onlyPlayersExpenses = parseInt(getTextById("players-expenses"))
    const managerExpense = getValueById("manager-expense");
    const coachExpense = getValueById("coach-expense");

    // console.log(managerExpense);
    const allTotalBudgetExpense = onlyPlayersExpenses + managerExpense + coachExpense;
    // console.log(allTotalBudgetExpense)
    if (isNaN(allTotalBudgetExpense)) {
        alert("Input A Proper Budget Amount In Numbers")
        setTextById("players-expenses", 0)
        setTextById("all-total-expenses", 0)
        return;
    }
    setTextById("all-total-expenses", allTotalBudgetExpense)
})
