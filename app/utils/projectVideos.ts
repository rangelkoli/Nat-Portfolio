export function getProjectVideoUrl(fileName: string): string {
  if (/^https?:\/\//.test(fileName)) {
    return fileName;
  }

  const configuredVideoBaseUrl = process.env.NEXT_PUBLIC_VIDEO_BASE_URL?.trim();

  if (!configuredVideoBaseUrl) {
    return `/projects/${fileName}`;
  }

  const normalizedBaseUrl = configuredVideoBaseUrl.endsWith("/")
    ? configuredVideoBaseUrl.slice(0, -1)
    : configuredVideoBaseUrl;

  return `${normalizedBaseUrl}/${fileName}`;
}
