module TowerOfEnzyme

using Enzyme

export nth_derivative, jvp, hvvp
export derivative_bundle

"""
    nth_derivative(f, x, dx, Val(Order))
"""
function nth_derivative(f::F, x::T, ::Val{O}) where {F, O, T}
    return nth_derivative(f, x, one(x), Val(O))
end

"""
    nth_derivative(f, x, dx, Val(Order))
"""
function nth_derivative(f::F, x::T, dx::T, ::Val{O}) where {F, O, T}
    if O == 0
        return f(x)
    else
        return Enzyme.autodiff(
            Enzyme.set_abi(Forward, Enzyme.InlineABI),
            nth_derivative, Const(f),
            Duplicated(x, dx), Const(dx), Const(Val(O - 1))
        ) |> only
    end
end

"""
    nth_derivative(f, x, (dx...))
"""
function nth_derivative(f::F, x::T, dx::NTuple{N, T}, ::Val{O}) where {F, N, T, O}
    if O == 0
        return f(x)
    else
        return Enzyme.autodiff(
            Enzyme.set_abi(Forward, Enzyme.InlineABI),
            nth_derivative, Const(f),
            Duplicated(x, dx[O]), Const(dx), Const(Val(O - 1))
        ) |> only
    end
end

nth_derivative(f::F, x::T, dx::NTuple{N, T}) where {F, N, T} = nth_derivative(f, x, dx, Val(N))

# Helper functions
"""
    jvp(f, x, v)

Calculate the Jacobian-Vector-Product ``J_f(x) * v``
"""
jvp(f, x, v) = nth_derivative(f, x, v, Val(1))

"""
    hvvp(f, x, v)

Calculate the Hessian-Vector-Vector product ``H_f(x) * v * v``
"""
hvvp(f, x, v) = nth_derivative(f, x, v, Val(2))

"""
    hvvp(f, x, v₁, v₂)

Calculate the Hessian-Vector-Vector product ``H_f(x) * v₁ * v₂``
"""
hvvp(f, x, v₁, v₂) = nth_derivative(f, x, (v₁, v₂), Val(2))

"""
    derivative_bundle(f, (x, dx, ddx...))
"""
@inline function derivative_bundle(f::F, bundle::NTuple{N}) where {F, N}
    if length(bundle) == 1
        return f(bundle[1])
    end
    dbundle = bundle[2:end]
    bundle = bundle[1:(end - 1)]
    return autodiff(
        Enzyme.set_abi(Forward, Enzyme.InlineABI),
        derivative_bundle, Const(f),
        Duplicated(bundle, dbundle)
    ) |> only
end

end # module TowerOfEnzyme
