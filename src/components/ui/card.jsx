import React from "react";


export function Card({ className = "", children }) {
return <div className={`rounded-2xl border bg-white shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ children, className = "" }) {
return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = "" }) {
return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardDescription({ children, className = "" }) {
return <p className={`text-slate-600 text-sm ${className}`}>{children}</p>;
}
export function CardContent({ children, className = "" }) {
return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}
export function CardFooter({ children, className = "" }) {
return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}