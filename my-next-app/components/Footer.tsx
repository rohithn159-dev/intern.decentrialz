export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold">
              Expense Tracker
            </h2>

            <p className="text-gray-400 mt-3 text-sm">
              A simple application to record,
              manage and track your expenses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="space-y-2 text-sm text-gray-400">
              <p>Dashboard</p>
              <p>Expenses</p>
              <p>Add Expense</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">
              Categories
            </h3>

            <div className="space-y-2 text-sm text-gray-400">
              <p>Food</p>
              <p>Travel</p>
              <p>Shopping</p>
              <p>Bills</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Expense Tracker. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}