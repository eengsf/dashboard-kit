export const getApiData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
