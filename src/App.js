import React from 'react';
import { getPreparationDataWord } from "./dataWord/data";
import './App.scss';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.check_answer_to_current_question = this.check_answer_to_current_question.bind(this)
    this.handlerCheckAnswerToQuestion = this.handlerCheckAnswerToQuestion.bind(this)
    this.handlerValueChangeControl = this.handlerValueChangeControl.bind(this)
    this.handlerSwitchMode = this.handlerSwitchMode.bind(this)
    this.KEY_MODE_RU = "RUS"
    this.KEY_MODE_EN = "ENG"
    this.KEY_MODE_WORKOUT = "WORKOUT"
    this.state = {
      data: getPreparationDataWord(),
      currentElement: 0,
      inputValue: "",
      currentMode: "ENG",
      hiddenPicture: true,
      stub: require("./image/stub.png").default,
    }
  }
  /**
  * @param { Object: event | String: event.dataset.keyMode } event 
  * @returns new state installs modes translate words. rus => eng and eng => rus ...  
  */
  handlerSwitchMode(event) {
    if (event.target.dataset.translateLanguage === this.KEY_MODE_WORKOUT) {
      this.setState((prevState) => ({ ...prevState, hiddenPicture: !prevState.hiddenPicture }))
    } else this.setState((prevState) => ({ ...prevState, currentMode: event.target.dataset.translateLanguage }))
  }
  /**
  * @param { Object: event | String: event.input.value } event 
  * @returns changes state, a field value from state.  
  */
  handlerValueChangeControl(event) {
    return this.setState({ ...this.state, inputValue: event.target.value.toLowerCase().replace(/\s/g, "") })
  }

  /**
  * @param { Object: event.method } event process the response depending on which mode is set.
  * @returns call function to verification response user
  */
  handlerCheckAnswerToQuestion(event) {
    event.preventDefault()
    if (this.state.currentMode === this.KEY_MODE_RU) return this.check_answer_to_current_question(this.KEY_MODE_RU)
    if (this.state.currentMode === this.KEY_MODE_EN) return this.check_answer_to_current_question(this.KEY_MODE_EN)
  }
  /**
  * @param { String: eng, rus } mode is receive string key, for definition verification method.
  * @returns new state with to changed currentElement and clean field input a value.
  */
  check_answer_to_current_question(mode) {
    const { data, inputValue, currentElement } = this.state
    const getNextIndexElement = (current, length) => current !== (length - 1) ? ++current : 0
    switch (mode) {
      case (this.KEY_MODE_EN):
        if (data[currentElement].wordTranslation.includes(inputValue))
          this.setState((prevState) => ({ ...prevState, 
            currentElement: getNextIndexElement(currentElement, data.length), 
            inputValue: "" }))
      case (this.KEY_MODE_RU):
        if (data[currentElement].wordEnglish === inputValue)
          this.setState((prevState) => ({ ...prevState, 
            currentElement: getNextIndexElement(currentElement, data.length), 
            inputValue: "" }))
      default: { return false }
    }
  }
  render() {
    const { data, currentElement, inputValue, currentMode, hiddenPicture, stub } = this.state
    return (
      <div className="main-container">
        <article className="auxiliary-wrapper">

          <menu className="menu-settings-for-trainer">
            {[this.KEY_MODE_RU, this.KEY_MODE_EN, this.KEY_MODE_WORKOUT].map((value) => (
              <button key={value} data-translate-language={value} onClick={this.handlerSwitchMode}>{value}</button>
            ))}
          </menu>

          <div className="container-box-word">
            <div className="wrapper-question-title">
              <h1>{currentMode == this.KEY_MODE_EN ? data[currentElement].wordEnglish : data[currentElement].wordTranslation[0]}</h1>
              <span>{currentMode == this.KEY_MODE_EN ? data[currentElement].wordWrongShape : null}</span>
            </div>
            <form className="container-input-answer" onSubmit={this.handlerCheckAnswerToQuestion}>
              <input placeholder="word" onChange={this.handlerValueChangeControl} value={inputValue} />
              <button type="submit">+</button>
            </form>
            <div className="wrapper-for-image">
              {hiddenPicture ? <img src={this.state.data[currentElement].wordImage} alt="image-word" /> : <img src={stub} alt="stub" />}
            </div>
          </div>

        </article>
      </div>
    )
  }
}

