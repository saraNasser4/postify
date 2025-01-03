import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current) && (!defined($search) || title match $search || category match $search || author->name match $search)] | order(_createdAt desc) {
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

export const STARTUP_BY_ID_QUERY = defineQuery(`
        *[_type == "startup" && _id == $id] {
            _id,
            title, 
            slug, 
            category, 
            views,
            author -> {
                _id, image, bio, name, username
            },
            _createdAt,
            description, 
            image,
            pitch
    }`
)