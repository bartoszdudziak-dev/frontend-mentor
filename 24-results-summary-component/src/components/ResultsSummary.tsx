import Result from './Result';
import Summary from './Summary';

function ResultsSummary() {
  return (
    <div className="flex flex-col max-w-[375px] lg:flex-row lg:max-w-[736px] lg:rounded-3xl shadow-md bg-neutral-white mx-auto">
      <Result />
      <Summary />
    </div>
  );
}
export default ResultsSummary;
