import React from 'react';
import { getPreparationDataWord } from "./dataWord/data";
import { useMediaQuery } from "react-responsive";
import classNames from 'classnames';
import './App.scss';

import logo from "./image/logo.png";
import icoLanguage from "./image/ico/ico_language.svg";
import icoLearn from "./image/ico/ico_learn.svg";

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
      loadingContent: true,
      stub: require("./image/stub.png").default,
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, loadingContent: false }), 3000)
  }
  /**
  * @param { Object: event | String: event.dataset.keyMode } event 
  * @returns new state installs modes translate words. rus => eng and eng => rus ...  
  */
  handlerSwitchMode(event) {
    if (event.currentTarget.dataset.translateLanguage === this.KEY_MODE_WORKOUT) {
      this.setState((prevState) => ({ ...prevState, hiddenPicture: !prevState.hiddenPicture }))
    } else this.setState((prevState) => ({
      ...prevState,
      currentMode: prevState.currentMode === this.KEY_MODE_EN ? this.KEY_MODE_RU : this.KEY_MODE_EN
    }))
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
          this.setState((prevState) => ({
            ...prevState,
            currentElement: getNextIndexElement(currentElement, data.length),
            inputValue: ""
          }))
      case (this.KEY_MODE_RU):
        if (data[currentElement].wordEnglish === inputValue)
          this.setState((prevState) => ({
            ...prevState,
            currentElement: getNextIndexElement(currentElement, data.length),
            inputValue: ""
          }))
      default: { return false }
    }
  }
  getStringMatchPercentage(value, answer) {
    // debugger
    const arrLetterValue = value.split('')
    const arrLetterAnswer = answer.split('')
    const levelRelations = 100 / arrLetterValue.length
    let result = []
    for(let i = 0; i < arrLetterValue.length; ++i) {
      const _ = arrLetterValue[i] === arrLetterAnswer[i] ? (result.push(levelRelations)) : null 
    }
    return result.reduce((a, b) => a + b)
  }

  checkAnswerToCurrentQuestion() {
    const { data, inputValue, currentElement, currentMode } = this.state
    switch (currentMode) {
      case (this.KEY_MODE_EN): {
        this.getStringMatchPercentage(inputValue, data[currentElement].wordEnglish)
      }
      case (this.KEY_MODE_RU): {

      }
    }
  }


  render() {

    console.log(this.getStringMatchPercentage("abide", "adide"))
    return (
      <HtmlMarkupApp
        KEY_MODE_EN={this.KEY_MODE_EN}
        KEY_MODE_RU={this.KEY_MODE_RU}
        KEY_MODE_WORKOUT={this.KEY_MODE_WORKOUT}
        data={this.state.data}
        currentElement={this.state.currentElement}
        inputValue={this.state.inputValue}
        currentMode={this.state.currentMode}
        hiddenPicture={this.state.hiddenPicture}
        loadingContent={this.state.loadingContent}
        stub={this.state.stub}
        handlerSwitchMode={this.handlerSwitchMode}
        handlerCheckAnswerToQuestion={this.handlerCheckAnswerToQuestion}
        handlerValueChangeControl={this.handlerValueChangeControl}
      />
    )
  }
}

function HtmlMarkupApp(props) {
  const {
    KEY_MODE_EN,
    KEY_MODE_WORKOUT,
    data,
    currentElement,
    inputValue,
    currentMode,
    hiddenPicture,
    loadingContent,
    handlerSwitchMode,
    handlerCheckAnswerToQuestion,
    handlerValueChangeControl,
    stub } = props;

  const isHandheldDevice = useMediaQuery({ maxWidth: "730px" })
  const isDesktopDevice = useMediaQuery({ minWidth: "730px", maxWidth: "1900px" })

  return (
    <div className="main-container">
      <article className={classNames({
        ["wrapper-content-part"]: true,
        ["wrapper-content-part-handheld"]: isHandheldDevice,
        ["wrapper-content-part-desktop"]: isDesktopDevice,
      })}>

        <menu className={classNames({ ["menu-install-mode-trainer"]: true })}>
          <button data-translate-language={currentMode} onClick={handlerSwitchMode}>
            <img src={icoLanguage} width="27px" />
          </button>
          <button data-translate-language={KEY_MODE_WORKOUT} onClick={handlerSwitchMode}>
            <img src={icoLearn} width="40px" />
          </button>
          <div className="stud-last-element-mode-menu"></div>
        </menu>

        <div className={classNames({
          ["container-box-word"]: true,
          ["container-box-word-handheld"]: isHandheldDevice,
          ["container-box-word-desktop"]: isDesktopDevice,
        })} >
          {loadingContent ?
            <div className={classNames({ ['block-loaded-content']: true })}>
              <h1>EngliSpace</h1>
              <div className="circle-logo"><img src={logo} alt="logo" /></div>
              <p>word world</p>
            </div>
            :
            <>
              <div className="wrapper-question-title">
                <h1>{currentMode == KEY_MODE_EN ? data[currentElement].wordEnglish : data[currentElement].wordTranslation[0]}</h1>
                <span>{currentMode == KEY_MODE_EN ? data[currentElement].wordWrongShape : null}</span>
              </div>
              <form className="container-input-answer" onSubmit={handlerCheckAnswerToQuestion}>
                <input placeholder="enter word" onChange={handlerValueChangeControl} value={inputValue} />
              </form>
              <div className="wrapper-for-image">
                {hiddenPicture && data[currentElement].wordImage ? <img src={data[currentElement].wordImage} alt="image-word" /> : <img src={stub} alt="stub" />}
              </div>
            </>
          }
        </div>

      </article>
    </div>
  )
}
