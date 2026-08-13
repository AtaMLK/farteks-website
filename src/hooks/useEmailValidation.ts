"use client";

import { useState } from "react";
import { GAEvents } from "@/hooks/useGoogleAnalytics";

export interface CatalogLeadData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
}

export function useEmailValidation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateAndDownload = async (
    lead: CatalogLeadData,
    catalogUrl = "/catalogs/catalog.pdf"
  ): Promise<boolean> => {
    setError(null);
    setSuccess(false);

    const firstName = lead.firstName.trim();
    const lastName = lead.lastName.trim();
    const companyName = lead.companyName.trim();
    const email = lead.email.trim().toLowerCase();

    /* ---------------------------------------------------------------------- */
    /* Validation                                                             */
    /* ---------------------------------------------------------------------- */

    if (!firstName) {
      setError("Please enter your first name.");
      return false;
    }

    if (!lastName) {
      setError("Please enter your last name.");
      return false;
    }

    if (!companyName) {
      setError("Please enter your company name.");
      return false;
    }

    if (!email) {
      setError("Please enter your email address.");
      return false;
    }

    if (!isValidEmail(email)) {
      setError(
        "Please enter a valid email address (e.g. name@company.com)."
      );
      return false;
    }

    if (isLoading) {
      return false;
    }

    setIsLoading(true);

    try {
      /* -------------------------------------------------------------------- */
      /* Send lead to our API                                                 */
      /* -------------------------------------------------------------------- */

      const response = await fetch("/api/catalog-download", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstName,
          lastName,
          companyName,
          email,
          catalogUrl,
        }),
      });

      let data: {
        success?: boolean;
        error?: string;
        message?: string;
      } = {};

      try {
        data = await response.json();
      } catch {
        // API did not return JSON.
      }

      /* -------------------------------------------------------------------- */
      /* API failed                                                            */
      /* -------------------------------------------------------------------- */

      if (!response.ok || data.success !== true) {
        throw new Error(
          data.error ||
            data.message ||
            "Unable to process the catalog download."
        );
      }

      /* -------------------------------------------------------------------- */
      /* IMPORTANT: Download ONLY after successful API response                */
      /* -------------------------------------------------------------------- */

      const link = document.createElement("a");

      link.href = catalogUrl;
      link.download = "Farteks-Catalog.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess(true);
      GAEvents.downloadCatalog();

      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    validateAndDownload,
    isLoading,
    error,
    success,
    isValidEmail,
  };
}