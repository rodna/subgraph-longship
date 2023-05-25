# Subgraph Longship schema
### Install graph
```bash
npm install -g @graphprotocol/graph-cli
```

### Steps to deploy in subgraph studio
```bash
graph auth --studio <DEPLOY KEY>
graph codegen
graph build
graph deploy --studio <SUBGRAPH_SLUG>
```