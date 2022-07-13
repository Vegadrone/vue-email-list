const app = new Vue(
    {
        el:root,
    
        data:{
            
            email:""
        },

        methods:{

        },

        created(){

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.email = response.data.response;
                    });
            }
        }

    }
)