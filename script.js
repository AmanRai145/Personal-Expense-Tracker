// Initial amount
let totalAmount = 1000;

function subtractAmount() {
    // Get the input value
    const amount = parseInt(document.getElementById('amountToSubtract').value);
    const history = document.getElementById('whometopay').value;
    
    // Check if input is a valid number
    if (!isNaN(amount) && amount > 0) {
        // Subtract the input amount from total
        totalAmount -= amount;

        // Update the displayed total amount
        document.getElementById('totalAmount').textContent = `$${totalAmount}`;
        document.getElementById('his').textContent = `$${amount}`;
        document.getElementById('hist').textContent = `${history}`;
    } else {
        alert('Please enter a valid number');
    }
}   

 








