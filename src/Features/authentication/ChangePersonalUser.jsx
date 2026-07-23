import { useEffect, useState } from "react";
import useUser from "./useUser";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";

export default function ChangePersonalUser() {
  const { user, isLoading } = useUser();
  const { updateUserMutation, isPending } = useUpdateUser();
  const [fullName, setFullName] = useState("");
  let email = user?.user_metadata?.email ?? "";

  useEffect(() => {
    if (!user) return;
    setFullName(user.user_metadata.fullName ?? "");
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserMutation({ fullName });
  }

  function handleCancel() {
    setFullName(user.user_metadata.fullName);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-6 text-right text-foreground"
    >
      <h5 className="text-[17px] font-semibold text-primary">
        تغير اسم المستخدم
      </h5>
      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          البريد الإلكتروني
        </label>

        <input
          type="email"
          value={email}
          disabled
          className="w-full cursor-not-allowed rounded-lg border border-border bg-background px-4 py-2 text-muted outline-none"
        />
      </div>

      {/* Full Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          اسم المستخدم
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-foreground transition outline-none placeholder:text-muted focus:border-primary"
          placeholder="اسم المستخدم"
        />
      </div>

      <div className="flex justify-between pt-2">
        <Button
          disabled={isLoading || isPending}
          design="secondary"
          type="button"
          onClick={handleCancel}
          className="rounded-lg border border-border px-5 py-2 font-medium text-foreground transition hover:bg-background"
        >
          إلغاء
        </Button>

        <Button
          disabled={isLoading || isPending}
          type="submit"
          className="rounded-lg bg-primary px-5 py-2 font-medium text-white transition hover:bg-primary-hover"
        >
          حفظ التعديلات
        </Button>
      </div>
    </form>
  );
}
