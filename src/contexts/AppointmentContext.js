import React, { Component } from 'react'

const AppointmentContext = React.createContext({
  walkerInfo: [],
  serviceSelected: '',
  timeSelected: '',
  error: null,
  delete: () => { },
  setError: () => { },
  clearError: () => { },
  setWalkerInfo: () => { },
  setSelectTime: () => { },
  setServiceType: () => { }
})
export default AppointmentContext
export  class AppointmentProvider extends Component {
  state = {
    walkerInfo: [],
    serviceSelected: '',
    timeSelected: '',
    error: null,
    }

  
  setWalkerInfo = walkerInfo => {
    this.setState({ walkerInfo })
  }
  setServiceType = serviceSelected => {
    return this.setState({ serviceSelected})
  }
  setSelectTime = timeSelected => {
    return this.setState({ timeSelected})
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const { walkerInfo,
      serviceSelected,
      timeSelected,
      error,
      
    } = this.state

    const value = {
      walkerInfo,
      serviceSelected,
      timeSelected,
      error,
      setWalkerInfo: this.setWalkerInfo,
      setServiceType: this.setServiceType,
      setTimeSelected : this.setTimeSelected,
      setError: this.setError,
      clearError: this.clearError
    }
    return (
      <AppointmentContext.Provider value={value}>
        {this.props.children}
      </AppointmentContext.Provider>
    )
  }
}
