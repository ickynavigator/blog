import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { env } from '~/env/server.mjs';
import { getClient } from '~/lib/sanity/client';

const client = getClient();
const clientWithToken = client.withConfig({ token: env.SANITY_API_READ_TOKEN });

export async function GET(request: Request) {
  if (!env.SANITY_API_READ_TOKEN) {
    return new Response('No read token configured', { status: 401 });
  }

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  );

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 });
  }

  draftMode().enable();

  redirect(redirectTo);
}
