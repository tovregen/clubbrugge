import App from 'next/app'
import { appWithTranslation } from '../i18n'

import {
  ApolloProvider,
  gql,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import "../styles/globals.css";
import styles from "../styles/app.module.css";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

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
export default appWithTranslation(MyApp);
