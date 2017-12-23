import { testList } from '../config/testList'
import * as templates from './templates/unitTest'
import { template, testCase, scenario } from './templates/unitTest'
import fs from 'fs'

// let scenarios = []

testList.scenarios.forEach(t => {
  let scenarioData = templates.scenario
  let testCases = []
  scenarioData = scenarioData.replace(/<bizClass>/g, t.bizClass)
  scenarioData = scenarioData.replace('<bizClassPath>', t.bizClassPath)
  scenarioData = scenarioData.replace('<Scenario.name>', t.name)

  t.testCases.forEach(c => {
    let testCaseData = templates.testCase
    testCaseData = testCaseData.replace('<testCase.name>', c.name)
    testCaseData = testCaseData.replace('<when.text>', c.when.text)
    testCaseData = testCaseData.replace(/<when.object>/g, c.when.object)
    testCaseData = testCaseData.replace('<bizClass>', t.bizClass)
    testCaseData = testCaseData.replace('<when.method>', c.when.method)
    testCaseData = testCaseData.replace('<given.values>', JSON.stringify(c.given.values))
    testCaseData = testCaseData.replace('<then.method>', c.then.method)
    testCaseData = testCaseData.replace('<then.result>', c.then.result)
    testCaseData = testCaseData.replace('<given.expect>', c.given.expect)
    testCases.push(testCaseData)
  })
  scenarioData = scenarioData.replace('<testCases>', testCases.join('\n'))
  // scenarios.push(scenarioData)
  let textData = templates.template
  textData = textData.replace('<Scenario>',scenarioData)
  fs.writeFile(t.fileName, textData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
  //console.log(textData)

});

// let textData = templates.template
// textData = textData.replace('<Scenarios>',scenarios.join('\n'))

//console.log(textData)
