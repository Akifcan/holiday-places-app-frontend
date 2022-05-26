import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_HOST + '/graphql',
    cache: new InMemoryCache()
})

export default client