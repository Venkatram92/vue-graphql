import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApollo from "vue-apollo";
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: 'http://localhost:8084/graphql'
})


const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false
  }),
  connectToDevTools: true
})

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount("#app");
