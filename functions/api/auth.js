export async function onRequest(context) {
  const { request, env } = context;
  const client_id = env.GITHUB_CLIENT_ID;

  if (!client_id) {
    return new Response('GITHUB_CLIENT_ID not set in Cloudflare Pages env', {
      status: 500,
      headers: { 'content-type': 'text/plain;charset=UTF-8' },
    });
  }

  try {
    const url = new URL(request.url);
    const state = [...crypto.getRandomValues(new Uint8Array(12))]
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    const redirectUrl = new URL('https://github.com/login/oauth/authorize');
    redirectUrl.searchParams.set('client_id', client_id);
    redirectUrl.searchParams.set('redirect_uri', url.origin + '/api/auth/callback');
    redirectUrl.searchParams.set('scope', 'repo user');
    redirectUrl.searchParams.set('state', state);

    return Response.redirect(redirectUrl.href, 302);
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
