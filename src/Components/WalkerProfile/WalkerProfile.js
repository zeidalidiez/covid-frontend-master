import React, { Component } from 'react'

import AppointmentApiService from '../../services/appointment-api-service'
import WalkerApiService from '../../services/walker-api-service'
import { Spinner } from '../Utilitys/Utils'

import { TimeButtons, ServiceButtons } from '../Utilitys/Utils'
import './WalkerProfile.css'

export default class WalkerProfile extends Component {
    state = {
        walkerInfo: [],
        serviceSelected: '',
        timeSelected: '',
        hasError: false,
        error: null,
        loader: true
    }
    static defaultProps = {
        match: { params: {} },
        location: {},
        history: {
            push: () => { },
        },
    }
    componentDidMount() {
        const { walkerid } = this.props.match.params
        WalkerApiService.getWalker(walkerid)
            .then(data => {
                return this.setState({ walkerInfo: data ,
                loader:false})
            })
            .catch(err=>{
                this.setState({
                    error:err
                })
                this.wait()
            })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
    };
    handleAppointmentSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/Profile'
        history.push(destination)
    }
    handleServiceType = ev => {
        return this.setState({ serviceSelected: ev })
    }
    handleSelectTime = ev => {
        return this.setState({ timeSelected: ev })
    }

    handleSelectedServices = ev => {
        ev.preventDefault();

        const { timeSelected, serviceSelected } = this.state

        const { id } = this.state.walkerInfo

        const newAppointment = {
            time: timeSelected,
            services_id: serviceSelected,
            walker_id: id
        }
        this.setState({ error: null })
        AppointmentApiService.postAppointment(newAppointment)
            .then(() => {
                this.handleAppointmentSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
                return { hasError: true }
            })


    }


    render() {
        const { first_name } = this.state.walkerInfo
        const { error } = this.state
        return (
            <div className='profile-container'>
                <section className='profile-section' onSubmit={this.handleSelectedServices}>
                    <h1>{first_name}</h1>
                    <div role='alert'>
                        {error && <p className='error'>{error}</p>}
                    </div>
                    {this.state.loader ? <Spinner/>:<form className='service-time-list'
                    ><fieldset className='service-list'>
                            <h2>Choose your Service</h2>
                            <ServiceButtons name='services' serviceId={this.handleServiceType} />
                        </fieldset>
                        <fieldset className='time-list'>
                            <h2>Pick Time</h2>
                            <TimeButtons name='time' timeId={this.handleSelectTime} />
                        </fieldset>
                        <div role='alert'>
                            {error && <p className='error'>{error}</p>}
                        </div>
                        <button className='submit-haircut' type='submit'>Review/Book</button>
                    </form>}
                </section>
            </div>
        )
    }
}
