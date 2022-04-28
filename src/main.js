import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TrashCan from 'vue-material-design-icons/TrashCan.vue';
import Pencil from 'vue-material-design-icons/PencilBox.vue';
import Check from 'vue-material-design-icons/Check.vue';

const app = createApp(App)

app.use(router)
app.component('trash-icon', TrashCan)
app.component('pencil-icon', Pencil)
app.component('done-icon', Check)
app.mount('#app')
