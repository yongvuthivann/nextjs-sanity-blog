export const postQuery = `
*[_type=='post'] {
    _id,
    title,
    slug,
    mainImage,
    description,
    author -> {
        name,
        slug,
        image
    },
    category -> {
        title,
        slug
    },
    } | order(_createdAt desc)`;
