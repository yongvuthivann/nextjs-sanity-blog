export const postQuery = `
*[_type=='post'] | order(_createdAt desc) {
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
    }`;

export const postDetailQuery = `*[_type=="post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    description,
    minRead,
    body,
    author -> {
        name,
        slug,
        image
    },
    category -> {
        title,
        slug
    },

  }`;
