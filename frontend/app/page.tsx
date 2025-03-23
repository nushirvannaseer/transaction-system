import { TransactionsList } from "@/components/TransactionsList";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-8 md:p-12 bg-background text-foreground">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Transaction Viewer</h1>
        <ThemeToggle />
      </header>

      <main className="flex-1">
        <TransactionsList />
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Transaction Viewer</p>
      </footer>
    </div>
  );
}
