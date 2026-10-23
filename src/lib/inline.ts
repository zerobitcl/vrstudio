export type Segment =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function safeHref(href: string) {
  if (href.startsWith("/") && !href.startsWith("//")) return href;
  if (href.startsWith("https://wa.me/")) return href;
  if (href.startsWith("https://www.instagram.com/")) return href;
  if (href.startsWith("tel:")) return href;
  return null;
}

export function inlineSegments(input: string): Segment[] {
  const out: Segment[] = [];
  let last = 0;

  for (const match of input.matchAll(linkRe)) {
    const index = match.index ?? 0;
    if (index > last) out.push({ type: "text", value: input.slice(last, index) });
    const href = safeHref(match[2]);
    if (href) out.push({ type: "link", label: match[1], href });
    else out.push({ type: "text", value: match[0] });
    last = index + match[0].length;
  }

  if (last < input.length) out.push({ type: "text", value: input.slice(last) });
  return out;
}
