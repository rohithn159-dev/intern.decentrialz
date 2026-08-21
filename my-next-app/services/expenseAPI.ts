


{/*export const addExpense = async (
  expense: Omit<Expense, "id">
): Promise<Expense> => {
  const response = await fetch("/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error("Failed to add expense");
  }

  return response.json();
};

//post


// DELETE
export const deleteExpense = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }
};*/}

import type { Expense } from "@/types/expense";

const API_URL = "/api/expenses";

// GET - Get all expenses
export const getExpenses = async (): Promise<Expense[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return response.json();
};

// POST - Add expense
export const addExpense = async (
  expense: Omit<Expense, "id">
): Promise<Expense> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    throw new Error("Failed to add expense");
  }

  return response.json();
};

// DELETE - Delete expense
export const deleteExpense = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }
};
