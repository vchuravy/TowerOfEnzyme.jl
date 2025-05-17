window.BENCHMARK_DATA = {
  "lastUpdate": 1747474087597,
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
          "id": "d10bd7f8bbbe071b6803969578e527e260a51691",
          "message": "improve docs and cleanup questionable functions (#8)",
          "timestamp": "2025-05-17T11:26:08+02:00",
          "tree_id": "5861ec67465342eb1814f90be7d84f258736c11e",
          "url": "https://github.com/vchuravy/TowerOfEnzyme.jl/commit/d10bd7f8bbbe071b6803969578e527e260a51691"
        },
        "date": 1747474087273,
        "tool": "julia",
        "benches": [
          {
            "name": "sin/TowerOfEnzyme/order = 8",
            "value": 121.53067814854683,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":929,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 1",
            "value": 108.41604278074867,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":935,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 4",
            "value": 130.9053905390539,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":909,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 13",
            "value": 124.29315960912052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":921,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 2",
            "value": 107.8659849300323,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":929,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 8",
            "value": 4106.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 1",
            "value": 120.40411700975082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":923,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 4",
            "value": 607.5180722891566,
            "unit": "ns",
            "extra": "gctime=0\nmemory=352\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":166,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 13",
            "value": 555669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132064\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 2",
            "value": 328.42009132420094,
            "unit": "ns",
            "extra": "gctime=0\nmemory=96\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":219,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/primal",
            "value": 8.043043043043044,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 8",
            "value": 193.48224852071007,
            "unit": "ns",
            "extra": "gctime=0\nmemory=112\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":676,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 1",
            "value": 128.97648376259798,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":893,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 4",
            "value": 139.93771626297578,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":867,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 13",
            "value": 242.9660633484163,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":442,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 2",
            "value": 136.80181200453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":883,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}