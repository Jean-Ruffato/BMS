import React, { Component } from 'react';
import Header from './component/Header';
import Books from './component/Books';

class App extends Component {
  state = {
    books: []
  }

  async componentWillMount() {
    try {

      const response = await fetch('https://acompanhesualeitura-api.azurewebsites.net/api/Books');
      const dataJson = await response.json();
      this.setState({ books: dataJson });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {
          this.state.books.map(book => {
            return (
              <div key={book.id}>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{book.id}</th>
                      <td>{book.autor}</td>
                      <td>{book.genero}</td>
                      <td>{book.idioma}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
