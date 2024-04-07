export interface Blog {
    id: number,
    typeof: string,
    title: string,
    url: string,
    cover_image: string,
    social_image: string
    description: string,
    readable_publish_date: string,
    published_timestamp: string,
    user: {
        name: string,
        username: string,
        twitter_username: string,
        github_username: string,
        profile_image: string,
    },
    slug: string,
}