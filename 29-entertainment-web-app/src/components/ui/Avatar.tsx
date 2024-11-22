import { WithClassName } from '../../utils/commonTypes';

function Avatar({ className }: WithClassName) {
  return (
    <img
      className={`${className ? className : ''} rounded-full border border-white shadow`}
      src="assets/image-avatar.png"
      alt="Profile avatar"
    />
  );
}

export default Avatar;
