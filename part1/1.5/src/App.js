import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
         {props.course}
      </h1>
    </div>
  )
}

const Part=(props)=>{

return (
  <div>
      <p>
        {props.part1}  {props.exercises1}
      </p>
      <p>
        {props.part2}  {props.exercises2}
      </p>
      <p>
        {props.part3}  {props.exercises3}
      </p>
  </div>
)
}
const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1} exercises1={props.exercises1}/>
      <Part part2={props.part2} exercises2={props.exercises2}/>
      <Part part3={props.part3} exercises3={props.exercises3}/>
    </div>
  )
}

const Total=(props)=>{
  return(
  <div>
      <p>Number of exercises {props.total}</p>
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
      <Content part2={course.parts[1].name} exercises2={course.parts[1].exercises}/>
      <Content part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )

  }
export default App
