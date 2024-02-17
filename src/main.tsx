// import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

import { createServer, Model } from "miragejs"



createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          titulo: 'Salario',
          type: 'deposito',
          categoria: 'Fixa',
          valor: 1000,
          createdAt: new Date('2024-02-17'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
);
