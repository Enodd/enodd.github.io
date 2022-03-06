import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import "../../styles/sections/blogSection.scss";

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              banner {
                relativePath
                childImageSharp {
                  gatsbyImageData(width: 500)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className="section" id="blog">
      <h2 className="section__title">Check out my posts!</h2>
      <aside>
        <p className="section__description">
          I post some content from time to time, describing my programming
          journey. Often there are things that I'm currently working on, or I'm
          trying to learn. Simply I share my experience and my knowledge,
          learning new things in process of creation.
        </p>
      </aside>
      <main className="blogposts">
        {data.allMdx.edges.map((edge) => {
          const { title, description } = edge.node.frontmatter;
          const banner = getImage(edge.node.frontmatter.banner);
          return (
            <article className="article">
              <Link
                to={`/blog/${edge.node.fields.slug}`}
                className="article__link"
              >
                <GatsbyImage
                  image={banner}
                  alt={title}
                  className="article__banner"
                />
                <div className="article__wrapper">
                  <h3 className="article__title">{title}</h3>
                  <p className="article__description">{description}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </main>
    </section>
  );
};

export default BlogSection;
