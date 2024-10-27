export type RadioValues = 'repayment' | 'interest';

export type MortgageFormValues = {
  amount: number;
  term: number;
  rate: number;
  type: RadioValues;
};

export type ResultType = {
  total: number;
  monthly: number;
  type: RadioValues;
};
