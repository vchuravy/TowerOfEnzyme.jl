window.BENCHMARK_DATA = {
  "lastUpdate": 1747473095359,
  "repoUrl": "https://github.com/vchuravy/TowerOfEnzyme.jl",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd2ab9d98e1131ad9954fe8b09da4ef9307e7f2c",
          "message": "Bump julia-actions/setup-julia from 1 to 2 (#6)",
          "timestamp": "2025-05-17T11:09:50+02:00",
          "tree_id": "30f570efda27ec93de4c3790203a0f9165e43e5d",
          "url": "https://github.com/vchuravy/TowerOfEnzyme.jl/commit/bd2ab9d98e1131ad9954fe8b09da4ef9307e7f2c"
        },
        "date": 1747473094855,
        "tool": "julia",
        "benches": [
          {
            "name": "sin/TowerOfEnzyme/order = 8",
            "value": 188.4992700729927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=112\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":685,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 1",
            "value": 136.03040540540542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":888,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 4",
            "value": 142.66203703703704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":864,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 13",
            "value": 247.33007334963324,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":409,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 2",
            "value": 131.6285390713477,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":883,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 8",
            "value": 4070.0625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 1",
            "value": 120.6855614973262,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":935,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 4",
            "value": 586.452380952381,
            "unit": "ns",
            "extra": "gctime=0\nmemory=352\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":168,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 13",
            "value": 543375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132064\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 2",
            "value": 339.3405172413793,
            "unit": "ns",
            "extra": "gctime=0\nmemory=96\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":232,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/primal",
            "value": 7.431431431431432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}