# Bitlet Benchmark

![benchmark](https://github.com/bitlet/benchmark/workflows/benchmark/badge.svg?branch=main)

```
deno run -A --unstable deno/deno.ts & sleep 15 && ./hey -c 40 -z 10s http://localhost:8000 && kill $!
```

```
node node/node.js & sleep 15 && ./hey -c 40 -z 10s http://localhost:8000 && kill $!
```
