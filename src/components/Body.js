import React from "react";
import "./Body.css"

export default function Body() {
    return (
        <div className="body">
            <div className="hello">
                <p>I'm Kim, a software developer that would love to help you build your website or product.</p>
            </div>

            <div id="info">
                <div id="about">
                    <p className='about-title'>About</p>
                    <p className='about-para'>I transitioned into software development through the full stack web development course at Lambda School. I pride myself on working hard to solve problems, communicating clearly with my teammates, and staying organized. I would love to chat with you about your upcoming projects</p>


                    <div className="skills-edu">
                        <div className="skills">
                            <p className="header">Skills</p>
                            <p>HTML / CSS</p>
                            <p>Javascript</p>
                            <p>React / Redux</p>
                        </div>
                        <div className='edu'>
                        <div className="header">Education</div>
                        <p>Bachelors Degree Rutgers University Class of 2018</p>
                        </div>
                </div>
                </div>
            </div> 
        </div>

            


    )
}