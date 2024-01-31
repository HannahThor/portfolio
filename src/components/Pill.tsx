export default function Pill({
  tag,
  className,
}: {
  tag: string;
  className?: string;
}) {
  let fullClassName = `inline-block bg-green rounded-full px-3 py-1 sm:text-sm text-xs font-medium mx-2 mb-2 text-center`;
  if (className) {
    fullClassName = `${fullClassName} ${className}`;
  }
  return <div className={fullClassName}>{tag}</div>;
}
