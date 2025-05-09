using Test
using TowerOfEnzyme
using StaticArrays
import TaylorDiff

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
    du, ddu, dddu, ddddu = (1.0e-3 * SVector(rand(4)...) for _ in 1:4)

    @test TaylorDiff.derivative(flux, u, du, Val(1)) ≈ jvp(flux, u, du)
    @test TaylorDiff.derivative(flux, u, du, Val(2)) ≈ hvvp(flux, u, du)

    @test derivative_bundle(flux, (u, du, ddu)) ≈ hvvp(flux, u, du) + jvp(flux, u, ddu)
end
