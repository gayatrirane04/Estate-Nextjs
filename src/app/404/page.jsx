// app/404/page.js
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Custom404() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Actual404 />
    </Suspense>
  );
}

function Actual404() {
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Search params: {searchParams.get('someParam')}</p>
    </div>
  );
}
