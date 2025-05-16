using TowerOfEnzyme
using Documenter
import Documenter.Remotes: GitHub
using Literate
using PlutoStaticHTML
using DocumenterCitations

const NOTEBOOK_DIR = joinpath(@__DIR__, "src", "notebooks")

"""
    build()

Run all Pluto notebooks (".jl" files) in `NOTEBOOK_DIR`.
"""
function build()
    println("Building notebooks in $NOTEBOOK_DIR")
    oopts = OutputOptions(; append_build_context = false)
    output_format = documenter_output
    bopts = BuildOptions(NOTEBOOK_DIR; output_format)
    build_notebooks(bopts, oopts)
    return nothing
end

# Build the notebooks; defaults to true.
if get(ENV, "BUILD_DOCS_NOTEBOOKS", "true") == "true"
    build()
end


DocMeta.setdocmeta!(TowerOfEnzyme, :DocTestSetup, :(using TowerOfEnzyme); recursive = true)


##
# Generate examples
##

const EXAMPLES_DIR = joinpath(@__DIR__, "..", "examples")
const OUTPUT_DIR = joinpath(@__DIR__, "src/generated")

examples = Pair{String, String}[
]

for (_, name) in examples
    example_filepath = joinpath(EXAMPLES_DIR, string(name, ".jl"))
    Literate.markdown(example_filepath, OUTPUT_DIR, documenter = true)
end

examples = [title => joinpath("generated", string(name, ".md")) for (title, name) in examples]

bib = CitationBibliography(joinpath(@__DIR__, "src", "refs.bib"))

makedocs(;
    modules = [TowerOfEnzyme],
    authors = "Valentin Churavy",
    repo = GitHub("vchuravy", "TowerOfEnzyme.jl"),
    sitename = "TowerOfEnzyme.jl",
    format = Documenter.HTML(;
        prettyurls = get(ENV, "CI", "false") == "true",
        canonical = "https://vchuravy.dev/TowerOfEnzyme.jl",
        assets = [
            asset(
                "https://plausible.io/js/plausible.js",
                class = :js,
                attributes = Dict(Symbol("data-domain") => "vchuravy.dev", :defer => "")
            ),
            "assets/citations.css",
        ],
        mathengine = MathJax3(),
        size_threshold = 10_000_000,
    ),
    pages = [
        "Home" => "index.md",
        # "Examples" => examples,
        # "Notebooks" => [
        # ],
    ],
    doctest = true,
    linkcheck = true,
    plugins = [bib]
)

deploydocs(;
    repo = "github.com/vchuravy/TowerOfEnzyme.jl.git",
    devbranch = "main",
    push_preview = true,
)
