import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { format } from "date-fns";

function SmallTransactionCard({ transaction }) {
  const isExpense = transaction.direction === "expense";

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 hover:shadow-md ${
        isExpense
          ? "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30"
          : "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl ${
          isExpense
            ? "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
            : "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400"
        }`}
      >
        {isExpense ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">
          {transaction.notes || "بدون وصف"}
        </h3>

        {transaction.members?.full_name && (
          <p className="mt-1 truncate text-xs text-muted">
            👤 {transaction.members.full_name}
          </p>
        )}

        <p className="mt-1 text-xs text-muted">
          {format(new Date(transaction.paid_at), "dd/MM/yyyy")}
        </p>
      </div>

      {/* Amount */}
      <div className="shrink-0 text-right">
        <p
          className={`text-lg font-bold ${
            isExpense
              ? "text-red-600 dark:text-red-400"
              : "text-green-600 dark:text-green-400"
          }`}
        >
          {isExpense ? "-" : "+"}
          {Number(transaction.amount_paid).toLocaleString()}
        </p>

        <span className="text-xs text-muted">EGP</span>
      </div>
    </div>
  );
}

export default SmallTransactionCard;
