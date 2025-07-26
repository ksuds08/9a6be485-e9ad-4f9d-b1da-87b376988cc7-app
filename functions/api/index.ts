// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { AIResumeGeneratorBackendHandler } from './AIResumeGeneratorBackend';
import { TemplateDownloadBackendHandler } from './TemplateDownloadBackend';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/AIResumeGeneratorBackend") return AIResumeGeneratorBackendHandler(request);
  if (path === "/api/TemplateDownloadBackend") return TemplateDownloadBackendHandler(request);

  return new Response("Not found", { status: 404 });
}
