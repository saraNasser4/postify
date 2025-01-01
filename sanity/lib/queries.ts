import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
        _id,
        title, 
        slug, 
        category, 
        views,
        author -> {
            _id, image, bio, name
        },
        _createdAt,
        description, 
        image,
    }`
)