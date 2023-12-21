import DOMPurify from "dompurify";

export const formatDescription = (description: string): string => {
  const sanitizedDescription = DOMPurify.sanitize(description);
  return sanitizedDescription;
};
