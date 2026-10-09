"use strict";
var Category;
(function (Category) {
    Category["Groceries"] = "groceries";
    Category["Rent"] = "rent";
    Category["Savings"] = "savings";
    Category["Dining"] = "dining";
    Category["Subscriptions"] = "subscriptions";
})(Category || (Category = {}));
const transactions = [
    { amount: 45.2, category: Category.Groceries, tag: "purchase" },
    { amount: 250.0, category: Category.Rent, tag: "purchase" },
    { amount: 12.5, category: Category.Groceries, tag: "purchase" },
    { amount: 500.0, category: Category.Savings, tag: "transfer" },
    { amount: 30.0, category: Category.Dining, tag: "purchase" },
    { amount: 8.99, category: Category.Subscriptions, tag: "purchase" },
    { amount: 22.4, category: Category.Dining, tag: "purchase" },
    { amount: 1200.0, category: Category.Rent, tag: "purchase" },
    { amount: 15.75, category: Category.Groceries, tag: "purchase" },
    { amount: 100.0, category: Category.Savings, tag: "transfer" },
    { amount: 4.99, category: Category.Subscriptions, tag: "purchase" },
    { amount: 9.99, category: Category.Subscriptions, tag: "purchase" },
];
function financeSorter(arr) {
    const totals = Object.values(Category).map((category) => ({
        category,
        total: arr
            .filter((transaction) => transaction.category === category && transaction.tag !== "transfer")
            .reduce((sum, transaction) => sum + transaction.amount, 0),
    }));
    const finalCalcs = totals.sort((a, b) => b.total - a.total);
    return finalCalcs.splice(0, 3);
}
console.log(financeSorter(transactions));
