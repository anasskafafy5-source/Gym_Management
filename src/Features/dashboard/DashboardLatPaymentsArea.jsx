import { Link } from "react-router-dom";
import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import SmallTransactionCard from "../transactions/SmallTransactionCard";
import { useLatestTransactions } from "../transactions/useLatestTransactions";

function DashboardLatPaymentsArea() {
  const { latestTransactions, isLoading, error } = useLatestTransactions();
  // console.log(latestTransactions);
  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <div className="mb-3 rounded-xl bg-surface px-2 py-4 text-foreground">
      <div className="my-4 flex items-center justify-between">
        <h3 className="font-bold text-xl ">آخر المعاملات</h3>
        <Link
          className="text-[13] font-semibold text-primary duration-300 hover:text-primary-hover"
          to="/payments"
        >
          عرض الكل
        </Link>
      </div>
      <div className="mb-3 flex flex-col gap-3 pb-3.5">
        {latestTransactions.map((transaction) => (
          <SmallTransactionCard
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardLatPaymentsArea;
