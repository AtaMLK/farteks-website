"use client";

import { FormEvent, useState } from "react";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import {
  X,
  Mail,
  AlertCircle,
  CheckCircle,
  Loader,
  User,
  Building2,
} from "lucide-react";

interface CatalogDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalogUrl?: string;
  catalogName?: string;
}

export function CatalogDownloadModal({
  isOpen,
  onClose,
  catalogUrl = "/catalogs/catalog.pdf",
  catalogName = "Farteks Group Products Catalog",
}: CatalogDownloadModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  const {
    validateAndDownload,
    isLoading,
    error,
    success,
  } = useEmailValidation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await validateAndDownload(
      {
        firstName,
        lastName,
        companyName,
        email,
      },
      catalogUrl
    );

    if (result) {
      setTimeout(() => {
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setEmail("");
        onClose();
      }, 1500);
    }
  };

  const handleClose = () => {
    if (isLoading) return;

    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        onClick={handleClose}
        style={{ backdropFilter: "blur(4px)" }}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={isLoading}
          aria-label="Close catalog download"
          className="absolute right-4 top-4 rounded-lg p-1 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>

        {/* Success State */}
        {success ? (
          <div className="py-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <h3 className="mb-2 text-xl font-bold text-slate-900">
              Download Started!
            </h3>

            <p className="text-slate-600">
              Your catalog is being downloaded.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Thank you for your interest in Farteks.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Download {catalogName}
              </h2>

              <p className="mt-2 text-slate-600">
                Please enter your details to download our catalog.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="catalog-first-name"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    First Name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="catalog-first-name"
                      name="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) =>
                        setFirstName(e.target.value)
                      }
                      placeholder="John"
                      autoComplete="given-name"
                      disabled={isLoading}
                      className={`w-full rounded-lg border-2 py-3 pl-10 pr-3 transition-colors focus:outline-none ${
                        error
                          ? "border-red-500 bg-red-50"
                          : "border-slate-200 bg-white hover:border-slate-300 focus:border-orange-500 focus:bg-orange-50"
                      }`}
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="catalog-last-name"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Last Name
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="catalog-last-name"
                      name="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) =>
                        setLastName(e.target.value)
                      }
                      placeholder="Smith"
                      autoComplete="family-name"
                      disabled={isLoading}
                      className={`w-full rounded-lg border-2 py-3 pl-10 pr-3 transition-colors focus:outline-none ${
                        error
                          ? "border-red-500 bg-red-50"
                          : "border-slate-200 bg-white hover:border-slate-300 focus:border-orange-500 focus:bg-orange-50"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="catalog-company"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Company Name
                </label>

                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="catalog-company"
                    name="companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) =>
                      setCompanyName(e.target.value)
                    }
                    placeholder="ABC Hydraulics"
                    autoComplete="organization"
                    disabled={isLoading}
                    className={`w-full rounded-lg border-2 py-3 pl-10 pr-3 transition-colors focus:outline-none ${
                      error
                        ? "border-red-500 bg-red-50"
                        : "border-slate-200 bg-white hover:border-slate-300 focus:border-orange-500 focus:bg-orange-50"
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="catalog-email"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Business Email
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="catalog-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="you@company.com"
                    autoComplete="email"
                    disabled={isLoading}
                    className={`w-full rounded-lg border-2 py-3 pl-10 pr-3 transition-colors focus:outline-none ${
                      error
                        ? "border-red-500 bg-red-50"
                        : "border-slate-200 bg-white hover:border-slate-300 focus:border-orange-500 focus:bg-orange-50"
                    }`}
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />

                  <p className="text-sm text-red-700">
                    {error}
                  </p>
                </div>
              )}

              {/* Privacy / Info */}
              <p className="text-xs leading-relaxed text-slate-500">
                Your information is used to process this catalog
                download and may be used by Farteks to respond to
                your business inquiry.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all ${
                  isLoading
                    ? "cursor-not-allowed bg-slate-300 text-slate-500"
                    : "bg-orange-500 text-white shadow-lg hover:bg-orange-600 hover:shadow-xl active:scale-[0.98]"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Download Catalog
                  </>
                )}
              </button>

              {/* Cancel */}
              <button
                type="button"
                onClick={handleClose}
                disabled={isLoading}
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 font-semibold text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}