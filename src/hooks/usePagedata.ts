import { graphql, useStaticQuery } from "gatsby"

export const usePagedata = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                siteUrl
                author
                workTitle
            }
        }
    }`);
    const {title, siteUrl, author, workTitle} = data.site.siteMetadata
    return {
        pageName: title,
        siteUrl,
        author,
        workTitle,
    };
}