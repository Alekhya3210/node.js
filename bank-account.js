var account = {
	balance:0
};
//deposit(account, amount)
function deposit (account, amount){
	account.balance += amount; 
}
//withdraw(account, amount)
function withdraw (account, amount){
	account.balance -= amount;
}
//getBalance(account)
function getBalance (account){
	return account.balance;
}
deposit(account, 2000);
console.log(getBalance(account));
withdraw(account, 221);
console.log(getBalance(account));

