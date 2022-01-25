import config from "./config.js";

const app = Vue.createApp({
    data() {
        return{
            user:{
                "username": "",
                "password": ""
            }
        }
    },
    methods:{
        login() {
            if(this.user.username !== "" && this.user.password){
                axios.post(`${config.api_url}admin/signin`, this.user)
                    .then(res => {
                        alert(res.data.message)
                        const {token, expired} = res.data
                        document.cookie = `hextoken=${token}; expires=${new Date(expired)}`;
                        window.location = '../backstage.html'
                    })
                    .catch(error => {
                        console.log(error.response);
                    })    
            }else {
                alert('請輸入帳號密碼')
            }
        }
    },
})

app.mount('#app')