import { ListIcon } from './icons/ListIcon';

interface ListComponentProps {
  items: string[];
  className?: string;
}

export function ListComponent({ items, className }: ListComponentProps) {
  return (
    <ul className={`flex flex-col gap-2 lg:pl-4 ${className}`}>
      {items.map((item) => (
        <li key={item} className='flex items-start gap-2'>
          <span className='mt-1 shrink-0'>
            <ListIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
