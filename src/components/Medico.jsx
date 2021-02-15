import React, {Component} from 'react';
import axios from 'axios';

export default class Medico extends Component {

    
    constructor(props){
        super(props);
        let end = this.props.location.pathname.split('/');
        this.state = {
            cod : 0,
            medicos : [],
            num_medicos: '',
            nome_especialidade: '',
            msgErro: '',
            pesquisa: end[2]
        }
    }
    componentDidMount(){
        axios.get('https://warm-depths-85068.herokuapp.com/especialidades/'+this.state.pesquisa)
        .then(response => {
            
            if(response.data.medicos.length == 0){
                this.setState({msgErro: 'Nenhum médico encontrado para a especialidade '+response.data.crm+'.'});
            }
            this.setState({nome_especialidade:response.data.crm, 
                           medicos: response.data.medicos,
                           num_medicos: response.data.medicos.length });  
        })
        .catch(error => {
            alert(error)
        })
    }

    render() {
        if(this.state.num_medicos > 0){

        return(
            <div>
            <h3>{this.state.nome_especialidade}</h3>
            <hr/>
            <div>
                {
                    this.state.medicos.map((medico,index) =>
                        <div class="row" key={index}>
                            <div class="col-lg-4">&nbsp;</div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                    <h4 class="card-title">{medico.nome}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">&nbsp;</div>
                        </div>
                    )
                }
            </div>
            </div>
        )
        }else {
            
            return (
                <div>
                    <h3>{this.state.nome_especialidade}</h3>
                    <hr/>
                    <div>{this.state.msgErro}</div>
                </div>
            )
        }
    }
}