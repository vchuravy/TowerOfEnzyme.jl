using BenchmarkTools
using TowerOfEnzyme

import ForwardDiff
import TaylorDiff

function nth_derivative_forwarddiff(f::F, x, ::Val{N}) where {F, N}
   if N == 0
	  return f(x)
   else
	  return ForwardDiff.derivative(y->nth_derivative_forwarddiff(f, y, Val(N-1)), x)
   end
end

const SUITE = BenchmarkGroup()

SUITE["sin"] = BenchmarkGroup()
SUITE["sin"]["primal"] = sin(1.0)
SUITE["sin"]["TowerOfEnzyme"] =  BenchmarkGroup()
SUITE["sin"]["ForwardDiff"] =  BenchmarkGroup()
SUITE["sin"]["TaylorDiff"] =  BenchmarkGroup()

function create_benchmark_sin(group, nth_derivative)
    for order in (1, 2, 4, 8, 13)
        group["order = $order"] = @benchmarkable $(nth_derivative)(sin, 1.0, Val($order))
    end
end

create_benchmark_sin(SUITE["sin"]["TowerOfEnzyme"], nth_derivative)
create_benchmark_sin(SUITE["sin"]["ForwardDiff"], nth_derivative_forwarddiff)
create_benchmark_sin(SUITE["sin"]["TowerOfEnzyme"], TaylorDiff.derivative)
