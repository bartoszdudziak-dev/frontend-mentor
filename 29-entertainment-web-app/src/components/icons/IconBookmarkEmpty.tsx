import { type WithClassName } from '../../utils/commonTypes';

function IconBookmarkEmpty({ className }: WithClassName) {
  return (
    <svg
      className={className}
      width="12"
      height="14"
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="#FFF"
        stroke-width="1.5"
        fill="none"
      />
    </svg>
  );
}

export default IconBookmarkEmpty;
