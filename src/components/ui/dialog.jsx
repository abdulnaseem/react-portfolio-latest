// components/ui/dialog.jsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Dialog({ open, onOpenChange, children }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const lastActiveRef = useRef(null);

  const portalRoot =
    document.getElementById("dialog-root") ||
    (() => {
      const el = document.createElement("div");
      el.id = "dialog-root";
      document.body.appendChild(el);
      return el;
    })();

  // Lock background scroll, allow modal scroll
  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      contentRef.current?.querySelector("[data-autofocus]")?.focus() ||
        contentRef.current?.focus();
    }, 0);
    return () => {
      document.body.style.overflow = prev;
      lastActiveRef.current?.focus?.();
    };
  }, [open]);

  // ESC + focus trap
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "Tab") {
        const focusables = contentRef.current?.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables?.length) return;
        const list = Array.from(focusables);
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onOpenChange(false);
      }}
    >
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        className="
          relative mt-16 mb-16 w-full max-w-[720px]
          rounded-2xl bg-white shadow-xl border border-slate-200
          outline-none focus:outline-none
          /* removed max-h; let the overlay handle scrolling */
        "
        tabIndex={-1}
      >
        {children}
      </div>
    </div>,
    portalRoot
  );
}

export function DialogHeader({ children }) {
  return <div className="px-5 pt-5">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3 className="text-lg md:text-xl font-semibold tracking-tight">{children}</h3>;
}

export function DialogDescription({ children }) {
  return <p className="mt-1 text-sm text-slate-600">{children}</p>;
}

export function DialogBody({ children }) {
  // ⬇️ add big bottom padding so sticky footer never covers content
  return (
    <div className="px-5 py-4 pb-28 space-y-4 text-sm text-slate-700 leading-relaxed">
      {children}
    </div>
  );
}

export function DialogFooter({ children }) {
  // sticky footer stays; content has pb-28 buffer
  return (
    <div className="sticky bottom-0 px-5 pb-5 pt-2 bg-white border-t border-slate-200 flex items-center justify-end gap-2">
      {children}
    </div>
  );
}
