const COMMIT_ACTIVITY_URL = "https://api.github.com/repos/facebook/react/stats/commit_activity"

export const getContributions = async () => {
  try {
    const res = await fetch(COMMIT_ACTIVITY_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There was a problem with fetching the data");
    throw error;
  }
};