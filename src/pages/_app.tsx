/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import Page from "../components/Page";
import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "aos/dist/aos.css";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "https://graphql-pokeapi.graphcdn.app/",
	cache: new InMemoryCache(),
	// connectToDevTools: process.env.NODE_ENV === "development",
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>Pokepedia</title>
			</Head>
			<ApolloProvider client={client}>
				<Page>
					<Component {...pageProps} />
				</Page>
			</ApolloProvider>
		</React.Fragment>
	);
}
