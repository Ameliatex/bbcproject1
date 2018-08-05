$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "This is to test Search field",
  "id": "search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search on Firefox",
  "description": "",
  "id": "search;search-on-firefox",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to bbc homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter text",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see world cup information",
  "keyword": "Then "
});
formatter.match({
  "location": "searchsteps.iNavigateToBbcHomepage()"
});
formatter.result({
  "duration": 25633166497,
  "status": "passed"
});
formatter.match({
  "location": "searchsteps.iClickOnSearchBox()"
});
formatter.result({
  "duration": 345633852,
  "status": "passed"
});
formatter.match({
  "location": "searchsteps.iEnterText()"
});
formatter.result({
  "duration": 177880518,
  "status": "passed"
});
formatter.match({
  "location": "searchsteps.iClickOnTheSearchButton()"
});
formatter.result({
  "duration": 166325142,
  "status": "passed"
});
formatter.match({
  "location": "searchsteps.iShouldSeeWorldCupInformation()"
});
formatter.result({
  "duration": 5018558803,
  "status": "passed"
});
});