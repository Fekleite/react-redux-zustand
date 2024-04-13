import ReactPlayer from 'react-player'
import { useCurrentLesson } from '../store';
import { useStore } from '../store';
import { Loader } from 'lucide-react';

export function Video() {
  const { isLoading, next } = useStore(store => {
    return {
      isLoading: store.isLoading,
      next: store.next
    }
  })

  const { currentLesson: lesson } = useCurrentLesson()

  function handlePlayNext() {
    next()
  }

  if (!lesson) return null

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${lesson.id}`}
        />
      )}
    </div>
  );
}