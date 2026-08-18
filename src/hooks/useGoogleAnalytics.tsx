'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/* -------------------------------------------------------------------------- */
/*                            Google Analytics                                */
/* -------------------------------------------------------------------------- */

export function GoogleAnalytics() {
  const pathname = usePathname();

  /*
   * GA4 initialization
   *
   * send_page_view is disabled because page views are handled manually
   * when the Next.js route changes.
   */
  if (!GA_ID) {
    /* if (process.env.NODE_ENV === 'development') {
      console.warn(
        'Google Analytics is disabled: NEXT_PUBLIC_GA4_ID is not defined.'
      );
    } */

    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', '${GA_ID}', {
              send_page_view: false
            });
          `,
        }}
      />

      <GoogleAnalyticsPageView pathname={pathname} />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Page View Tracking                                 */
/* -------------------------------------------------------------------------- */

function GoogleAnalyticsPageView({
  pathname,
}: {
  pathname: string;
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}

/* -------------------------------------------------------------------------- */
/*                         Generic Analytics Hook                             */
/* -------------------------------------------------------------------------- */

export function useGoogleAnalytics() {
  const trackEvent = (
    eventName: string,
    eventData?: Record<string, unknown>
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', eventName, eventData ?? {});
  };

  return {
    trackEvent,
  };
}

/* -------------------------------------------------------------------------- */
/*                              GA4 Events                                    */
/* -------------------------------------------------------------------------- */

export const GAEvents = {
  /* ------------------------------------------------------------------------ */
  /* Product                                                                  */
  /* ------------------------------------------------------------------------ */

  viewProduct: (
    productId: string,
    productName: string,
    category?: string
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'view_item', {
      items: [
        {
          item_id: productId,
          item_name: productName,
          item_category: category ?? 'Product',
        },
      ],
    });
  },

  viewProductGroup: (
    groupId: string,
    groupName: string,
    products: Array<{
      id: string;
      name: string;
    }>
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'view_item_list', {
      item_list_id: groupId,
      item_list_name: groupName,

      items: products.map((product, index) => ({
        item_id: product.id,
        item_name: product.name,
        index,
      })),
    });
  },

  relatedProductClick: (
    productId: string,
    productName: string,
    sourceProductId?: string
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'select_item', {
      item_list_name: 'Related Products',

      items: [
        {
          item_id: productId,
          item_name: productName,
        },
      ],

      ...(sourceProductId
        ? {
            source_product_id: sourceProductId,
          }
        : {}),
    });
  },

  /* ------------------------------------------------------------------------ */
  /* Search                                                                   */
  /* ------------------------------------------------------------------------ */

  searchProducts: (
    searchQuery: string,
    searchResults: number
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    const query = searchQuery.trim();

    if (!query) return;

    window.gtag('event', 'search', {
      search_term: query,
      search_result_count: searchResults,
    });
  },

  /* ------------------------------------------------------------------------ */
  /* Catalog Download                                                         */
  /* ------------------------------------------------------------------------ */

  downloadCatalog: () => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    /*
     * Never send the user's email, phone number, name, or other
     * personally identifiable information to Google Analytics.
     */

    window.gtag('event', 'file_download', {
      file_name: 'Farteks-Catalog.pdf',
      file_extension: 'pdf',
      file_type: 'catalog',
    });
  },

  /* ------------------------------------------------------------------------ */
  /* Contact / Lead                                                           */
  /* ------------------------------------------------------------------------ */

  contactFormSubmit: (formType: string) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'generate_lead', {
      form_type: formType,
    });
  },

  viewContactForm: (formType: string) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'form_view', {
      form_type: formType,
    });
  },

  /* ------------------------------------------------------------------------ */
  /* Contact Actions                                                          */
  /* ------------------------------------------------------------------------ */

  clickPhoneNumber: () => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'phone_click');
  },

  clickEmail: () => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'email_click');
  },

  clickWhatsApp: () => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'whatsapp_click');
  },

  /* ------------------------------------------------------------------------ */
  /* Technical Drawing                                                        */
  /* ------------------------------------------------------------------------ */

  viewTechnicalDrawing: (
    productId: string,
    productName: string
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'technical_drawing_view', {
      product_id: productId,
      product_name: productName,
    });
  },

  /* ------------------------------------------------------------------------ */
  /* Product List                                                             */
  /* ------------------------------------------------------------------------ */

  addToList: (
    itemId: string,
    itemName: string,
    listName?: string
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'add_to_list', {
      item_list_name: listName ?? 'Product List',

      items: [
        {
          item_id: itemId,
          item_name: itemName,
        },
      ],
    });
  },

  /* ------------------------------------------------------------------------ */
  /* Error Tracking                                                           */
  /* ------------------------------------------------------------------------ */

  trackError: (
    errorMessage: string,
    errorType: string
  ) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'exception', {
      description: `${errorType}: ${errorMessage}`,
      fatal: false,
    });
  },
};