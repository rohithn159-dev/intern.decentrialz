import { NextResponse } from "next/server";
import type { Expense } from "@/types/expense";
import { readExpenses, writeExpenses } from "@/services/expenseStore";

export async function GET() {
  return NextResponse.json(await readExpenses());
}

export async function POST(request: Request) {
  const data = await request.json();
  const expenses = await readExpenses();

  const newExpense: Expense = {
    id: Date.now(),
    title: data.title,
    amount: Number(data.amount),
    category: data.category,
    date: data.date,
  };

  expenses.push(newExpense);
  await writeExpenses(expenses);

  return NextResponse.json(newExpense, { status: 201 });
}