import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaClipboardList,
  FaMoneyBillWave,
  FaUser,
  FaUserTie,
} from "react-icons/fa6";
import { formatCurrency } from "../../utils/helpers";

const transactionConfig = {
  new_member: {
    name: "اشتراك جديد",
    border: "border-primary",
    icon: "text-primary-hover",
    bg: "bg-primary/10",
  },

  renewal: {
    name: "تجديد اشتراك",
    border: "border-sky-500",
    icon: "text-sky-600",
    bg: "bg-sky-50 dark:bg-sky-500/10",
  },

  debt_payment: {
    name: "سداد مديونية",
    border: "border-emerald-500",
    icon: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
  },

  session: {
    name: "حصة",
    border: "border-violet-500",
    icon: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-500/10",
  },

  salary: {
    name: "مرتب",
    border: "border-yellow-500",
    icon: "text-yellow-600",
    bg: "bg-yellow-50 dark:bg-yellow-500/10",
  },

  expense: {
    name: "مصروف",
    border: "border-red-500",
    icon: "text-red-600",
    bg: "bg-red-50 dark:bg-red-500/10",
  },

  product: {
    name: "بيع منتج",
    border: "border-pink-500",
    icon: "text-pink-600",
    bg: "bg-pink-50 dark:bg-pink-500/10",
  },
};

export default function TransactionCard({ transaction }) {
  const {
    type_transaction,
    direction,
    amount_paid,
    notes,
    paid_at,
    captain_amount,
    gym_amount,
  } = transaction;

  const memberName = transaction.member?.full_name || "غير محدد";
  const captainName = transaction.captain?.full_name || "غير محدد";

  const isManual = type_transaction === "manual";

  if (isManual) {
    return (
      <div
        className={`rounded-lg border bg-surface p-2.5 text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
          direction === "income"
            ? "border-l-4 border-l-emerald-500"
            : "border-l-4 border-l-red-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                direction === "income"
                  ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                  : "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
              }`}
            >
              {direction === "income" ? (
                <FaArrowTrendUp size={11} />
              ) : (
                <FaArrowTrendDown size={11} />
              )}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {direction === "income" ? "إيراد يدوي" : "مصروف يدوي"}
              </h3>

              <p className="mt-0.5 text-[10px] text-muted">
                {notes || "لا توجد ملاحظات"}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div
              className={`text-lg font-bold ${
                direction === "income" ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {formatCurrency(amount_paid)} ج
            </div>

            <div className="mt-0.5 text-[9px] text-muted">{paid_at}</div>
          </div>
        </div>
      </div>
    );
  }

  const config = transactionConfig[type_transaction];

  return (
    <div
      className={`rounded-lg border border-l-4 border-border ${config?.border} bg-surface p-2.5 text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-lg ${config?.bg}`}
          >
            <FaClipboardList className={config?.icon} size={11} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {config?.name}
            </h3>

            <p className="mt-0.5 max-w-md text-[10px] leading-4 text-muted">
              {notes || "لا توجد ملاحظات"}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-lg font-bold text-foreground">
            {formatCurrency(amount_paid)} ج
          </div>

          <div className="mt-0.5 text-[9px] text-muted">{paid_at}</div>
        </div>
      </div>

      <div className="my-2.5 h-px bg-border" />

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Info icon={<FaUser size={9} />} title="العضو" value={memberName} />

        <Info
          icon={<FaUserTie size={9} />}
          title="الكابتن"
          value={captainName}
        />

        <Info
          icon={<FaMoneyBillWave size={9} />}
          title="نصيب النادي"
          value={
            gym_amount != null ? `${formatCurrency(gym_amount)} ج` : "غير متوفر"
          }
          color="orange"
        />

        <Info
          icon={<FaMoneyBillWave size={9} />}
          title="نصيب الكابتن"
          value={
            captain_amount != null
              ? `${formatCurrency(captain_amount)} ج`
              : "غير متوفر"
          }
          color="green"
        />
      </div>
    </div>
  );
}

function Info({ icon, title, value, color }) {
  const colors = {
    orange: "bg-primary/10 border-primary/20 text-primary-hover",
    green:
      "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-800 dark:text-emerald-400",
    default: "bg-background border-border text-foreground",
  };

  return (
    <div
      className={`rounded-md border p-2 transition duration-200 hover:shadow-sm ${
        colors[color] || colors.default
      }`}
    >
      <div className="mb-1 flex items-center gap-1.5 text-[9px] font-medium opacity-70">
        {icon}
        <span>{title}</span>
      </div>

      <div className="truncate text-xs font-bold">{value}</div>
    </div>
  );
}
