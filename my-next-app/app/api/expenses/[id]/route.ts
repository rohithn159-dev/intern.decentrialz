import { NextResponse } from "next/server";
import { readExpenses, writeExpenses } from "@/services/expenseStore";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const expenseId = Number(id);
  const expenses = await readExpenses();
  const expenseIndex = expenses.findIndex(
    (expense) => expense.id === expenseId
  );

  if (expenseIndex === -1) {
    return NextResponse.json(
      { message: "Expense not found" },
      { status: 404 }
    );
  }

  expenses.splice(expenseIndex, 1);
  await writeExpenses(expenses);

  return NextResponse.json({
    message: `Expense ${expenseId} deleted successfully`,
  });
}