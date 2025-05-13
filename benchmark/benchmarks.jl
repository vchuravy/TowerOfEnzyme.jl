using BenchmarkTools
using TowerOfEnzyme

const SUITE = BenchmarkGroup()

SUITE["basics"] = BenchmarkGroup()

SUITE["basics"]["overhead"] = @benchmarkable nth_derivative(sin, 1.0, Val(0))
