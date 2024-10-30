import Calculator from './Calculator';
import Results from './Results';

import { ResultType } from './lib/types';

import { useState } from 'react';

function MortgageCalculator() {
  const [result, setResult] = useState<ResultType | null>(null);

  return (
    <div className="mx-auto grid overflow-hidden bg-neutral-white shadow-lg sm:my-5 sm:max-w-[688px] sm:rounded-xl lg:max-w-[1008px] lg:grid-cols-2">
      <Calculator setResult={setResult} />
      <Results result={result} />
    </div>
  );
}

export default MortgageCalculator;
