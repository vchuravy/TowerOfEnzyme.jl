# For CI

using BenchmarkTools

include("benchmarks.jl")

tune!(SUITE)
results = run(SUITE, verbose = true)

BenchmarkTools.save("output.json", median(results))
