using Test
using TowerOfEnzyme
using StaticArrays
import TaylorDiff

# c.f. https://github.com/JuliaDiff/TaylorDiff.jl/issues/98
# Internally TaylorDiff is storing Taylor polynomial coefficients, i.e. d^n u / n! , instead of derivatives.
# Therefore, when you convert from derivatives to coefficients, divide by n!, and when you convert from coefficients to derivative, multiply by n!.
# The helper function TaylorDiff.extract_derivative already handle the latter for you, but the former is currently missing.
function taylor_diff(f::F, bundle::NTuple{N, T}) where {F, N, T}
    coeffs = ntuple(Val(N - 1)) do i
        1 // factorial(i) * bundle[i + 1]
    end
    taylor_bundle = map((x, dx...) -> TaylorDiff.TaylorScalar(x, dx), bundle[1], coeffs...)
    f_bundle = f(taylor_bundle)
    return TaylorDiff.extract_derivative(f_bundle, Val(N - 1))
end

@testset "sin" begin
    @test nth_derivative(sin, 1.0, Val(1)) ≈ cos(1.0)
    @test nth_derivative(sin, 1.0, Val(2)) ≈ -sin(1.0)
    @test nth_derivative(sin, 1.0, Val(3)) ≈ -cos(1.0)
    @test nth_derivative(sin, 1.0, Val(4)) ≈ sin(1.0)
end

@inline function flux(u)
    rho, rho_v1, rho_v2, rho_e = u
    gamma = 1.4
    v1 = rho_v1 / rho
    v2 = rho_v2 / rho
    p = (gamma - 1) * (rho_e - 0.5f0 * (rho_v1 * v1 + rho_v2 * v2))
    f1 = rho_v1
    f2 = rho_v1 * v1 + p
    f3 = rho_v1 * v2
    f4 = (rho_e + p) * v1
    return SVector(f1, f2, f3, f4)
end

@testset "flux" begin
    u = SVector(1.0, -0.1, 0.2, 2.0)
    du, ddu, dddu, ddddu, dddddu = (SVector(rand(4)...) for _ in 1:5)

    @test TaylorDiff.derivative(flux, u, du, Val(1)) ≈ jvp(flux, u, du)
    @test TaylorDiff.derivative(flux, u, du, Val(2)) ≈ hvvp(flux, u, du)

    @test derivative_bundle(flux, (u, du)) ≈ jvp(flux, u, du)
    @test derivative_bundle(flux, (u, du, ddu)) ≈ hvvp(flux, u, du) + jvp(flux, u, ddu)

    @test derivative_bundle(flux, (u, du)) ≈ taylor_diff(flux, (u, du))
    @test derivative_bundle(flux, (u, du, ddu)) ≈ taylor_diff(flux, (u, du, ddu))
    @test derivative_bundle(flux, (u, du, ddu, dddu)) ≈ taylor_diff(flux, (u, du, ddu, dddu))
    @test derivative_bundle(flux, (u, du, ddu, dddu, ddddu)) ≈ taylor_diff(flux, (u, du, ddu, dddu, ddddu))
    @test derivative_bundle(flux, (u, du, ddu, dddu, ddddu, dddddu)) ≈ taylor_diff(flux, (u, du, ddu, dddu, ddddu, dddddu))
end
