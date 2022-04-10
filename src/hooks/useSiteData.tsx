import React, {useEffect, useState} from 'react'
import { graphql, useStaticQuery } from "gatsby";

export function useSiteData(){
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
                siteUrl
                author
                authorNickname
                workplace
            }
        }
    } 
    `)
    const [author] = useState(data.site.siteMetadata.author);
    const [siteUrl] = useState(data.site.siteMetadata.siteUrl);
    const [authorNickname] = useState(data.site.siteMetadata.authorNickname);
    const [title] = useState(data.site.siteMetadata.title);
    const [workplace] = useState(data.site.siteMetadata.workplace);

    return {author, siteUrl, authorNickname, title, workplace}
}
