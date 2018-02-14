<template>
  <div>
    <v-dialog v-model="dialog" width="800px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Novo Book</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Cadastro de Books</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  name="bookTitle"
                  label="Title"
                  id="bookTitle"
                  type="text"
                  v-model="newBook.title"
                  required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  name="bookAuthor"
                  label="Author"
                  id="bookAuthor"
                  type="text"
                  v-model="newBook.author"
                  required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  name="bookUrl"
                  label="URL"
                  id="bookUrl"
                  type="text"
                  v-model="newBook.url"
                  required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <input type="hidden" id="bookKey">
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn id="btnNew" type="submit" color="blue darken-1" flat @click.native="addBook">Incluir</v-btn>
          <v-btn id="btnUp" type="submit" color="blue darken-1" flat @click.native="updatebtn" disabled>Atualizar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    

    <v-data-table
        v-bind:headers="headers"
        :items="books"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.url }}</td>
        <td class="text-xs-right">{{ props.item.author }}</td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="updateBook(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="removeBook(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>

import Firebase from 'firebase'
import toastr from 'toastr'
import VueFire from 'vuefire'
import Vue from 'vue'

/* let config = {
  apiKey: 'AIzaSyALkZ_5YTZMMF4rdHnEEiDYHuO_l7C0Up8',
  authDomain: 'vspa-15b54.firebaseapp.com',
  databaseURL: 'https://vspa-15b54.firebaseio.com',
  projectId: 'vspa-15b54',
  storageBucket: 'vspa-15b54.appspot.com',
  messagingSenderId: '853018899462'}
let app = Firebase.initializeApp(config)
*/
Vue.use(VueFire)
let db = Firebase.database()
let booksRef = db.ref('books')
export default {
  name: 'app',
  firebase: {
    books: booksRef
  },
  data () {
    return {
      headers: [
        { text: 'Título', align: 'left', value: 'title' },
        { text: 'URL', align: 'left', value: 'url' },
        { text: 'Autor', align: 'left', value: 'author' },
        { text: '', align: 'left', value: 'editar' },
        { text: '', align: 'left', value: 'excluir' }
      ],
      items: [],
      dialog: false,
      newBook: {
        title: '',
        author: '',
        url: ''
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    addBook: function () {
//      const maplat = document.getElementById('getlat').value
//      const maplng = document.getElementById('getlng').value
//      mapRef.push({'lat': maplat, 'lng': maplng})
      booksRef.push(this.newBook)
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = ''
    },
    updateBook: function (book) {
      this.newBook.title = book.title
      this.newBook.author = book.author
      this.newBook.url = book.url
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.remove('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.add('btn--disabled')
      const inHidden = document.getElementById('bookKey')
      inHidden.value = book['.key']
      this.dialog = true
    },
    updatebtn: function () {
      const btnUpdate = document.getElementById('btnUp')
      const getIdUpdate = document.getElementById('bookKey')
      booksRef.child(getIdUpdate.value).set(this.newBook)
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = ''
      btnUpdate.classList.add('btn--disabled')
    },
    removeBook: function (book) {
      confirm('Are you sure you want to delete this item?') && booksRef.child(book['.key']).remove() && toastr.success('Book removed')
    },
    close () {
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.remove('btn--disabled')
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = ''
      this.dialog = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>