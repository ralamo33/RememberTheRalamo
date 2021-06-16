import { graphql, useStaticQuery } from 'gatsby';

export default function useMonster(): any {
  return useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "monster.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
}