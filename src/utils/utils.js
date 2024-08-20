export async function fetchItems(url) {
    const res = await fetch(
        `${process.env.WP_API_URL}${url}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch items");
    }
    return await res.json();
}