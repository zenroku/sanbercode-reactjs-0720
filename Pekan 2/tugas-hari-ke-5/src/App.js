import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Form Pembelian Buah</h1>
        <form>
          <table>
            <tr>
              <th><label for="name">Nama Pelanggan</label></th>
              <td><input type="text" id="name"></input></td>
            </tr>
            <tr>
              <th rowspan="5">Daftar Item</th>
              <td class="space"><input type="checkbox" id="semangka" />
                <label for="semangka">Semangka</label>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" id="jeruk" />
                <label for="jeruk">Jeruk</label>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" id="nanas" />
                <label for="nanas">Nanas</label>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" id="salak" />
                <label for="salak">Salak</label>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" id="anggur" />
                <label for="anggur">Anggur</label>
              </td>
            </tr>
          </table>
          <button>Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default App;
