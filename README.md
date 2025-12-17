TowerOfEnzyme.jl
==============
[![Documentation (latest)][docs-latest-img]][docs-latest-url]
[![CI][ci-img]][ci-url]
[Performance 🚀][perf-url]

TowerOfEnzyme.jl contains a set of tools to calculate higher-order derivatives with [Enzyme.jl](https://github.com/EnzymeAD/Enzyme.jl).

[docs-latest-img]: https://img.shields.io/badge/docs-dev-blue.svg
[docs-latest-url]: https://vchuravy.dev/TowerOfEnzyme.jl/dev
[ci-img]: https://github.com/JuliaGPU/TowerOfEnzyme.jl/actions/workflows/CI.yml/badge.svg?branch=main
[ci-url]: https://github.com/JuliaGPU/TowerOfEnzyme.jl/actions/workflows/CI.yml?query=workflow%3ACI
[perf-url]: https://vchuravy.dev/TowerOfEnzyme.jl/dev/bench

Citation
--------

If you find TowerOfEnzyme.jl useful in your own work please cite:

```
@misc{babbar2025-arxiv,
      title={Automatic differentiation for Lax-Wendroff-type discretizations}, 
      author={Arpit Babbar and Valentin Churavy and Michael Schlottke-Lakemper and Hendrik Ranocha},
      year={2025},
      eprint={2506.11719},
      archivePrefix={arXiv},
      primaryClass={math.NA},
      url={https://arxiv.org/abs/2506.11719}, 
}

@inproceedings{NEURIPS2020_9332c513,
 author = {Moses, William and Churavy, Valentin},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {H. Larochelle and M. Ranzato and R. Hadsell and M. F. Balcan and H. Lin},
 pages = {12472--12485},
 publisher = {Curran Associates, Inc.},
 title = {Instead of Rewriting Foreign Code for Machine Learning, Automatically Synthesize Fast Gradients},
 url = {https://proceedings.neurips.cc/paper/2020/file/9332c513ef44b682e9347822c2e457ac-Paper.pdf},
 volume = {33},
 year = {2020}
}
```


License
-------

TowerOfEnzyme.jl is licensed under the [MIT license](LICENSE.md).
