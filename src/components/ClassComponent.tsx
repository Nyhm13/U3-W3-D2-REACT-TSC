import { Component } from 'react'

// in TS è necessario tipizzare le props che i componenti intendono ricevere!
// creiamo un'interfaccia per le PROPS che questo componente intende ricevere!

interface ClassComponentProps {
  // che props si aspetta di ricevere questo componente?
  sottotitolo: string
  value:number
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h2>Componente a classe!</h2>
        <h4>{this.props.sottotitolo}</h4>
        <p>Il contatore vale: {this.props.value} </p>
      </div>
    )
  }
}

export default ClassComponent