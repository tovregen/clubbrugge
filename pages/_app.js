import {
  ApolloProvider,
  gql,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import "../styles/globals.css";
import styles from "../styles/app.module.css";
import NextI18Next from "../i18n";
const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default NextI18Next.appWithTranslation(MyApp);
