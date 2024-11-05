import { ReactNode } from 'react';

type ConfigLegendProps = { children: ReactNode };

function ConfigLegend({ children }: ConfigLegendProps) {
  return (
    <legend className="w-fit text-[0.9375rem] text-secondary-steel-400 md:text-xl">
      {children}
    </legend>
  );
}

export default ConfigLegend;
