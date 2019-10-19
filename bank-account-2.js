var accounts = [];
//Account object
//balance
//username

//createAccount(account)
//push onto accounts array
//return account
function createAccount (account){
	accounts.push(account);
	return account;
}

//getAccount(username)
//find matching account using forEach
function getAccount(username){
	var matchedAccount;
   accounts.forEach(function(account){
	   if (account.username === username){
		   matchedAccount = account;
	   }
	   
   });
   return matchedAccount;
}

//deposit(account, amount)
function deposit (account, amount){
	account.balance +=amount;
}

	//withdraw(account, amount)
	func' withdraw(account, amount){
		account.balance -= amount;
	}
	//getBalance(account)
	function getBalance(account){
		return account.balance;
	}
	var alekyasAccount = createAccount({
		username:'Alekya',
		balance: 0
		
	});
	deposit(AlekyasAccount, 100);
	console.log(getBalance(alekyasAccount));