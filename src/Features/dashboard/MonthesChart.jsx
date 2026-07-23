import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MONTHS = [
  "يناير",
  "فبراير",
  "مارس",
  "إبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

const formatNumber = (value) => Number(value || 0).toLocaleString("en-US");

const formatCurrency = (value) => `${formatNumber(value)} ج.م`;

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload;

  return (
    <div className="w-[220px] rounded-2xl border border-border bg-surface/95 p-4 text-foreground shadow-xl backdrop-blur">
      <h3 className="mb-3 border-b border-border pb-2 text-right text-sm font-bold text-primary-hover">
        {data.monthName}
      </h3>

      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted">إجمالي الدخل</span>

          <span className="font-semibold text-emerald-600">
            {formatCurrency(data.income)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted">إجمالي المصروفات</span>

          <span className="font-semibold text-red-500">
            {formatCurrency(data.expense)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted">نصيب المدربين</span>

          <span className="font-semibold text-sky-600">
            {formatCurrency(data.captains_amount)}
          </span>
        </div>

        <hr className="border-border" />

        <div className="flex items-center justify-between text-sm font-bold text-primary-hover">
          <span>صافي الربح</span>

          <span>{formatCurrency(data.net_profit)}</span>
        </div>
      </div>
    </div>
  );
}

export default function DashboardAreaChart({ data }) {
  const chartData = data.map((item) => ({
    ...item,
    monthName: MONTHS[item.month - 1],
  }));

  return (
    <div className="w-full min-w-0 rounded-2xl border border-border bg-surface p-3 text-foreground shadow-sm sm:p-5">
      <h2 className="mb-4 text-base font-bold text-foreground sm:text-lg">
        الأداء الشهري
      </h2>

      <div
        className="h-[320px] sm:h-[420px]"
        style={{
          touchAction: "pan-y",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 12,
              right: 8,
              left: -18,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--theme-primary)"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="var(--theme-primary)"
                  stopOpacity={0.03}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="var(--theme-border)"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="monthName"
              tickLine={false}
              axisLine={false}
              minTickGap={20}
              interval="preserveStartEnd"
              tick={{
                fill: "var(--theme-text-muted)",
                fontSize: 11,
              }}
            />

            <YAxis
              tickFormatter={formatNumber}
              tickLine={false}
              axisLine={false}
              width={45}
              tick={{
                fill: "var(--theme-text-muted)",
                fontSize: 11,
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "var(--theme-primary)",
                strokeDasharray: "4 4",
                strokeWidth: 1.5,
              }}
              wrapperStyle={{
                outline: "none",
                border: "none",
              }}
            />

            <Area
              type="monotone"
              dataKey="net_profit"
              stroke="var(--theme-primary)"
              strokeWidth={3}
              fill="url(#orangeGradient)"
              isAnimationActive
              animationDuration={700}
              dot={{
                r: 3,
                fill: "var(--theme-primary)",
                stroke: "var(--theme-surface)",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "var(--theme-primary-hover)",
                stroke: "var(--theme-surface)",
                strokeWidth: 3,
              }}
              style={{
                outline: "none",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
