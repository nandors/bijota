<template>
  <div>
    <v-form ref="form" lazy-validation>
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
                    :rules="[ v => !!v || 'Título é requerido']"
                    id="bookTitle"
                    type="text"
                    v-model="newBook.title"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="bookAuthor"
                    label="Author"
                    :rules="[ v => !!v || 'Autor é requerido']"
                    id="bookAuthor"
                    type="text"
                    v-model="newBook.author"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="bookUrl"
                    label="URL"
                    :rules="[ v => !!v || 'URL é requerida']"
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
            <v-btn color="blue darken-1" @click.native="close">Cancel</v-btn>
            <v-btn id="btnNew" color="blue darken-1" @click.native="addBook">Incluir</v-btn>
            <v-btn id="btnUp"  class="btn--disabled" color="blue darken-1" @click.native="updatebtn">Atualizar</v-btn>
          </v-card-actions>
       </v-card>
     </v-dialog>    
    </v-form>  
    <v-card heigth="200px">
      <v-card-title>
        Livros cadastrados
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>    
      <v-data-table
          v-bind:headers="headers"
          :items="books"
          :search="search"
          rows-per-page-text= "Linhas por páginas"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.title }}</td>
          <td class="text-xs-left">{{ props.item.url }}</td>
          <td class="text-xs-left">{{ props.item.author }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="updateBook(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="removeBook(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="pageText" slot-scope="props">
          Linhas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Sua pesquisa por "{{ search }}" não encontrou resultados.
        </v-alert>
      </v-data-table>
    </v-card>  
  </div>
</template>
<script>

import Firebase from 'firebase'
import toastr from 'toastr'
import VueFire from 'vuefire'
import Vue from 'vue'

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
        { text: '', sortable: false, align: 'left', value: 'editar' },
        { text: '', sortable: false, align: 'left', value: 'excluir' }
      ],
      items: [],
      valid: true,
      dialog: false,
      search: '',
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
      if (this.$refs.form.validate()) {
        booksRef.push(this.newBook)
        this.clear()
        this.close()
      }
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
      const getIdUpdate = document.getElementById('bookKey')
      booksRef.child(getIdUpdate.value).set(this.newBook)
      this.clear()
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      this.close()
    },
    removeBook: function (book) {
      confirm('Confirma a exclusão?') && booksRef.child(book['.key']).remove() && toastr.success('Book removed')
    },
    close () {
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.remove('btn--disabled')
      this.clear()
      this.dialog = false
    },
    clear () {
      this.$refs.form.reset()
    }

  }
}
</script>
