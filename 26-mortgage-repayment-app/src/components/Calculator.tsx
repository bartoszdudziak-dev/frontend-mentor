import { SubmitHandler, useForm } from 'react-hook-form';
import { MortgageFormValues, ResultType } from './lib/types';
import Input from './Input';
import Label from './Label';
import Radio from './Radio';
import Heading from './Heading';
import ClearButton from './ClearButton';
import CalculateButton from './CalculateButton';
import Error from './Error';

type CalculatorProps = {
  setResult: React.Dispatch<React.SetStateAction<ResultType | null>>;
};

const calculateResult = ({ amount, term, rate, type }: MortgageFormValues) => {
  const monthlyRate = rate / 12 / 100;
  const numberOfPayments = term * 12;
  const monthlyPayment =
    amount *
    ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1));

  if (type === 'repayment')
    return {
      total: monthlyPayment * numberOfPayments,
      monthly: monthlyPayment,
    };

  if (type === 'interest')
    return {
      total: monthlyPayment * numberOfPayments - amount,
      monthly: monthlyPayment - amount / numberOfPayments,
    };
};

function Calculator({ setResult }: CalculatorProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<MortgageFormValues>();
  const checkedType = watch('type');

  const onSubmit: SubmitHandler<MortgageFormValues> = formData => {
    const result = calculateResult(formData);
    if (result) setResult({ ...result, type: formData.type });
  };

  return (
    <div className="bg-neutral-white px-300 py-400 md:px-500 md:py-500">
      <div className="mb-300 flex flex-col items-start gap-100 sm:mb-500 sm:flex-row sm:items-center sm:justify-between">
        <Heading>Mortgage Calculator</Heading>
        <ClearButton
          onClick={() => {
            reset();
            setResult(null);
          }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-300">
        <Input
          register={register}
          name="amount"
          label="Mortgage Amount"
          affix={{ type: 'prefix', text: '£' }}
          type="number"
          validation={{
            required: 'This field is required',
            pattern: {
              value: /^\d+(\.\d+)?$/,
              message: 'Must be a postive number',
            },
            min: {
              value: 1000,
              message: 'Min value must be 1000',
            },
          }}
          errorMessage={errors?.amount?.message}
        />

        <div className="flex flex-col gap-300 sm:flex-row">
          <Input
            register={register}
            name="term"
            label="Mortgage Term"
            affix={{ type: 'suffix', text: 'years' }}
            type="number"
            validation={{
              required: 'This field is required',
              pattern: {
                value: /^[1-9]\d*$/,
                message: 'Must be a postive integer number',
              },
              max: {
                value: 100,
                message: 'Max value must be 100',
              },
            }}
            errorMessage={errors?.term?.message}
          />
          <Input
            register={register}
            name="rate"
            label="Mortgage Rate"
            affix={{ type: 'suffix', text: '%' }}
            type="number"
            step={0.01}
            validation={{
              required: 'This field is required',
              pattern: {
                value: /^\d+(\.\d+)?$/,
                message: 'Must be a postive number',
              },
              max: {
                value: 25,
                message: 'Max value must be 25',
              },
            }}
            errorMessage={errors?.rate?.message}
          />
        </div>

        <div className="flex flex-col gap-150">
          <Label htmlFor="repayment">Mortgage Type</Label>
          <div className="space-y-150">
            <Radio
              register={register}
              value="repayment"
              label="Repayment"
              isChecked={checkedType === 'repayment'}
            />
            <Radio
              register={register}
              value="interest"
              label="Interest only"
              isChecked={checkedType === 'interest'}
            />
          </div>
          {errors.type && <Error>{errors.type.message}</Error>}
        </div>

        <CalculateButton />
      </form>
    </div>
  );
}

export default Calculator;
