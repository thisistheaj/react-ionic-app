import React, {Component} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import {
    IonApp,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
} from '@ionic/react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <IonApp>
                <IonContent padding>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
                            <IonCardTitle>Running on React</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                    <IonButton onClick={() => {alert('foo')}}>
                        Click
                    </IonButton>
                </IonContent>
            </IonApp>
        );
    }
}

export default App;
