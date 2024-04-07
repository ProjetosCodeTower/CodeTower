export const fetchHygraphQuery = async (query: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`
        },
        body: JSON.stringify({
            query,
        }),
        next: {
            revalidate: 60
        }
    })

    const { data } = await response.json();

    return data;
}