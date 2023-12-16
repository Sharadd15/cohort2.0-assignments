/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length == 0)
    return [];

  let ans = [];
  for(i = 0; i < transactions.length; ++i)
  {
      let o1 = ans.find(function(trxn) 
        { 
          return trxn.category === transactions[i].category
        });
      if(o1 === undefined)
      {
        o1 = {category: transactions[i].category, totalSpent: transactions[i].price};
        ans.push(o1);
      }
      else
        o1.totalSpent += transactions[i].price;
  }
  return ans;
}
module.exports = calculateTotalSpentByCategory;
