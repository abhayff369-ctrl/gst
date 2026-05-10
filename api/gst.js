export default async function handler(req, res) {
  const { gstin } = req.query;

  if (!gstin) {
    return res.status(400).json({
      status: false,
      message: "GSTIN required"
    });
  }

  if (gstin.length !== 15) {
    return res.status(400).json({
      status: false,
      message: "Invalid GSTIN"
    });
  }

  return res.status(200).json({
    status: true,
    message: "GST Search API Ready",
    gstin: gstin.toUpperCase(),
    note: "GST portal captcha protected. Use Puppeteer for live scrape.",
    official_url: "https://services.gst.gov.in/services/searchtp"
  });
}
