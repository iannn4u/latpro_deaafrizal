import React from "react"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h1>MY FOOTER</h1>
        {this.props.paragraf()}
      </div>
    )
  }
}