import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";

function DatePickerInput({
  name,
  control,
  label,
  rules,
  placeholder = "اختر التاريخ",
  minDate,
  maxDate,
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="relative">
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                onBlur={field.onBlur}
                placeholderText={placeholder}
                dateFormat="dd/MM/yyyy"
                minDate={minDate}
                maxDate={maxDate}
                className={`w-full rounded-xl border bg-surface py-3 pr-12 pl-4 text-sm text-foreground transition-all duration-200 outline-none placeholder:text-muted ${
                  error
                    ? "border-red-500 focus:border-red-500"
                    : "border-border focus:border-primary"
                }`}
              />

              <FaRegCalendarAlt className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-primary" />
            </div>

            {error && (
              <p className="mt-1 text-xs text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
}

export default DatePickerInput;
