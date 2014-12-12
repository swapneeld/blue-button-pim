"use strict";

var score = require("./scorer.js").score;
var evaluate = require("./evaluator.js").evaluate;

//var score=require("./scorer.js").score_simple;
//var evaluate=require("./evaluator.js").evaluate_simple;

//runs through array of candidates and compare them with patient's data
//returns list of matches and flagged candidates
function compare(data, candidates) {
    var results = [];

    var i;
    for (i = 0; i < candidates.length; i++) {
        var candidate = candidates[i];

        //compare candidate with patient

        var s = score(data, candidate);

        var m = evaluate(s);

        //if not a match don't add to results
        //only complete matches and flagged candidates will be added 
        if (m !== "no match") {
            var result = {};
            result.pat_key = candidate.pat_key;
            result.match = m;
            results.push(result);
        }

    }

    return results;
}

module.exports.compare = compare;