import CarbonNeutralIcon from '../icons/CarbonNeutralIcon';

function CarbonInfo() {
  return (
    <div className="flex justify-center gap-2 rounded-lg bg-rose-50 p-4 text-sm">
      <CarbonNeutralIcon />
      <p className="text-rose-900">
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>
    </div>
  );
}

export default CarbonInfo;
