import { MatchReader } from './MatchReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';

import { Summary } from './Summary';

// Create instance of MatchReader
const matchReader = MatchReader.fromCSV('football.csv');
matchReader.load();

// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	new ConsoleReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
