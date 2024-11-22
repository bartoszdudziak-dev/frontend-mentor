import IconBookmarkEmpty from '../../../icons/IconBookmarkEmpty';
import IconBookmarkFull from '../../../icons/IconBookmarkFull';

type BookmarkButtonProps = {
  isBookmarked: boolean;
  onToggle: () => void;
};

function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute right-[5%] top-[5%] flex size-8 items-center justify-center rounded-full bg-primary-dark-blue bg-opacity-50 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary-dark-blue"
    >
      {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
    </button>
  );
}

export default BookmarkButton;
