/**
 * Restored source for Webpack Module #25583.
 *
 * Numeric enum for bot command decisions.
 */
"use strict"

const DecisionType = {}
DecisionType[(DecisionType.Upgrade = 0)] = "Upgrade"
DecisionType[(DecisionType.MakeTower = 1)] = "MakeTower"
DecisionType[(DecisionType.MakeBuilding = 2)] = "MakeBuilding"
DecisionType[(DecisionType.Wait = 3)] = "Wait"
DecisionType[(DecisionType.Move = 4)] = "Move"

module.exports = { DecisionType }
