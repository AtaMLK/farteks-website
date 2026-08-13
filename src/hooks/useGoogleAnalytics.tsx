'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
      <GoogleAnalyticsPageView pathname={pathname} ready={ready} />
    </>
  );
}

function GoogleAnalyticsPageView({ pathname, ready }: { pathname: string; ready: boolean }) {
  useEffect(() => {
    if (!ready || typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname, ready]);

  return null;
}

export function useGoogleAnalytics() {
  const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, eventData ?? {});
  };

  return { trackEvent };
}

export const GAEvents = {
  viewProduct: (productId: string, productName: string, category?: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'view_item', {
      items: [{ item_id: productId, item_name: productName, item_category: category ?? 'Product' }],
    });
  },

  viewProductGroup: (groupId: string, groupName: string, products: Array<{ id: string; name: string }>) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'view_item_list', {
      item_list_id: groupId,
      item_list_name: groupName,
      items: products.map((product, index) => ({ item_id: product.id, item_name: product.name, index })),
    });
  },

  relatedProductClick: (productId: string, productName: string, sourceProductId?: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'select_item', {
      item_list_name: 'Related Products',
      items: [{ item_id: productId, item_name: productName }],
      ...(sourceProductId ? { source_product_id: sourceProductId } : {}),
    });
  },

  searchProducts: (searchQuery: string, searchResults: number) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    const query = searchQuery.trim();
    if (!query) return;
    window.gtag('event', 'search', { search_term: query, search_result_count: searchResults });
  },

  downloadCatalog: () => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'file_download', {
      file_name: 'Farteks-Catalog.pdf',
      file_extension: 'pdf',
      file_type: 'catalog',
    });
  },

  contactFormSubmit: (formType: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'generate_lead', { form_type: formType });
  },

  viewContactForm: (formType: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'form_view', { form_type: formType });
  },

  clickPhoneNumber: () => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'phone_click');
  },

  clickEmail: () => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'email_click');
  },

  clickWhatsApp: () => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'whatsapp_click');
  },

  viewTechnicalDrawing: (productId: string, productName: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'technical_drawing_view', {
      product_id: productId,
      product_name: productName,
    });
  },

  addToList: (itemId: string, itemName: string, listName?: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'add_to_list', {
      item_list_name: listName ?? 'Product List',
      items: [{ item_id: itemId, item_name: itemName }],
    });
  },

  trackError: (errorMessage: string, errorType: string) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'exception', {
      description: `${errorType}: ${errorMessage}`,
      fatal: false,
    });
  },
};
