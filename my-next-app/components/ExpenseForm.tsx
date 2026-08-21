"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { addExpense } from "@/services/expenseAPI";

export default function ExpenseForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [loading] = useState(false);

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault();

    if (!title || !amount || !date) {
      setError("Please fill all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    try {
    await addExpense({
      title,
      amount: Number(amount),
      category,
      date,
    });

    router.push("/expenses");
  } catch (error) {
    setError("Failed to add expense.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-5"
    >

      {error && (
        <p className="bg-red-100 text-red-600 p-3 rounded-lg">
          {error}
        </p>
      )}

      {/* Title */}

      <div>
        <label className="block font-medium mb-2">
          Expense Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Example: Lunch"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Amount */}

      <div>
        <label className="block font-medium mb-2">
          Amount
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Example: 250"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}

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

      {/* Date */} {/*is just a comment inside React’s JSX code.*/}

                  
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

      

      {/* Button */}

      {/*<button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Add Expense
      </button>*/}

      {/* Buttons */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={() => router.push("/expenses")}
          className="rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Adding Expense..." : "Add Expense"}
        </button>

      </div>


    </form>
  );
}




{/*import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { addExpense } from "@/services/expenseAPI";

const categories = [
  {
    name: "Food",
    icon: "",
  },
  {
    name: "Travel",
    icon: "",
  },
  {
    name: "Shopping",
    icon: "",
  },
  {
    name: "Bills",
    icon: "",
  },
  {
    name: "Education",
    icon: "",
  },
  {
    name: "Entertainment",
    icon: "",
  },
  {
    name: "Other",
    icon: "",
  },
];

export default function ExpenseForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    // Title validation
    if (!title.trim()) {
      setError("Please enter an expense title.");
      return;
    }

    // Amount validation
    if (!amount) {
      setError("Please enter an amount.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    // Date validation
    if (!date) {
      setError("Please select a date.");
      return;
    }

    try {
      setLoading(true);

      await addExpense({
        title: title.trim(),
        amount: Number(amount),
        category,
        date,
      });

      setSuccess("Expense added successfully!");

      // Wait a little so user can see success message
      setTimeout(() => {
        router.push("/expenses");
      }, 800);

    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8"
    >

      {/* Form Header *
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900">
          Expense Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter the details of your expense.
        </p>
      </div>

      {/* Error Message *
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
           {error}
        </div>
      )}

      {/* Success Message *
      {success && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
           {success}
        </div>
      )}

      {/* Title *
      <div className="mb-6">

        <label className="block text-sm font-medium text-gray-700">
          Expense Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Example: Lunch"
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

      </div>

      {/* Amount *
      <div className="mb-6">

        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>

        <div className="relative mt-2">

          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            ₹
          </span>

          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

        </div>

      </div>

      {/* Category *
      <div className="mb-6">

        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">

          {categories.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setCategory(item.name)}
              className={`rounded-xl border p-4 text-left transition ${
                category === item.name
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >

              <div className="text-2xl">
                {item.icon}
              </div>

              <p className="mt-2 text-sm font-medium">
                {item.name}
              </p>

            </button>
          ))}

        </div>

      </div>

      {/* Date *
      <div className="mb-8">

        <label className="block text-sm font-medium text-gray-700">
          Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

      </div>

      {/* Buttons *
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={() => router.push("/expenses")}
          className="rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Adding Expense..." : "Add Expense"}
        </button>

      </div>

    </form>
  );
}*/}