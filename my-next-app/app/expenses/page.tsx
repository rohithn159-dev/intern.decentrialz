"use client";

{/*import { useEffect, useState } from "react";
import Link from "next/link";
import type { Expense } from "@/types/expense";
import { getExpenses, deleteExpense } from "@/services/expenseAPI";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Get expenses from API
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, []);

  // Delete expense
  const handleDelete = async (id: number) => {
    try {
      await deleteExpense(id);

      // Remove deleted expense from screen
      setExpenses((currentExpenses) =>
        currentExpenses.filter((expense) => expense.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  // Filter expenses
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

         Header 
        {/*<div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              All Expenses
            </h1>

            <p className="text-gray-600 mt-2">
              View and manage your expenses.
            </p>
          </div>

          <Link
            href="/add-expenses"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Expense
          </Link>
        </div>

         Filter 
        {/*<div className="bg-white p-4 rounded-xl shadow mb-6">
          <label className="font-medium mr-3">
            Filter:
          </label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="All">All</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        </div>

         Loading 
        {/*{loading ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            Loading expenses...
          </div>
        ) : filteredExpenses.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
            No expenses found.
          </div>
        ) : (
           Expenses 
          {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="bg-white rounded-xl shadow p-6"
              >
                <div className="flex justify-between">
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
                    ₹{Number(expense.amount).toFixed(2)}
                  </p>
                </div>

                 Buttons 
                {/*<div className="flex gap-3 mt-5">
                  <Link
                    href={`/edit-expense/${expense.id}`}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}*/}




{/*import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Expense } from "@/types/expense";
import { getExpenses, deleteExpense } from "@/services/expenseAPI";
import ExpenseList from "@/components/ExpensesList";

export default function ExpensesPage() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteExpense(id);

      setExpenses((currentExpenses) =>
        currentExpenses.filter((expense) => expense.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  const filteredExpenses = category
    ? expenses.filter(
        (expense) =>
          expense.category.toLowerCase() === category.toLowerCase()
      )
    : expenses;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Header 
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <p className="text-sm font-medium text-blue-600">
            Records
          </p>

          <h1 className="mt-1 text-4xl font-bold">
            {category ? `${category} Expenses` : "All Expenses"}
          </h1>

          <p className="mt-2 text-gray-500">
            {category
              ? `Showing expenses from the ${category} category.`
              : "View and manage all your recorded expenses."}
          </p>
        </div>

        <Link
          href="/add-expense"
          className="rounded-lg bg-blue-600 px-5 py-3 text-center font-medium text-white hover:bg-blue-700"
        >
          + Add Expense
        </Link>

      </div>

      {/* Category information 
      {category && (
        <div className="mb-6 flex items-center justify-between rounded-xl bg-blue-50 px-5 py-4">

          <p className="text-sm text-blue-700">
            Filter: <strong>{category}</strong>
          </p>

          <Link
            href="/expenses"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Clear Filter
          </Link>

        </div>
      )}

      {/* Loading 
      {loading ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <p className="text-gray-500">
            Loading expenses...
          </p>
        </div>
      ) : (
        <ExpenseList
          expenses={filteredExpenses}
          onDelete={handleDelete}
        />
      )}

    </main>
  );
}*/}




import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Expense } from "@/types/expense";
import {
  getExpenses,
  deleteExpense,
} from "@/services/expenseAPI";

import ExpenseList from "@/components/ExpensesList";

export default function ExpensesPage() {
  const searchParams = useSearchParams();

  // Get category from URL
  const categoryFromUrl = searchParams.get("category") || "";

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromUrl);

  const [loading, setLoading] = useState(true);

  // Load expenses from API
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await getExpenses();

        setExpenses(data);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, []);

  // Update selected category when URL changes
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  // Delete expense
  const handleDelete = async (id: number) => {
    try {
      await deleteExpense(id);

      setExpenses((currentExpenses) =>
        currentExpenses.filter(
          (expense) => expense.id !== id
        )
      );
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  // Search + category filtering
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      expense.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Calculate total
  const totalAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Clear filters
  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <p className="text-sm font-medium text-blue-600">
            Records
          </p>

          <h1 className="mt-1 text-4xl font-bold">
            Expenses
          </h1>

          <p className="mt-2 text-gray-500">
            Search, filter and manage your expenses.
          </p>
        </div>

        {/*<Link
          href="/add-expense"
          className="rounded-lg bg-blue-600 px-5 py-3 text-center font-medium text-white hover:bg-blue-700"
        >
          + Add Expense
        </Link>*/}

      </div>

      {/* Search and Filter */}
      <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">

        <div className="grid gap-4 md:grid-cols-3">

          {/* Search */}
          <div className="md:col-span-2">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Search Expenses
            </label>

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search by expense title..."
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

          {/* Category */}
          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >

              <option value="">
                All Categories
              </option>

              <option value="Food">
                 Food
              </option>

              <option value="Travel">
                 Travel
              </option>

              <option value="Shopping">
                 Shopping
              </option>

              <option value="Bills">
                 Bills
              </option>

              <option value="Education">
                 Education
              </option>

              <option value="Entertainment">
                 Entertainment
              </option>

              <option value="Other">
                 Other
              </option>

            </select>

          </div>

        </div>

        {/* Filter Summary */}
        <div className="mt-5 flex flex-col justify-between gap-3 border-t pt-5 md:flex-row md:items-center">

          <p className="text-sm text-gray-500">

            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredExpenses.length}
            </span>{" "}
            expense
            {filteredExpenses.length !== 1 && "s"}

          </p>

          {(search || selectedCategory) && (
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Clear Filters
            </button>
          )}

        </div>

      </section>

      {/* Total */}
      <section className="mb-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">

          <p className="text-sm text-gray-500">
            Filtered Total
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            ₹{totalAmount.toFixed(2)}
          </h2>

        </div>

        <div className="rounded-2xl bg-blue-600 p-6 text-white">

          <p className="text-sm text-blue-100">
            Current Filter
          </p>

          <h2 className="mt-2 text-xl font-bold">
            {selectedCategory || "All Categories"}
          </h2>

          {search && (
            <p className="mt-1 text-sm text-blue-100">
              Search: "{search}"
            </p>
          )}

        </div>

      </section>

      {/* Expense List */}
      {loading ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <p className="text-gray-500">
            Loading expenses...
          </p>
        </div>
      ) : (
        <ExpenseList
          expenses={filteredExpenses}
          onDelete={handleDelete}
        />
      )}

    </main>
  );
}