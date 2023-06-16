import {Component} from 'react'
import DenominationsList from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onButton = id => {
    const {denominationsList} = this.props
    const text = denominationsList.filter(eachItem => eachItem.id === id)
    console.log(text[0].value)
    this.setState(prevState => ({
      count: prevState.count - parseInt(text[0].value),
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="name-card">
            <div className="image-card">
              <p className="user-image">S</p>
            </div>
            <p className="username"> Sarah Williams </p>
          </div>
          <div className="balance-card">
            <p className="light"> Your Balance </p>
            <div>
              <p className="rupees"> {count} </p>
              <p className="para"> In Rupees</p>
            </div>
          </div>
          <p className="withDraw"> Withdraw </p>
          <p className="light"> CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationsList
                list={each}
                key={each.id}
                onButton={this.onButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
