import axios from "axios";
import { axiosPrivate } from "./Apis/Axios";
export const regSw = async () =>  {
    if ('serviceWorker' in navigator) {
        let url = process.env.PUBLIC_URL + '/sw.js';
        const reg = await navigator.serviceWorker.register(url, { scope: '/' });
        console.log('service config is', { reg });
        return reg;
    }
    throw Error('Service worker not supported');
}

export const subscribe = async(serviceWorkerReg) => { 
    let subscription = await serviceWorkerReg.pushManager.getSubscription ();
    console.log('subss', subscription);
    if (subscription === null) {
        subscription = await serviceWorkerReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BM1iVQANYtsPgJP3sB10Zv5K82RlrsRRgPIFO-eW5AfdcZvM4b1TB2100zPWud6cg-jEYYBpWWZ4aLqDJmo2pzE',
        });
        axiosPrivate.post('/subscribe', subscription);
    }
}

