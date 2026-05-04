const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetcher(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed : ${endpoint} (${res.status})`);
  }

  return res.json();
}

export async function getPortfolioData() {
  return fetcher("/api/portfolio/data");
}
