// js/ui.js

// Update the dashboard UI
export function updateDashboardUI({ income, totalSpent, remaining, goal, progress }) {
    document.getElementById("incomeDisplay").textContent = income;
    document.getElementById("spentDisplay").textContent = totalSpent;
    document.getElementById("remainingDisplay").textContent = remaining;
    document.getElementById("goalDisplay").textContent = goal;
    document.getElementById("goalProgress").textContent = progress + "%";
}

// Update the survival message UI
export function updateSurvivalMessage({ text, status }) {
    const survivalMessage = document.getElementById("survivalMessage");
    survivalMessage.className = "";
    survivalMessage.textContent = text;
    survivalMessage.classList.add(status);
}
