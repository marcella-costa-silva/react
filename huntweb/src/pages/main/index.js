import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
  state = {
    products: []
  }

  // Executado assim que o componente for executado em tela.
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get('/products')
    console.log(response.data.docs)
    this.setState({ products: response.data.docs })
  }

  render() {
    const { products } = this.state

    // return <h1>Quantidade de Produtos: {this.state.products.length}</h1>
    return (
      <div className='product-list'>
        {products.map(product => (
          <article key='products._id'>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href='#'>Acessar</a>
          </article>
        ))}
      </div>
    )
  }
}