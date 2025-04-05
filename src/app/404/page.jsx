// app/404/page.js
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const someQuery = searchParams.get('q'); // Example usage

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {someQuery && <p>You searched for: {someQuery}</p>}
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
