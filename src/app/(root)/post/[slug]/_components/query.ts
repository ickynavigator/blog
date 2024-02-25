export const PAGE_FRAGMENT = /* groq */ `*[_type == "post" && slug.current == $slug][0]{..., "tags": tags[]->}`;
