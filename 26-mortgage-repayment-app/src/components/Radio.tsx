import { UseFormRegister } from 'react-hook-form';
import { MortgageFormValues, RadioValues } from './lib/types';

type RadioProps = {
  register: UseFormRegister<MortgageFormValues>;
  value: RadioValues;
  label?: string;
  isChecked: boolean;
};

function Radio({ register, value, label, isChecked }: RadioProps) {
  return (
    <label
      className={`${isChecked ? 'border-primary-lime bg-primary-lime bg-opacity-20' : 'border-neutral-slate-700 bg-neutral-white'} flex h-12 cursor-pointer items-center gap-200 overflow-hidden rounded border px-200 transition-colors duration-300 hover:border-primary-lime`}
      htmlFor={value}
    >
      <span className="relative grid items-center">
        <input
          {...register('type', { required: 'This field is required' })}
          type="radio"
          value={value}
          id={value}
          className={`${isChecked ? 'border-primary-lime' : 'border-neutral-slate-700'} size-5 cursor-pointer appearance-none rounded-full border-2 transition-colors duration-300`}
        />
        <span
          className={`${isChecked ? 'bg-primary-lime' : 'bg-neutral-white'} absolute left-1/2 top-1/2 size-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300`}
        ></span>
      </span>

      {label && (
        <span className="text-lg font-bold text-neutral-slate-900">
          {label}
        </span>
      )}
    </label>
  );
}

export default Radio;
