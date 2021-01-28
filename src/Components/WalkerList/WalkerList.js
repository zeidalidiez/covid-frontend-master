import React, { Component } from 'react'

import WalkerListContext from '../../contexts/WalkerListContext'
import Walker from '../Walker/Walker'
import WalkerApiService from '../../services/walker-api-service'
import { Spinner } from '../Utilitys/Utils'

export default class WalkerList extends Component {
    static contextType = WalkerListContext
    state = {
        error: null,
        loader: true
    }
    componentDidMount() {
        WalkerApiService.getAllWalkers()
            .then(data => {
                this.context.setWalkerList(data)
                this.setState({
                    loader: false
                })
            })
            .catch(err => {
                this.context.setError(err)
                this.wait()
            })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
    };
    renderWalkers() {
        const { walkerList = [] } = this.context
        return walkerList.map(walker =>
            <Walker
                key={walker.id}
                walker={walker}
            />
        )
    }
    render() {
        const { error } = this.context
        return (
            <div>
                {this.state.loader ? <Spinner /> : <ul className='WalkerList'>
                    {error ?
                        <p >There was and error,try again later</p>
                        : this.renderWalkers()}
                </ul>}
            </div>
        )
    }
}
