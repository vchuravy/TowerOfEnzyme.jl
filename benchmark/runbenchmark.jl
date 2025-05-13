# For CI

using BenchmarkTools

include("benchmark.jl")

tune!(SUITE)
results = run(SUITE, verbose = true)

BenchmarkTools.save("output.json", median(results))