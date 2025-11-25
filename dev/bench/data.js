window.BENCHMARK_DATA = {
  "lastUpdate": 1764081807315,
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
          "id": "e92655fe1466169440054771118c2f168fc0dfe9",
          "message": "Bump actions/checkout from 4 to 6 (#16)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-25T15:37:05+01:00",
          "tree_id": "a978ec6abccd6778b6999d4f92d93174fb836409",
          "url": "https://github.com/vchuravy/TowerOfEnzyme.jl/commit/e92655fe1466169440054771118c2f168fc0dfe9"
        },
        "date": 1764081806934,
        "tool": "julia",
        "benches": [
          {
            "name": "sin/TowerOfEnzyme/order = 8",
            "value": 126.7605633802817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":923,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 1",
            "value": 122.70097508125677,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":923,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 4",
            "value": 123.76489707475623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":923,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 13",
            "value": 132.42139737991266,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":916,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TowerOfEnzyme/order = 2",
            "value": 143.11333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":900,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 8",
            "value": 5317.4375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4448\nallocs=16\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 1",
            "value": 129.0866310160428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":935,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 4",
            "value": 643.3661202185792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=352\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":183,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 13",
            "value": 544824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=132064\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/ForwardDiff/order = 2",
            "value": 288.4642857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=96\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":308,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/primal",
            "value": 7.13013013013013,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 8",
            "value": 215.00149031296573,
            "unit": "ns",
            "extra": "gctime=0\nmemory=112\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":671,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 1",
            "value": 140.25167037861917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":898,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 4",
            "value": 156.39788732394365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":852,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 13",
            "value": 310.5716049382716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":405,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "sin/TaylorDiff/order = 2",
            "value": 159.69270833333331,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64\nallocs=3\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":864,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}