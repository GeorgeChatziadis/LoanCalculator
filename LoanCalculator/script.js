function computeLoan() {
    var amount = document.getElementById('amount').value;
    var interest_rate = document.getElementById('interest_rate').value;
    var months = document.getElementById('months').value;
    var interest = (amount * (interest_rate * 0.01)) / months;
    var payment = ((amount / months) + interest).toFixed(2); //two numbers after the decimal
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //puts a comma every three digits
    document.getElementById('payment').innerHTML = 'Monthly Payment = $' + payment;
}