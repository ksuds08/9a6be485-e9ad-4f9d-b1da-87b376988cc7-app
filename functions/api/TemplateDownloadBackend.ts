import { Request, Response } from 'some-cloudflare-package';

export async function TemplateDownloadBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const contentType = req.headers.get('content-type');
    if (!contentType || contentType !== 'application/json') {
      return new Response('Unsupported Media Type', { status: 415 });
    }

    const body = await req.json();

    // Validate that the required fields are present
    if (!body.templateId || typeof body.templateId !== 'string') {
      return new Response('Bad Request: Missing or invalid templateId', { status: 400 });
    }

    // Simulate template download process
    const templateData = getTemplateData(body.templateId);
    if (!templateData) {
      return new Response('Not Found: Template does not exist', { status: 404 });
    }

    return new Response(JSON.stringify(templateData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Log error details for internal debugging
    console.error('Error processing request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

function getTemplateData(templateId: string): Record<string, any> | null {
  // Simulating a database of templates
  const templates = {
    'template1': { id: 'template1', name: 'Professional Resume', content: '...'},
    'template2': { id: 'template2', name: 'Creative Resume', content: '...'},
  };

  return templates[templateId] || null;
}
