import { Customer } from '@/data/mock-customers';

export interface CustomerCardProps {
  customer: Customer;
  onClick?: (customer: Customer) => void;
  className?: string;
}

function getHealthColor(score: number): {
  bg: string;
  text: string;
  label: string;
} {
  if (score <= 30) {
    return { bg: 'bg-red-100', text: 'text-red-700', label: 'Poor' };
  }
  if (score <= 70) {
    return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Moderate' };
  }
  return { bg: 'bg-green-100', text: 'text-green-700', label: 'Good' };
}

export function CustomerCard({ customer, onClick, className = '' }: CustomerCardProps) {
  const healthColor = getHealthColor(customer.healthScore);
  const isClickable = !!onClick;
  const domains = customer.domains ?? [];
  const displayedDomains = domains.slice(0, 1);
  const remainingCount = domains.length - 1;

  const handleClick = () => {
    if (onClick) {
      onClick(customer);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(customer);
    }
  };

  return (
    <div
      className={`
        rounded-lg border border-gray-200 bg-white p-4 shadow-sm
        ${isClickable ? 'cursor-pointer hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : ''}
        ${className}
      `}
      onClick={isClickable ? handleClick : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-gray-900">
            {customer.name}
          </h3>
          <p className="truncate text-sm text-gray-600">{customer.company}</p>
        </div>

        <div
          className={`flex-shrink-0 rounded-md px-2.5 py-1 ${healthColor.bg}`}
          aria-label={`Health score: ${customer.healthScore}, ${healthColor.label}`}
        >
          <span className={`text-sm font-medium ${healthColor.text}`}>
            {customer.healthScore}
          </span>
        </div>
      </div>

      {domains.length > 0 && (
        <div className="mt-3 border-t border-gray-100 pt-3">
          <p className="text-xs text-gray-500">
            {displayedDomains.map((domain) => (
              <span key={domain} className="font-mono">
                {domain}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="ml-1 text-gray-400">
                +{remainingCount} more
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
