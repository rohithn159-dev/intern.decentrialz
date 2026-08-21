"use client";

import Link from "next/link";
import { Expense } from "@/types/expense";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

export default function ExpenseList({
  expenses,
  onDelete,
}: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white p-10 rounded-xl shadow text-center">
        <p className="text-gray-500">
          No expenses found.
        </p>

        <Link
          href="/add-expenses"
          className="inline-block mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Your First Expense
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="bg-white p-6 rounded-xl shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {expense.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {expense.category}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {expense.date}
              </p>
            </div>

            <p className="text-xl font-bold text-red-600">
              ₹{expense.amount.toFixed(2)}
            </p>
          </div>

          <div className="flex gap-3 mt-5">
            <Link
              href={`/edit-expenses/${expense.id}`}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
            >
              Edit
            </Link>

            <button
              onClick={() => onDelete(expense.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}