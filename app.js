// ===== VARIABLES =====
import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { calculateTotalSpent, calculateRemaining, calculateGoalProgress, getSurvivalStatus } from "./calculations.js";
import { updateDashboardUI, updateSurvivalMessage } from "./ui.js";

// Import Firestore functions



let income = 0;
let goal = 0;
let expenses = [];


// ===== SELECT ELEMENTS =====
const incomeInput = document.getElementById("incomeInput");
const goalInput = document.getElementById("goalInput");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");



// ===== BUTTON EVENTS =====
document.getElementById("saveIncomeBtn").addEventListener("click", () => {
    income = parseFloat(incomeInput.value) || 0;
    updateDashboard();
});

document.getElementById("saveGoalBtn").addEventListener("click", () => {
    goal = parseFloat(goalInput.value) || 0;
    updateDashboard();
});
document.getElementById("addExpenseBtn").addEventListener("click", async () => {
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (!amount || !category) {
        alert("Please enter valid expense details.");
        return;
    }

    try {
        await addDoc(collection(db, "expenses"), {
             amount,
             category,
            createdAt: new Date()
        });

        expenseAmount.value = "";
        expenseCategory.value = "";

        await  loadExpenses(); // Reload from database
    } catch (error) {
        console.error("Error adding expense:", error);
    }
});
async function loadExpenses() {
    

    const snapshot = await getDocs(collection(db, "expenses"));
    expenses = snapshot.docs.map(doc => doc.data());

    

    updateDashboard();
}




// ===== CALCULATIONS =====
// function calculateTotalSpent() {
//     return expenses.reduce((total, expense) => total + expense.amount, 0);
// }

function updateDashboard() {
    const totalSpent = calculateTotalSpent(expenses);
    const remaining = calculateRemaining(income, totalSpent);
    const progress = calculateGoalProgress(goal, remaining);
    const survival = getSurvivalStatus(remaining, goal);

    updateDashboardUI({ income, totalSpent, remaining, goal, progress});
    updateSurvivalMessage(survival);

    
}



loadExpenses();


