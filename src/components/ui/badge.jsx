import React from "react";
export function Badge({ className = "", children }) {
return (
<span className={`inline-flex items-center text-xs font-medium tracking-wide text-white bg-slate-900 px-2.5 py-1 rounded-full ${className}`}>
{children}
</span>
);
}