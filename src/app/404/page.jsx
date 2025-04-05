'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  const params = useSearchParams();
  const errorMsg = params.get('error') || 'Page Not Found';

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">404 - {errorMsg}</h1>
      <p className="text-gray-600">Oops! This page doesn't exist.</p>
    </div>
  );
}
