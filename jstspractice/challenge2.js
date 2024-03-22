{
    var transactions_1 = [];
    var addTransaction = function () {
        var description = document.getElementById('description');
        var amount = document.getElementById('amount');
        var transaction = {
            description: description.value,
            amount: +amount.value,
            date: new Date()
        };
        transactions_1.push(transaction);
        console.log(transactions_1);
        updateDisplay_1();
    };
    var updateDisplay_1 = function () {
        var description = document.getElementById('description');
        var amount = document.getElementById('amount');
        var balance = document.getElementById('balance');
        var transcationsArea = document.getElementById('transactions');
        var list = transactions_1.map(function (transaction) {
            return ("<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>"));
        });
        transcationsArea.innerHTML = "<ul>".concat(list.join(), "</ul>");
        var balanceValue = transactions_1.reduce(function (total, transaction) { return total + transaction.amount; }, 0).toString();
        balance.innerText = balanceValue;
        description.value = '';
        amount.value = '';
    };
}
