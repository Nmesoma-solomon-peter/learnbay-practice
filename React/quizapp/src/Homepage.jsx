import React, { useContext } from 'react'
import { myBasket } from './App'
import "./Homepage.css"

function Home() {

  const { stage } = useContext(myBasket)

  return (
    <div className='homeBox'>
      <div className='introDiv'>
        <h2 className='introDivH2'>Welcome to the Ultimate Quiz Challenge!</h2>
        <h4 className='introDivH4'>Are you ready to test your knowledge and compete for the highest score?</h4>
        <p>This quiz consists of 30 questions spanning a variety of topics, from general knowledge to random trivia. You have 10 minutes to complete all the questions, so be sure to manage your time wisely!</p>
      </div>
      <h4 className='introText'>
        Instructions:
        Read each question carefully and select the best answer from the provided options.
        You can navigate between questions using the Previous and Next buttons.
        Once you've answered all the questions, click the Submit button to see your score.
        Keep an eye on the timer – you only have 5 minutes to complete the quiz!
        When you're ready to begin, click the Start Quiz button below.

        Good luck, and may the best mind win!

      </h4>
      <div>
        <button onClick={() => stage("Question")}>start quiz</button>

      </div>
    </div>
  )
}

export default Home