import { observable } from 'mobx';

class AppStore {

    @observable appState: string = 'org';

    setAppState(appState: string) {
        let promise = new Promise((resolve, reject) => {
            resolve(this.appState = appState);
        });
        return promise;
    }

}
export default new AppStore();