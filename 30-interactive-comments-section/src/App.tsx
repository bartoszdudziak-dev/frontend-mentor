import { CommentsProvider } from './components/context/CommentsProvider';
import CommentsSection from './components/CommentsSection';

function App() {
  return (
    <div className="min-h-dvh w-full bg-neutral-very-light-gray">
      <div className="container px-4 py-8 md:py-16">
        <CommentsProvider>
          <CommentsSection />
        </CommentsProvider>
      </div>
    </div>
  );
}

export default App;
