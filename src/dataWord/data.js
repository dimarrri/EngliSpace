import { ang_word } from "./word";

function newCreatorData(iceData) {
	return [] = iceData.map(([wordEn, wordTr, wordNt]) => {
		try {
			return new CreatorSubObjectData(wordEn, wordTr, wordNt, require(`./../image/${wordEn}.png`).default)
		} catch (err) {
			return new CreatorSubObjectData(wordEn, wordTr, wordNt, require(`./../image/stub.png`).default
			)
		}
	})
}

class CreatorSubObjectData {
	constructor(wordEnglish, wordTranslation, wordWrongShape, wordImage) {
		this.wordEnglish = wordEnglish
		this.wordTranslation = wordTranslation
		this.wordWrongShape = wordWrongShape
		this.wordImage = wordImage
	}
}

function getSelectionProperty(allDataWords, index) {
	const result = []
	const listSelectedWord = []
	const __generateRandomRound = (numLength) => {
		const round = Math.floor(Math.random() * numLength)
		const result = round > numLength ? __generateRandomRound(numLength) : round;
		return result;
	}
	while (!(result.length === index)) {
		const round = __generateRandomRound(allDataWords.length)
		if (listSelectedWord.includes(allDataWords[round].wordEnglish)) continue;
		else {
			result.push({ ...allDataWords[round] })
			listSelectedWord.push(allDataWords[round].wordEnglish)
		}
	}
	return result
}


export function getPreparationDataWord() {
	return getSelectionProperty(newCreatorData(ang_word), ang_word.length)
}
