import { useForm } from "react-hook-form";
import {
  FaMoneyBillWave,
  FaNoteSticky,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";
import { useAddNewTransaction } from "./useAddNewTransaction";
import Spinner from "../../ui/Spinner";
import { formatDateForDB } from "../../utils/helpers";

function TransactionForm({ onClose }) {
  const { addNewTransactionMutation, isPending: isLoading } =
    useAddNewTransaction();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      direction: "expense",
      amount_paid: "",
      notes: "",
    },
  });

  const direction = watch("direction");

  function handleForm(data) {
    const newTransaction = {
      member_id: null,
      captain_id: null,
      gym_amount: data.direction === "income" ? Number(data.amount_paid) : 0,
      captain_amount: 0,
      type_transaction: "manual",

      direction: data.direction, // income | expense

      amount_paid: Number(data.amount_paid),

      notes: data.notes.trim(),

      paid_at: formatDateForDB(new Date()),
    };

    addNewTransactionMutation(newTransaction, {
      onSettled: () => onClose?.(),
    });
  }

  if (isLoading) return <Spinner />;
  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="space-y-6 rounded-2xl bg-surface p-6 text-foreground shadow-lg"
    >
      <h2 className="text-center text-2xl font-bold text-foreground">
        تسجيل عملية مالية
      </h2>

      {/* اتجاه العملية */}

      <div>
        <label className="mb-3 block font-semibold text-foreground">
          نوع العملية
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Income */}

          <label
            className={`cursor-pointer rounded-xl border p-5 transition ${
              direction === "income"
                ? "border-green-500 bg-green-50 dark:bg-green-500/10"
                : "border-border hover:border-green-300 dark:hover:border-green-700"
            }`}
          >
            <input
              hidden
              type="radio"
              value="income"
              {...register("direction")}
            />

            <div className="flex items-start gap-4">
              <FaArrowTrendUp className="mt-1 text-2xl text-green-600" />

              <div>
                <h3 className="font-bold text-green-600">إيراد</h3>

                <p className="mt-1 text-sm text-muted">
                  أي مبلغ دخل إلى الصالة مثل بيع منتج أو أي دخل إضافي.
                </p>
              </div>
            </div>
          </label>

          {/* Expense */}

          <label
            className={`cursor-pointer rounded-xl border p-5 transition ${
              direction === "expense"
                ? "border-red-500 bg-red-50 dark:bg-red-500/10"
                : "border-border hover:border-red-300 dark:hover:border-red-700"
            }`}
          >
            <input
              hidden
              type="radio"
              value="expense"
              {...register("direction")}
            />

            <div className="flex items-start gap-4">
              <FaArrowTrendDown className="mt-1 text-2xl text-red-600" />

              <div>
                <h3 className="font-bold text-red-600">مصروف</h3>

                <p className="mt-1 text-sm text-muted">
                  أي مبلغ خرج من الصالة مثل المرتبات أو الإيجار أو الكهرباء أو
                  الصيانة أو شراء الأدوات.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Amount */}

      <div>
        <label className="mb-2 block font-semibold text-foreground">
          المبلغ
        </label>

        <div className="relative">
          <FaMoneyBillWave className="absolute top-1/2 left-4 -translate-y-1/2 text-muted" />

          <input
            type="number"
            placeholder="أدخل قيمة المبلغ"
            {...register("amount_paid", {
              required: "يرجى إدخال المبلغ",
              min: {
                value: 1,
                message: "المبلغ يجب أن يكون أكبر من صفر",
              },
            })}
            className="w-full rounded-xl border border-border bg-surface py-3 pr-4 pl-11 text-foreground transition outline-none placeholder:text-muted focus:border-primary"
          />
        </div>

        {errors.amount_paid && (
          <p className="mt-1 text-sm text-red-500">
            {errors.amount_paid.message}
          </p>
        )}
      </div>

      {/* السبب */}

      <div>
        <label className="mb-2 block font-semibold text-foreground">
          سبب العملية
        </label>

        <div className="relative">
          <FaNoteSticky className="absolute top-3 left-4 text-muted" />

          <input
            type="text"
            placeholder="مثال: بيع مياه أو كهرباء"
            {...register("notes", {
              required: "يرجى كتابة سبب العملية",
              validate: (value) =>
                value.trim().split(/\s+/).length <= 2 || "يسمح بكلمتين فقط",
            })}
            className="w-full rounded-xl border border-border bg-surface py-3 pr-4 pl-11 text-foreground transition outline-none placeholder:text-muted focus:border-primary"
          />
        </div>

        <p className="mt-2 text-xs text-muted">
          اكتب سببًا مختصرًا يوضح طبيعة العملية (بحد أقصى كلمتين).
        </p>

        {errors.notes && (
          <p className="mt-1 text-sm text-red-500">{errors.notes.message}</p>
        )}
      </div>

      {/* Preview */}

      <div
        className={`rounded-xl border p-4 ${
          direction === "income"
            ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-500/10"
            : "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-500/10"
        }`}
      >
        <p className="font-semibold">
          {direction === "income"
            ? "📈 سيتم تسجيل العملية كإيراد."
            : "📉 سيتم تسجيل العملية كمصروف."}
        </p>

        <p className="mt-2 text-sm text-muted">
          سيتم حفظ تاريخ ووقت العملية تلقائيًا عند الضغط على زر الحفظ.
        </p>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full rounded-xl py-3 font-semibold text-white transition ${
          direction === "income"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700"
        } disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {isLoading ? "جارٍ الحفظ..." : "حفظ العملية"}
      </button>
    </form>
  );
}

export default TransactionForm;
