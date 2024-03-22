{
    type Transaction = {
        description: string;
        amount: number;
        date: Date;
    }

    const transactions: Transaction[] = [];

    const addTransaction = () => {
        const description: HTMLInputElement = document.getElementById('description') as HTMLInputElement;
        const amount: HTMLInputElement = document.getElementById('amount') as HTMLInputElement;

        const transaction: Transaction = {
            description: description.value,
            amount: +amount.value,
            date: new Date()
        }
        transactions.push(transaction);

        console.log(transactions);

        updateDisplay();
       
    }

    const updateDisplay = () => {
        const description: HTMLInputElement = document.getElementById('description') as HTMLInputElement;
        const amount: HTMLInputElement = document.getElementById('amount') as HTMLInputElement;
        const balance: HTMLSpanElement = document.getElementById('balance') as HTMLSpanElement;

        const transcationsArea = document.getElementById('transactions') as HTMLDivElement;

        const list: string[] = transactions.map(transaction => {
            return (`<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`);
        });

        transcationsArea.innerHTML = `<ul>${list.join()}</ul>`

        const balanceValue = transactions.reduce((total, transaction) => total + transaction.amount, 0).toString();

        balance.innerText = balanceValue;

        description.value = '';
        amount.value = '';
    }
}