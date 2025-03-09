
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  text?: string;
  animate?: boolean;
}

const ImagePlaceholder = ({
  className,
  width = '100%',
  height = '100%',
  text = 'Image',
  animate = true,
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden',
        animate && 'animated-bg',
        className
      )}
      style={{ width, height }}
    >
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm font-medium">{text}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
