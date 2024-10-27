import { formatNumber } from './lib/helpers';
import { ResultType } from './lib/types';

function ResultsSummary({ result }: { result: ResultType }) {
  return (
    <div className="space-y-300 md:space-y-500">
      <div className="space-y-200">
        <h2 className="text-2xl font-bold text-neutral-white">Your results</h2>
        <p className="text-neutral-slate-300">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>

      <div className="divide-y divide-neutral-slate-300 divide-opacity-25 rounded-lg border-t-4 border-t-primary-lime bg-black bg-opacity-25 p-200 md:p-400">
        <div className="grid gap-100 pb-400">
          <span className="text-neutral-slate-300">
            Your monthly {result.type}
          </span>
          <span className="text-[3.5rem] font-bold leading-none text-primary-lime">
            £{formatNumber(result.monthly)}
          </span>
        </div>
        <div className="grid gap-100 pt-400">
          <span className="text-neutral-slate-300">
            {result.type === 'repayment'
              ? 'Total you`ll repay over the term'
              : 'Total amount of interests over the term'}
          </span>
          <span className="font-bold text-neutral-white">
            £{formatNumber(result.total)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultsSummary;
