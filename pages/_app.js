import React from "react"
import App from "next/app"
import { ApolloProvider } from "@apollo/react-hooks"

import withApollo from "../lib/withApollo"

class ApolloProviderApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(ApolloProviderApp)
