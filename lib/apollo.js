import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { withData } from "next-apollo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/*
const config = {
    link: new HttpLink({
        uri: `${API_URL}/graphql`, 
    })
};
*/

const apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
        uri: "http://localhost:1337/graphql"
    }),
    cache: new InMemoryCache()
});

export default withData(apolloClient);