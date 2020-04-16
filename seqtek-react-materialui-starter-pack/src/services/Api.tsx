import * as React from 'react';
import { ApiURL, Environment } from '../constants';
import MessageStore from '../stores/Messages/MessageStore';

class Api extends React.Component {
    messageThrown: boolean = false;
    apiUrl = ApiURL;

    constructor(props: any) {
        super(props);
    }

    get(url: string) {
        return this.makeFetch(url, 'GET');
    }

    put(url: string, body: object) {
        return this.makeFetch(url, 'PUT', body);
    }

    post(url: string, body: object) {
        return this.makeFetch(url, 'POST', body);
    }

    setApiUrl(url: string) {
        this.apiUrl = url;
    }

    resetApiUrl() {
        this.apiUrl = ApiURL;
    }

    checkStatus(response: any) {
        let error: any;

        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    parseJSON(response: any) {
        return response.json();
    }

    makeFetch(url: string, method: string = 'get', body: any = undefined) {

        this.messageThrown = false;

        let env = Environment;

        let fetchObject: any = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        if ( method !== 'GET' ) {
            fetchObject.body = JSON.stringify(body);
        }

        if ( env === 'production' ) {
            fetchObject.credentials = 'include';
        }

        return fetch(this.apiUrl + url, fetchObject)
            .catch((error: any) => {
                // create the message
                let message: any = '';
                
                if ( error instanceof Object ) {
                    for ( let key in error ) {
                        if ( error[key] ) {
                            message += ' ' + key + ': ' + error[key];
                        } else {
                            console.log(key);
                        }
                    }
                }

                if ( message === '' ) {
                    message = error.toString();
                }

                // display the message
                MessageStore.addMessage(message, 'danger');

                this.messageThrown = true;

                return error;
            })
            .then(
                (response: any) => {
                    if ( !response.ok && !this.messageThrown ) {
                        return response.json()
                            .then(
                                (data: any) => { 
                                    // display the message
                                    MessageStore.addMessage(data.Message, 'danger');
                                    throw Error(data.Message);
                                }
                            );
                    } else {
                        return response.json();
                    }
                },
                (error: any) => {
                    return error;
                }
            );
    }
}

export default Api;