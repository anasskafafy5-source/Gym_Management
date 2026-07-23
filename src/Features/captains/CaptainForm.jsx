import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useAddCaptain } from "./useAddCaptain";
import { useUpdateCaptain } from "./useUpdateCaptain";

function CaptainForm({ captain = {}, onClose }) {
  const isEditSession = Boolean(captain?.id);

  const { addNewCaptainMutation, isPending: isAdding } = useAddCaptain();
  const { updateCaptainMutation, isUpdating } = useUpdateCaptain();

  const isWorking = isAdding || isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession
      ? {
          full_name: captain.full_name,
          phone: captain.phone,
          subscription_price: captain.subscription_price,
          notes: captain.notes,
        }
      : {},
  });

  function onSubmit(data) {
    if (isEditSession) {
      updateCaptainMutation(
        {
          id: captain.id,
          updatedCaptain: data,
        },
        {
          onSuccess: () => onClose?.(),
        },
      );
    } else {
      addNewCaptainMutation(data, {
        onSuccess: () => onClose?.(),
      });
    }
  }

  if (isWorking) return <Spinner />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 p-6 text-foreground"
    >
      <h2 className="text-2xl font-bold">
        {isEditSession ? "تعديل المدرب" : "إضافة مدرب"}
      </h2>

      {/* الاسم */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">الاسم</label>

        <input
          type="text"
          placeholder="اسم المدرب"
          disabled={isWorking}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground outline-none placeholder:text-muted focus:border-primary disabled:cursor-not-allowed disabled:bg-background disabled:text-muted"
          {...register("full_name", {
            required: "الاسم مطلوب",
          })}
        />

        {errors.full_name && (
          <p className="text-sm text-red-600">{errors.full_name.message}</p>
        )}
      </div>

      {/* رقم الهاتف */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">رقم الهاتف</label>

        <input
          type="tel"
          placeholder="01xxxxxxxxx"
          disabled={isWorking}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground outline-none placeholder:text-muted focus:border-primary disabled:cursor-not-allowed disabled:bg-background disabled:text-muted"
          {...register("phone", {
            required: "رقم الهاتف مطلوب",
            pattern: {
              value: /^01[0125][0-9]{8}$/,
              message: "رقم الهاتف غير صحيح",
            },
          })}
        />

        {errors.phone && (
          <p className="text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* سعر الاشتراك */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">سعر الاشتراك</label>

        <input
          type="number"
          placeholder="سعر الاشتراك"
          disabled={isWorking}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground outline-none placeholder:text-muted focus:border-primary disabled:cursor-not-allowed disabled:bg-background disabled:text-muted"
          {...register("subscription_price", {
            required: "سعر الاشتراك مطلوب",
            valueAsNumber: true,
          })}
        />

        {errors.subscription_price && (
          <p className="text-sm text-red-600">
            {errors.subscription_price.message}
          </p>
        )}
      </div>

      {/* الملاحظات */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">ملاحظات</label>

        <textarea
          rows={4}
          placeholder="اكتب أي ملاحظات..."
          disabled={isWorking}
          className="w-full resize-none rounded-lg border border-border bg-surface px-3 py-2 text-foreground outline-none placeholder:text-muted focus:border-primary disabled:cursor-not-allowed disabled:bg-background disabled:text-muted"
          {...register("notes")}
        />
      </div>

      <div className="flex justify-end gap-3 border-t border-border pt-5">
        <Button
          type="button"
          design="secondary"
          onClick={onClose}
          disabled={isWorking}
        >
          إلغاء
        </Button>

        <Button type="submit" disabled={isWorking}>
          {isEditSession ? "حفظ التعديلات" : "حفظ"}
        </Button>
      </div>
    </form>
  );
}

export default CaptainForm;
