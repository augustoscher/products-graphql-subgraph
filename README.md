# products-graphql-subgraph

GraphQL subgraph service (DGS) corresponding to the products domain from [Edge GraphQL](https://github.com/augustoscher/edge-graphql).  
It's builded with [Apollo Federation](https://www.apollographql.com/docs/federation/) v2 which is an open source architecture for building a distributed graph.


## Running

To run application, just type:

```
yarn dev
```
or in docker:
```
make dev
```

Products GraphQL subgraph will be running on [localhost:4002/graphql](http://localhost:4002/graphql)

## ToDo

- Add Database
- Add Makefile
- Run on docker


## Docs
[GraphQL Principle](https://principledgraphql.com/integrity#1-one-graph).

[Apollo Federation](https://www.apollographql.com/docs/federation/).

[Netflix API with GraphQL Federation](https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-1-ae3557c187e2).
