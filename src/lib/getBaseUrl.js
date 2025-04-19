export function getBaseUrl() {
    if (typeof window !== 'undefined') {
      // ✅ On the browser, use relative path
      return '';
    }
  
    // ✅ On the server (Node.js), use environment variables or fallback
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://your-vercel-domain.vercel.app';
  }