import { Media } from './api/fetchTypes';
import { useLocalStorage } from 'usehooks-ts';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<Media[] | []>(
    'bookmarks',
    [],
  );

  const addBookmark = (newBookmark: Media) => {
    setBookmarks((prevBookmarks: Media[] | []) => [
      ...prevBookmarks,
      newBookmark,
    ]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prevBookmarks: Media[] | []) =>
      prevBookmarks.filter(bookmark => bookmark.imdbID !== id),
    );
  };

  const isBookmarked = (id: string): boolean =>
    bookmarks.some((bookmark: Media) => bookmark.imdbID === id);

  const searchBookmarks = (query: string) => {
    if (!query) return null;

    return bookmarks.filter(bookmark =>
      bookmark.Title.toLocaleLowerCase().includes(
        query.trim().toLocaleLowerCase(),
      ),
    );
  };

  return {
    bookmarks,
    searchBookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };
}
