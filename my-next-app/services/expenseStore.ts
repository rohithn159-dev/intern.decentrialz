import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Expense } from "@/types/expense";

const dataDirectory = path.join(process.cwd(), "data");
const dataFile = path.join(dataDirectory, "expenses.json");

export async function readExpenses(): Promise<Expense[]> {
  try {
    const file = await readFile(dataFile, "utf8");
    return JSON.parse(file) as Expense[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }

    return [];
  }
}

export async function writeExpenses(expenses: Expense[]): Promise<void> {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(dataFile, JSON.stringify(expenses, null, 2), "utf8");
}