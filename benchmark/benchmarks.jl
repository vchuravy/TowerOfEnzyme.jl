using BenchmarkTools
using TowerOfEnzyme

const SUITE = BenchmarkGroup()

SUITE["sin"] = BenchmarkGroup()
SUITE["sin"]["overhead"] = @benchmarkable nth_derivative(sin, 1.0, Val(0))
for order in (1, 2, 4, 8, 13)
    SUITE["sin"]["order = $order"] = @benchmarkable nth_derivative(sin, 1.0, Val(order))
end
