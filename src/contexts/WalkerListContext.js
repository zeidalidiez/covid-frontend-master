import React, { Component } from 'react'

const WalkerListContext = React.createContext({
    walkerList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setWalkerList: () => { }
})
export default WalkerListContext
export class WalkerListProvider extends Component {
    state = {
        walkerList: [],
        error: null,
    }
    setWalkerList = walkerList => {
        this.setState({ walkerList })
    }
    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const { walkerList,
                error,
               } = this.state
        
        const value = {
            walkerList,
            error,
            setWalkerList:this.setWalkerList,
            setError:this.setError,
            clearError:this.clearError
        }
        return (
            <WalkerListContext.Provider value={value}>
               {this.props.children}
            </WalkerListContext.Provider>
        )
    }
}
