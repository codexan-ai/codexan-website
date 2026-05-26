"use client";

import { useEffect } from "react";

/**
 * Loads the Netlify Identity widget site-wide.
 * Required so that invited editors who click their invite link land on
 * any page and still see the password-set modal, then get bounced to /admin.
 */
export default function NetlifyIdentity() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.netlifyIdentity) return;

    const s = document.createElement("script");
    s.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    s.async = true;
    s.onload = () => {
      if (!window.netlifyIdentity) return;
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    };
    document.head.appendChild(s);
  }, []);

  return null;
}
