document.getElementById("total-budget").addEventListener('click', function () {
    const playersExpense = calculatePlayersExpense();
    const managerExpense = getValueById("manager-expense");
    const coachExpense = getValueById("coach-expense");

    // console.log(managerExpense);
    const allTotalBudgetExpense = playersExpense + managerExpense + coachExpense;
    // console.log(allTotalBudgetExpense)
    if (isNaN(allTotalBudgetExpense)) {
        alert("Input A Proper Budget Amount In Numbers")
        setTextById("all-total-expenses", 0)
        return;
    }
    setTextById("all-total-expenses", allTotalBudgetExpense)
})
