import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import '../Especialidade.css'
import axios from 'axios'

export default class Especialidade extends Component {

    state = {
        especialidades: []
    }

    componentDidMount() {
        axios.get('https://warm-depths-85068.herokuapp.com/especialidades')
        .then(response => {
            console.log(response.data);
            this.setState({especialidades:response.data});  
        })
        .catch(error => {
            alert(error)
        })
    }
    mudaLink(dados){
        let descricao = dados.descricao.replace(/ /g,"-");
        this.props.history.push('/medicos/'+dados.id+'/'+descricao);
    }
    render() {
        return(
            <div class="container">
                {
                    this.state.especialidades.map((especialidade, index) => 
                            <div class="row" key={index}>
                                <div class="col-lg-4">&nbsp;</div>
                                <div class="col-lg-4">
                                    <div class="card">
                                        <div class="card-body">
                                        <h4 class="card-title">{especialidade.descricao}</h4>
                                        <button class="btn btn-primary" onClick={()=>this.mudaLink(especialidade)} >Listar M&eacute;dicos</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">&nbsp;</div>
                            </div>
                        )
                }
            </div>
        )
    }

}