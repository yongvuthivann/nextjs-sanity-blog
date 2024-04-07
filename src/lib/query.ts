export const postQuery = `
*[_type=='post'] {
    _id,
    title,
    slug,
    mainImage,
    description,
    minRead,
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
