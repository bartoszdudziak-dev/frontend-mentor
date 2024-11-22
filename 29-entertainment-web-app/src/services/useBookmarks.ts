import { useLocalStorage } from 'usehooks-ts';
import { clearString } from '../utils/helpers';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('bookmarks', []);

  const addBookmark = (title: string) => {
    setBookmarks(prevBookmarks => [...prevBookmarks, clearString(title)]);
  };

  const removeBookmark = (title: string) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.filter(bookmark => bookmark !== clearString(title)),
    );
  };

  const isBookmarked = (title: string): boolean =>
    bookmarks.includes(clearString(title));

  const toggleBookmark = (title: string) => {
    if (isBookmarked(title)) removeBookmark(title);
    else addBookmark(title);
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark,
  };
}
