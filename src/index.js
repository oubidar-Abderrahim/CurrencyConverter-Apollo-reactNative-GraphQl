import React from "react";
import { AppRegistry, View, StyleSheet } from "react-native-web";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import ExchangeRateView from "./view";
import { colors } from "./styles";

const client = new ApolloClient({
  uri: `https://48p1r2roz4.sse.codesandbox.io`
});

const App = () => (
  <ApolloProvider client={client}>
    <View id="root" style={styles.container}>
      <ExchangeRateView />
    </View>
  </ApolloProvider>
);

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    backgroundColor: colors.darkBlue
  }
});

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
