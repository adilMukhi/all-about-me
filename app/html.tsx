// app/html.tsx
import React from "react";

export default function Html({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Link to main.css */}
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
