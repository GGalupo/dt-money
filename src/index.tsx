import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Development',
          transactionType: 'income',
          categoryType: 'Development',
          amount: 2000,
          createdAt: new Date('2021-05-11 09:00:00')
        },
        {
          id: 2,
          title: 'Course',
          transactionType: 'expense',
          categoryType: 'Knowledge',
          amount: 500,
          createdAt: new Date('2021-05-10 09:00:00')
        },
        {
          id: 3,
          title: 'Salary',
          transactionType: 'income',
          categoryType: 'Knowledge',
          amount: 3500,
          createdAt: new Date('2021-05-09 09:00:00')
        },
        {
          id: 4,
          title: 'Phone',
          transactionType: 'expense',
          categoryType: 'Knowledge',
          amount: 1500,
          createdAt: new Date('2021-05-08 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);