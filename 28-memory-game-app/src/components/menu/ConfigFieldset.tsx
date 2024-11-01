import ConfigLegend from './ConfigLegend';
import { ReactNode } from 'react';

type ConfigFieldsetProps = {
  children: ReactNode;
  legend?: string;
  gap?: string;
};

function ConfigFieldset({ children, legend, gap }: ConfigFieldsetProps) {
  return (
    <fieldset>
      {legend && <ConfigLegend>{legend}</ConfigLegend>}
      <div
        className={`flex ${gap} mt-2.5 w-full items-center justify-between md:mt-4`}
      >
        {children}
      </div>
    </fieldset>
  );
}

export default ConfigFieldset;
