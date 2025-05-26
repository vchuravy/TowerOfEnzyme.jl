window.BENCHMARK_DATA = {
  "lastUpdate": 1748290737054,
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
            "email": "v.churavy@gmail.com",
            "name": "Valentin Churavy",
            "username": "vchuravy"
          },
          "distinct": true,
          "id": "a3fe523d34259f537c1e3f7b3fdf5ec2eae296ec",
          "message": "update benchnmarks_pr",
          "timestamp": "2025-05-26T22:12:27+02:00",
          "tree_id": "864429edfa50bae7f101e0efdc50baeae741699e",
          "url": "https://github.com/vchuravy/TowerOfEnzyme.jl/commit/a3fe523d34259f537c1e3f7b3fdf5ec2eae296ec"
        },
        "date": 1748290736640,
        "tool": "julia",
        "benches": [
          {
            "name": "sin/TowerOfEnzyme/order = 8",
            "value": 131.44025834230357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":929,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 1",
            "value": 115.8731182795699,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":930,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 4",
            "value": 111.8639825897715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":919,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 13",
            "value": 113.43311758360302,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":927,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 2",
            "value": 117.02152852529602,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":929,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 8",
            "value": 4071.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 1",
            "value": 108.35683530678149,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":929,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 4",
            "value": 647.5963855421687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=352\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":166,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 13",
            "value": 543017,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132064\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 2",
            "value": 361.56444444444446,
            "unit": "ns",
            "extra": "gctime=0\nmemory=96\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":225,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/primal",
            "value": 7.741741741741742,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 8",
            "value": 208.7337278106509,
            "unit": "ns",
            "extra": "gctime=0\nmemory=112\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":676,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 1",
            "value": 150.26467268623026,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":886,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 4",
            "value": 140.95964912280704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":855,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 13",
            "value": 248.55184331797236,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":434,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 2",
            "value": 150.16799091940976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":881,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}