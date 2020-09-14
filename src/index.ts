import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// Create object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// Create instance of MatchReader
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches

// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }
//   return MatchResult.AwayWin;
// }

let manUnitedWins = 0;

for (let match of matchReader.matches) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);
