"use client";

import Script from "next/script";

const UMAMI_SCRIPT_URL = "https://analytics.umami.is/script.js";
const UMAMI_WEBSITE_ID = "PLACEHOLDER_UMAMI_WEBSITE_ID";

export function UmamiAnalytics() {
  return (
    <>
      <Script
        defer
        data-website-id={UMAMI_WEBSITE_ID}
        src={`${UMAMI_SCRIPT_URL}`}
      />
    </>
  );
}
