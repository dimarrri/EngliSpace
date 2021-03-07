import React from 'react';
import { getPreparationDataWord } from "./dataWord/data";
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.check_answer_to_current_question = this.check_answer_to_current_question.bind(this)
    this.handlerCheckAnswerToQuestion = this.handlerCheckAnswerToQuestion.bind(this)
    this.handlerValueChangeControl = this.handlerValueChangeControl.bind(this)
    this.handlerSwitchMode = this.handlerSwitchMode.bind(this)
    this.KEY_MODE_RU = "RUS"
    this.KEY_MODE_EN = "ENG"
    this.KEY_MODE_WORKOUT = "WORKOUT"
    this.KEY_MODE_LEARN = "LEARN"
    this.state = {
      data: getPreparationDataWord(),
      currentElement: 0,
      inputValue: "",
      currentMode: "ENG",
      stub: require("./image/stub.png").default,
    }
  }

  handlerSwitchMode(event) {
    this.setState((prevState) => {
      return { ...prevState, currentMode: event.target.dataset.translateLanguage }
    })
  }

  handlerValueChangeControl(event) {
    this.setState({ ...this.state, inputValue: event.target.value.replace(/\s/g, "") })
  }

  check_answer_to_current_question(mode) {
    let { data, inputValue, currentElement } = this.state
    switch (mode) {
      case (this.KEY_MODE_EN):
        if (data[currentElement].wordTranslation.includes(inputValue))
          this.setState((prevState) => ({ ...prevState, currentElement: (currentElement === data.length ? 0 : ++prevState.currentElement), inputValue: "" }))
      case (this.KEY_MODE_RU): {
        if (data[currentElement].wordEnglish === inputValue)
          this.setState((prevState) => ({ ...prevState, currentElement: (currentElement === data.length ? 0 : ++prevState.currentElement), inputValue: "" }))
      }
      default: { return false }
    }
  }

  // process the response depending on which mode is set.
  handlerCheckAnswerToQuestion(event) {
    event.preventDefault()
    if (this.state.currentMode === this.KEY_MODE_RU) this.check_answer_to_current_question(this.KEY_MODE_RU)
    if (this.state.currentMode === this.KEY_MODE_EN) this.check_answer_to_current_question(this.KEY_MODE_EN)
  }

  render() {
    const { data, currentElement, inputValue, currentMode, stub } = this.state
    return (
      <div className="main-container">
        <article className="auxiliary-wrapper">

          <menu className="menu-settings-for-trainer">
            {[this.KEY_MODE_RU, this.KEY_MODE_EN, this.KEY_MODE_LEARN, this.KEY_MODE_WORKOUT].map((value) => (
              <button key={value} data-translate-language={value} onClick={this.handlerSwitchMode}>d</button>
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
              {currentMode == this.KEY_MODE_WORKOUT ? <img src={stub} alt="stub" /> : <img src={this.state.data[currentElement].wordImage} alt="image-word" />}
            </div>
          </div>

        </article>
      </div>
    )
  }
}


export default App;
