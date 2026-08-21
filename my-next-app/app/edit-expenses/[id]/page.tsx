"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Expense } from "@/types/expense";

export default function EditExpensePage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (!savedExpenses) {
      return;
    }

    const expenses: Expense[] = JSON.parse(savedExpenses);

    const expense = expenses.find(
      (item) => item.id === id
    );

    if (expense) {
      setTitle(expense.title);
      setAmount(expense.amount.toString());
      setCategory(expense.category);
      setDate(expense.date);
    }
  }, [id]);

  const handleUpdate = (event: FormEvent) => {
    event.preventDefault();

    if (!title || !amount || !date) {
      setError("Please fill all fields.");
      return;
    }

    const savedExpenses = localStorage.getItem("expenses");

    if (!savedExpenses) {
      return;
    }

    const expenses: Expense[] = JSON.parse(savedExpenses);

    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === id) {
        return {
          ...expense,
          title,
          amount: Number(amount),
          category,
          date,
        };
      }

      return expense;
    });

    localStorage.setItem(
      "expenses",
      JSON.stringify(updatedExpenses)
    );

    router.push("/expenses");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Edit Expense
        </h1>

        <p className="text-gray-600 mb-8">
          Update your expense details.
        </p>

        <form
          onSubmit={handleUpdate}
          className="bg-white p-6 rounded-xl shadow space-y-5"
        >

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-lg">
              {error}
            </p>
          )}

          <div>
            <label className="block font-medium mb-2">
              Expense Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Education">Education</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Update Expense
          </button>

        </form>

      </div>
    </main>
  );
}