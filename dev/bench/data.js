window.BENCHMARK_DATA = {
  "lastUpdate": 1747750986416,
  "repoUrl": "https://github.com/vchuravy/TowerOfEnzyme.jl",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "email": "v.churavy@gmail.com",
            "name": "Valentin Churavy",
            "username": "vchuravy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f7fe83c04144c451401f90485e99d00a0901bb0",
          "message": "add 5th order test (#12)",
          "timestamp": "2025-05-20T16:20:11+02:00",
          "tree_id": "88d86f95a0e8f15e880413b75d5daf69eaeb6ea1",
          "url": "https://github.com/vchuravy/TowerOfEnzyme.jl/commit/1f7fe83c04144c451401f90485e99d00a0901bb0"
        },
        "date": 1747750986065,
        "tool": "julia",
        "benches": [
          {
            "name": "sin/TowerOfEnzyme/order = 8",
            "value": 120.08494623655913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":930,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 1",
            "value": 107.82484076433121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":942,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 4",
            "value": 130.34323432343234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":909,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 13",
            "value": 123.42795232936078,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":923,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 2",
            "value": 107.16881720430108,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":930,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 8",
            "value": 4031.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 1",
            "value": 118.37741935483871,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":930,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 4",
            "value": 614.2424242424242,
            "unit": "ns",
            "extra": "gctime=0\nmemory=352\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":165,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 13",
            "value": 540695,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132064\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 2",
            "value": 343.7072072072072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=96\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":222,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/primal",
            "value": 8.043043043043044,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 8",
            "value": 194.03503649635036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=112\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":685,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 1",
            "value": 132.48663697104678,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":898,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 4",
            "value": 139.7448275862069,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":870,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 13",
            "value": 247.22541966426857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":417,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 2",
            "value": 144.2942528735632,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":870,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}