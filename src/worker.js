const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default {
  async fetch(request, env, ctx) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    const api_key = env.API_KEY;
    const id = "16RpWeVVasC6v-1aN0X14IZOXhmCC80h5lrvKAuw2XcI";
    const sheet = new URL(request.url).pathname.substring(1);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheet}?key=${api_key}`;
    const response = await fetch(url);
    return Response.json(await response.json(), {
      status: 200,
      headers: corsHeaders,
    });
  }
}