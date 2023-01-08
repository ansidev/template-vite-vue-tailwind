import './style.css'
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(head)

app.mount("#app")
