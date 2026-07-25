function renderBody(status, content) {
  const payload = JSON.stringify(content).replace(/</g, "\u003c");
  const provider = "git" + "hub";
  const prefix = "authorization:" + provider + ":" + status + ":";
  const authMsg = "authorizing:" + provider;
  const html = [
    "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>OAuth</title></head><body><script>",
    "const receiveMessage = (message) => {",
    "  window.opener.postMessage(",
    "    " + JSON.stringify(prefix) + " + " + JSON.stringify(payload) + ",",
    "    message.origin",
    "  );",
    "  window.removeEventListener(\"message\", receiveMessage, false);",
    "};",
    "window.addEventListener(\"message\", receiveMessage, false);",
    "window.opener.postMessage(" + JSON.stringify(authMsg) + ", \"*\");",
    "</script></body></html>",
  ].join("");
  return html;
}

export async function onRequest(context) {
  const { request, env } = context;
  const client_id = env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    return new Response("GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET not set", {
      status: 500,
      headers: { "content-type": "text/plain;charset=UTF-8" },
    });
  }

  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return new Response(renderBody("error", { error: "missing_code" }), {
        headers: { "content-type": "text/html;charset=UTF-8" },
        status: 400,
      });
    }

    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "user-agent": "godev-decap-oauth",
      },
      body: JSON.stringify({ client_id, client_secret, code }),
    });

    const result = await tokenRes.json();

    if (result.error) {
      return new Response(renderBody("error", result), {
        headers: { "content-type": "text/html;charset=UTF-8" },
        status: 401,
      });
    }

    return new Response(
      renderBody("success", { token: result.access_token, provider: "git" + "hub" }),
      {
        headers: { "content-type": "text/html;charset=UTF-8" },
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(String(error && error.message ? error.message : error), {
      headers: { "content-type": "text/html;charset=UTF-8" },
      status: 500,
    });
  }
}
