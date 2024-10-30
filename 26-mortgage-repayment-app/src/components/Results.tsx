import EmptyContainer from './EmptyContainer';
import ResultsSummary from './ResultsSummary';

import { ResultType } from './lib/types';

function Results({ result }: { result: ResultType | null }) {
  return (
    <div className="flex bg-neutral-slate-900 px-300 py-400 md:px-500 md:py-500 lg:rounded-bl-[80px]">
      {result ? <ResultsSummary result={result} /> : <EmptyContainer />}
    </div>
  );
}

export default Results;
