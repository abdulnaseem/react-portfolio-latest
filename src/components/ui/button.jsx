import React from "react";


export function Button({ as: Comp = "button", className = "", variant = "solid", ...props }) {
const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
solid: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
outline: "border border-slate-300 text-slate-800 hover:bg-slate-50 focus:ring-slate-400",
ghost: "text-slate-800 hover:bg-slate-100"
};
return <Comp className={`${base} ${variants[variant] || variants.solid} ${className}`} {...props} />;
}