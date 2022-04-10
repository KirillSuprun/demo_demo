
    import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.js"

    const appConfig = 

    createApp({
        data(){
            return{
                title: "Vue Privet",
                count: 0,
            }
        }
    }
    ).mount('#app')