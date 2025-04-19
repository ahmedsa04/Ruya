export default async function handler(req, res) {
    const { path = [] } = req.query;
    const endpoint = path.join('/');
    const backendUrl = `http://lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io/api/${endpoint}`;
  
    try {
      const response = await fetch(backendUrl, {
        method: req.method,
        headers: {
          ...req.headers,
          host: 'lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io',
        },
        body: req.method !== 'GET' ? req.body : undefined,
      });
  
      const contentType = response.headers.get("content-type");
      res.status(response.status);
      res.setHeader("Content-Type", contentType || "application/octet-stream");
  
      // 💡 Buffer the response safely
      const buffer = Buffer.from(await response.arrayBuffer());
      res.send(buffer);
  
    } catch (error) {
      console.error('Proxy error:', error);
      res.status(500).json({ error: "Proxy failed", details: error.message });
    }
  }