import { WithChildren } from '../../utils/commonTypes';

function Heading({ children }: WithChildren) {
  return <h2 className="text-xl font-light md:text-3xl">{children}</h2>;
}

export default Heading;
