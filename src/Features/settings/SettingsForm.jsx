import { useForm } from "react-hook-form";
import {
  FaPercent,
  FaMoneyBillWave,
  FaCalendarDays,
  FaDumbbell,
} from "react-icons/fa6";
import { useGetSettings } from "./useGetSettings";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import Button from "../../ui/Button";
import { useEffect } from "react";
import { useUpdateSettings } from "./useUpdateSettings";

function SettingsForm() {
  const { settings, isLoading, error } = useGetSettings();

  const { updateSettingsMutations, isPending } = useUpdateSettings();

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      gym_name: "",
      percentage: 0,
      session_price: 0,
      expiring_soon_days: 0,
    },
  });

  useEffect(() => {
    if (settings) {
      reset(settings);
    }
  }, [settings, reset]);

  const percentage = Number(watch("percentage") || 0);

  function onSubmit(data) {
    updateSettingsMutations(data);
  }

  if (isLoading || isPending) return <Spinner />;
  if (error) return <Error />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-1.5 mx-auto mt-4 max-w-4xl space-y-6 rounded-2xl bg-surface p-6 text-foreground shadow-sm"
    >
      {/* <div>
        <h2 className="text-xl font-bold text-slate-800">إعدادات الصالة</h2>

        <p className="mt-1 text-sm text-slate-500">
          يمكنك تعديل بيانات الصالة والإعدادات العامة من هنا.
        </p>
      </div> */}

      <div className="grid gap-5 md:grid-cols-2">
        {/* Gym Name */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-foreground">
            <FaDumbbell className="text-primary" />
            اسم الصالة
          </label>

          <input
            {...register("gym_name")}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground transition outline-none placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="مثال : Power Gym"
          />

          <p className="text-xs text-muted">
            الاسم الذي سيظهر داخل النظام.
          </p>
        </div>

        {/* gym area */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-foreground">
            <FaDumbbell className="text-primary" />
            مكان الصاله
          </label>

          <input
            {...register("gym_area")}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground transition outline-none placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="مثال : الجيزه"
          />

          <p className="text-xs text-muted">
            الاسم الذي سيظهر داخل النظام.
          </p>
        </div>

        {/* Session Price */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-foreground">
            <FaMoneyBillWave className="text-primary" />
            سعر الحصة
          </label>

          <input
            type="number"
            {...register("session_price")}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground transition outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
          />

          <p className="text-xs text-muted">
            السعر الافتراضي للحصة الواحدة.
          </p>
        </div>

        {/* Expiring Soon */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-foreground">
            <FaCalendarDays className="text-primary" />
            قبل انتهاء الاشتراك
          </label>

          <input
            type="number"
            {...register("expiring_soon_days")}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground transition outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
          />

          <p className="text-xs text-muted">
            عدد الأيام التي يبدأ عندها ظهور تنبيه انتهاء الاشتراك.
          </p>
        </div>

        {/* Percentage */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 font-medium text-foreground">
            <FaPercent className="text-primary" />
            نسبة الصالة
          </label>

          <input
            type="number"
            min="0"
            max="100"
            {...register("percentage")}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground transition outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
          />

          <p className="text-xs text-muted">
            النسبة التي تحصل عليها الصالة من قيمة الحصة.
          </p>
        </div>
      </div>

      {/* Percentage Preview */}

      <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
        <h3 className="mb-4 font-semibold text-primary-hover">توزيع قيمة الحصة</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-surface p-4 shadow-sm">
            <p className="text-sm text-muted">نسبة الصالة</p>

            <h2 className="mt-1 text-3xl font-bold text-primary-hover">
              {percentage}%
            </h2>
          </div>

          <div className="rounded-xl bg-surface p-4 shadow-sm">
            <p className="text-sm text-muted">نسبة المدرب</p>

            <h2 className="mt-1 text-3xl font-bold text-emerald-600">
              {100 - percentage}%
            </h2>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted">
          يتم احتساب نسبة المدرب تلقائياً بحيث يكون مجموع النسبتين 100%.
        </p>
      </div>

      <div className="flex justify-end">
        <Button type="submit">حفظ التغيرات </Button>
      </div>
    </form>
  );
}

export default SettingsForm;
