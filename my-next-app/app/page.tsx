"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Expense } from "@/types/expense";
import { getExpenses } from "@/services/expenseAPI";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      }
    };

    loadExpenses();
  }, []);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyExpenses = expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.date);

      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    })
    .reduce((total, expense) => total + expense.amount, 0);

  const recentExpenses = [...expenses]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Track and manage your expenses.
            </p>
          </div>

          <Link
            href="/add-expenses"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Expense
          </Link>
        </div>

        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              Total Expenses
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              ₹{totalExpenses.toFixed(2)}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              Total Transactions
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {expenses.length}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              This Month
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              ₹{monthlyExpenses.toFixed(2)}
            </h2>
          </div>

        </div>

        {/* Recent Expenses */}

        <div className="bg-white rounded-xl shadow p-6">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-gray-800">
              Recent Expenses
            </h2>

            <Link
              href="/expenses"
              className="text-blue-600 hover:underline"
            >
              View All
            </Link>
          </div>

          {recentExpenses.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No expenses added yet.
            </div>
          ) : (
            <div className="space-y-4">

              {recentExpenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {expense.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {expense.category} • {expense.date}
                    </p>
                  </div>

                  <p className="font-bold text-red-600">
                    - ₹{expense.amount.toFixed(2)}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </main>
  );
}