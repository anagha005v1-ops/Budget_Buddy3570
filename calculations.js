// js/calculations.js

// Calculate total spent from an array of expenses
export function calculateTotalSpent(expenses) {
    
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Calculate remaining balance
export function calculateRemaining(income, totalSpent) {
    return income - totalSpent;
}

// Calculate savings goal progress
export function calculateGoalProgress(goal, remaining) {
    return goal > 0 ? ((remaining / goal) * 100).toFixed(1) : 0;
}

// Determine survival status
export function getSurvivalStatus(remaining, goal) {
    if (remaining < 0) {
        return { text: "⚠ Overspending! Negative balance.", status: "danger" };
    } 
    else if (remaining <= 500) {
        return { text: "⚠ SURVIVAL MODE ACTIVATED!", status: "danger" };
    } 
    else if (goal > 0 && remaining < goal) {
        return { text: "⚠ You are behind your savings goal.", status: "warning" };
    } 
    else if (goal > 0 && remaining >= goal) {
        return { text: "✅ You are on track!", status: "safe" };
    } 
    else {
        return { text: "💰 Manage your budget wisely.", status: "safe" };
    }
}
