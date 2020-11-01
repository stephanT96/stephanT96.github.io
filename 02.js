const app= new Vue ({
    el: '.app',
    data: {
        titulo: 'GYM',
        tarefas: [],
        novaTarefa: ''
    },
    methods: {
        adicionar(){
            this.tarefas.push({
                nome:this.novaTarefa,
                estado: false
            });
            this.novaTarefa='';
            localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
        },
        editar(index){
            this.tarefas[index].estado= !this.tarefas[index].estado;
            localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
        },
        eliminar(index){
            this.tarefas.splice(index,1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
        }
    },
    created: function (){
        let dadosDB= JSON.parse(localStorage.getItem('gym-vue'));
        if(dadosDB === null){
            this.tarefas=[]
        }else{
            this.tarefas= dadosDB;
        }
    }
})