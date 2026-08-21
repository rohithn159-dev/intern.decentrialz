import ExpenseForm from "@/components/ExpenseForm";

export default function AddExpensePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Add Expense
        </h1>

        <p className="text-gray-600 mb-8">
          Add a new expense to your tracker.
        </p>

        <ExpenseForm />

      </div>
    </main>
  );
}

