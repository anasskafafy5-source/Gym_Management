import { useForm } from "react-hook-form";
import { FaUser, FaUserTie, FaMoneyBillWave } from "react-icons/fa6";
import Button from "../../ui/Button";
import { formatDateForDB } from "../../utils/helpers";
import { useAddSession } from "./useAddSession";
import Spinner from "../../ui/Spinner";

function SessionForm({ onClose, captains = [], defaultPrice }) {
  const { addSessionMutation, isPending } = useAddSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      member_name: "",
      price: defaultPrice,
    },
  });

  const price = Number(watch("price"));

  function onSubmit(data) {
    const sessionData = {
      ...data,
      date: formatDateForDB(new Date()),
    };
    addSessionMutation(sessionData, {
      onSettled: () => onClose(),
    });
  }

  if (isPending) return <Spinner />;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl bg-surface p-5 text-foreground shadow-sm"
    >
      {/* Member */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          اسم العضو
        </label>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
          <FaUser className="text-muted" />

          <input
            type="text"
            placeholder="اكتب اسم العضو"
            {...register("member_name", {
              required: "يرجى إدخال اسم العضو",
            })}
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted"
          />
        </div>

        {errors.member_name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.member_name.message}
          </p>
        )}
      </div>

      {/* Captain */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          الكابتن
        </label>

        <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
          <FaUserTie className="text-muted" />

          <select
            {...register("captain_id", {
              required: "اختر الكابتن",
            })}
            className="w-full bg-background text-foreground outline-none p-2 rounded-xs"
          >
            <option value="">اختر الكابتن</option>

            {captains.map((captain) => (
              <option className="bg-background hover:bg-surface" key={captain.id} value={captain.id}>
                {captain.full_name}
              </option>
            ))}
          </select>
        </div>

        {errors.captain_id && (
          <p className="mt-1 text-sm text-red-500">
            {errors.captain_id.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          المبلغ المدفوع
        </label>

        <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
          <FaMoneyBillWave className="text-muted" />

          <input
            type="number"
            placeholder="أدخل المبلغ"
            {...register("price", {
              required: "يرجى إدخال المبلغ المدفوع",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "السعر غير صالح",
              },
            })}
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted"
          />
        </div>

        {price < defaultPrice && (
          <p className="mt-2 rounded-md bg-yellow-50 p-2 text-sm text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300">
            ⚠️ المبلغ أقل من السعر الافتراضي للجيم.
          </p>
        )}

        {errors.price && (
          <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
        )}
      </div>

      <Button type={"submit"}>
        {isPending ? "جاري إضافة الحصة..." : "إضافة الحصة"}
      </Button>
    </form>
  );
}

export default SessionForm;
