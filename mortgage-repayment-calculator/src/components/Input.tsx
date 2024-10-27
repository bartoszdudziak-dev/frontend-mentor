import { type MortgageFormValues } from './lib/types';

import Affix from './Affix';
import Label from './Label';

import { useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import Error from './Error';

type AffixConfig = {
  type: 'prefix' | 'suffix';
  text: string;
};

type InputProps = React.ComponentProps<'input'> & {
  register: UseFormRegister<MortgageFormValues>;
  name: keyof MortgageFormValues;
  affix?: AffixConfig;
  label?: string;
  errorMessage?: string;
  validation?: RegisterOptions<MortgageFormValues>;
};

function Input({
  register,
  name,
  affix,
  label,
  errorMessage,
  validation = {},
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderStyle = errorMessage
    ? 'border-primary-red'
    : isFocused
      ? 'border-primary-lime'
      : 'hover:border-neutral-slate-900';

  return (
    <div className="flex w-full flex-col gap-150">
      {label && <Label htmlFor={name}>{label}</Label>}

      <div
        className={`${borderStyle} flex overflow-hidden rounded border border-neutral-slate-700 transition-colors duration-300`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {affix?.type === 'prefix' && (
          <Affix isFocused={isFocused} isError={Boolean(errorMessage)}>
            {affix.text}
          </Affix>
        )}

        <input
          id={name}
          {...register(name, validation)}
          className="f min-h-12 w-full cursor-pointer px-200 text-lg font-bold text-neutral-slate-900 outline-none"
          {...props}
        />

        {affix?.type === 'suffix' && (
          <Affix isFocused={isFocused} isError={Boolean(errorMessage)}>
            {affix.text}
          </Affix>
        )}
      </div>

      {errorMessage && <Error>{errorMessage}</Error>}
    </div>
  );
}

export default Input;
