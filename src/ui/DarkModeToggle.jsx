import { TbMoonStars, TbSunHigh } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex cursor-pointer items-center justify-center rounded-full p-1.5 text-orange-500 transition-colors duration-200 hover:text-orange-600"
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={isDark ? "الوضع الفاتح" : "الوضع الداكن"}
      aria-pressed={isDark}
    >
      {isDark ? (
        <TbSunHigh className="h-4 w-4" aria-hidden="true" />
      ) : (
        <TbMoonStars className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

export default DarkModeToggle;
