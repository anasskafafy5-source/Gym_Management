//MemberCard.jsx before MemberRow

import {
  FaUser,
  FaPhone,
  FaUserTie,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";
import MemberActionBar from "./MemberActionBar";
import { formatCurrency } from "../../utils/helpers";

function MemberCard({ member }) {
  const statusColors = {
    green:
      "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
    yellow:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
    red: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
    blue:
      "bg-blue-100 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:ring-blue-800",
    gray: "bg-background text-muted",
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top Border */}
      <div className="h-1 bg-primary" />

      <div className="space-y-5 p-5">
        {/* Header */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <FaUser className="text-primary" />
            {member.full_name}
          </h2>

          <div className="mt-3 space-y-2 text-sm text-muted">
            <p className="flex items-center gap-2">
              <FaPhone />
              {member.phone || "غير مسجل"}
            </p>

            <p className="flex items-center gap-2">
              <FaUserTie />
              {member.captain_name}
            </p>
          </div>
        </div>

        {/* Subscription */}
        <div className="rounded-xl bg-primary/10 p-4">
          <h3 className="mb-3 font-semibold text-foreground">الاشتراك</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaCalendarDays className="text-primary" />
                البداية
              </span>

              <span>{member.subscription_start_date}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaCalendarDays className="text-primary" />
                النهاية
              </span>

              <span>{member.subscription_end_date}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaClock className="text-primary" />
                المتبقي
              </span>

              <span
                className={
                  member.days_left < 0
                    ? "font-semibold text-red-600"
                    : member.days_left === 0
                      ? "font-semibold text-primary-hover"
                      : "font-semibold text-green-600"
                }
              >
                {member.days_left > 0
                  ? `${member.days_left} يوم`
                  : member.days_left === 0
                    ? "آخر يوم"
                    : `منتهي من ${Math.abs(member.days_left)} يوم`}
              </span>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                statusColors[member.status_color] || statusColors.gray
              }`}
            >
              {member.status_text}
            </span>

            {member.has_remaining ? (
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-hover">
                💰 عليه {formatCurrency(member.remaining_amount)} ج.م
              </span>
            ) : (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-400">
                💰 مدفوع بالكامل
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <MemberActionBar member={member} />
      </div>
    </div>
  );
}

export default MemberCard;
