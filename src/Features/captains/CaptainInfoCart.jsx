import {
  FaPhoneAlt,
  FaUsers,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaWarehouse,
} from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CaptainForm from "./CaptainForm";
import { useState } from "react";

function CaptainInfoCart({ captain }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl border border-border bg-surface p-6 text-foreground shadow-sm">
        {/* Header */}
        <div className="mb-8 border-b border-border pb-5">
          <h2 className="flex items-center justify-between text-2xl font-bold text-foreground">
            <p>{captain.full_name}</p>
            <p className="text-2xl font-bold text-primary">#{captain.id}</p>
          </h2>

          <div className="mt-2 mb-3 flex items-center gap-2 text-muted">
            <FaPhoneAlt className="text-primary" />
            <span>{captain.phone}</span>
          </div>

          {/* Start Edit/Delete Captain */}
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setIsOpen(true)}>
              <span>
                <CiEdit />
              </span>{" "}
              تعديل معلومات عن الكابتن
            </Button>

            <Button design="delete"> حذف الكابتن</Button>
          </div>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <CaptainForm captain={captain} />
          </Modal>
          {/* End Edit/Delete Captain */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Members */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-blue-900 dark:bg-blue-500/10">
            <div className="mb-4 flex items-center justify-between">
              <FaUsers className="text-3xl text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">الأعضاء</span>
            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {captain.members_count}
            </h3>
          </div>

          {/* Revenue */}
          <div className="rounded-2xl border border-green-100 bg-green-50/70 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-green-900 dark:bg-green-500/10">
            <div className="mb-4 flex items-center justify-between">
              <FaMoneyBillWave className="text-3xl text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                الإيرادات اخر 30 يوم
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {captain.total_revenue} ج.م
            </h3>
          </div>

          {/* Captain Share */}
          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <FaHandHoldingUsd className="text-3xl text-primary-hover" />
              <span className="text-xs font-medium text-primary-hover">
                نصيب المدرب اخر 30 يوم
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {captain.captain_share} ج.م
            </h3>

            <p className="mt-2 text-sm text-muted">
              ({captain.captain_percentage}%) النسبه الحاليه
            </p>
          </div>

          {/* Gym Share */}
          <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-purple-900 dark:bg-purple-500/10">
            <div className="mb-4 flex items-center justify-between">
              <FaWarehouse className="text-3xl text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                نصيب الصالة اخر 30 يوم
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {captain.gym_share} ج.م 
            </h3>

            <p className="mt-2 text-sm text-muted">
              ({captain.gym_percentage}%) النسبه الحاليه 
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-8 rounded-2xl border border-border bg-background p-5">
          <h3 className="mb-3 text-lg font-bold text-foreground">الملاحظات</h3>

          {captain.notes ? (
            <p className="leading-7 whitespace-pre-line text-foreground">
              {captain.notes}
            </p>
          ) : (
            <p className="text-muted italic">
              لا توجد ملاحظات لهذا الكابتن.
            </p>
          )}
        </div>
      </div>

      
    </>
  );
}

export default CaptainInfoCart;
