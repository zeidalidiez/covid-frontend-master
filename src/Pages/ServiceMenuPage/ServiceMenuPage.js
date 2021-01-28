import React, { Component } from 'react'
import WalkerApiService from '../../services/walker-api-service'
import { ServiceList, Spinner } from '../../Components/Utilitys/Utils'
import './ServiceMenuPage.css'

export default class ServiceMenuPage extends Component {
    state={
        walkerServices: [],
        error: null,
        loader:true
    }
    componentDidMount() {
        WalkerApiService.getWalkerServices()
            .then(services => {
                return  this.setState({
                    walkerServices: services,
                    loader: false
                })
            })
                .catch(() => {
                    this.setState({
                        loader:true,
                        error:'there was an error'
                    })
                    this.wait(5000)
                })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
        return this.state.error
    };
    render() {
        return (
            <div className='ServiceMenu-container'>
                <section className='Service-menu-list'>
                <h1> Service Menu </h1>
                    {this.state.error ?
                    <Spinner error={this.state.error}/> :
              <ServiceList {...this.state}/>}
                </section>
            </div>
        )
    }
}
