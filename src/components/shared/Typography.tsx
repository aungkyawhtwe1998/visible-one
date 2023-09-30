// Typography.tsx

import React, { ReactNode } from "react";

interface TypographyProps {
  variant: "title" | "title2" | "description" | "link"; // Define the allowed typography variants
  className?: string;
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  children,
}) => {
  const variants: Record<string, string> = {
    title: "text-3xl md:text-4xl font-semibold",
    title2:"text-md md:text-lg font-semibold",
    description: "md:text-md font-thin",
    link:"text-sm"
  };

  const variantClass = variants[variant] || "";
  const classes = `Typography ${variantClass} ${className || ""}`;

  return <div className={classes}>{children}</div>;
};

export default Typography;
