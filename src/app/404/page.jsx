'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref'); // just an example usage

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
        {ref && <p className='text-sm mt-2'>You came from: {ref}</p>}
      </div>
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
