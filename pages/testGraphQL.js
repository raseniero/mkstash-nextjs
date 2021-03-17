import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function testGraphQL({ allProducts }) {
    console.log('allProducts',allProducts)
    
    return <h1>All Products</h1>
}

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
            query GetAllProducts {
                products {
                    id
                    name
                    description
                    categories {
                        id
                        name
                    }
                }
            }
        `
    })

    console.log('data', data)

    return {
        props: {
            allProducts: data.products
        }
    }
}