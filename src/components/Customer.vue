<template>
  <div>
      <b-container class="custom-container">
            <!-- {{customers}} -->
            <h4>Tambah Customer</h4>
            <b-form inline>
                <label class="sr-only" for="nama_perushaan">Name</label>
                <b-input class="mb-2 mr-sm-2 mb-sm-0" id="nama_perusahaan" placeholder="Nama Perusahaan" type="text"/>

                <label class="sr-only" for="email" type="email">Email</label>
                <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input id="email" placeholder="Email" />
                </b-input-group>

                <label class="sr-only" for="kode_file">Kode File</label>
                <b-input class="mb-2 mr-sm-2 mb-sm-0" id="kode_file" placeholder="Kode File" type="text"/>

                <b-button variant="primary" @click="addCustomer">Tambah Customer</b-button>
            </b-form>
            <hr>
            <h4>List Customer</h4>
            <b-table
                striped
                bordered
                foot-clone
                hover
                :items="items"
                :fields="fields"
                >
                    <template slot="action" scope="row">
                        <b-button size="sm" variant="danger" @click="deleteCustomer(row.index)">
                            Delete
                        </b-button>
                        <b-button size="sm" variant="warning">
                            Edit
                        </b-button>
                    </template>
            </b-table>
        </b-container>
  </div>
</template>


<script>
import service from '../service.js'
import axios from 'axios'
import Vue from 'vue'
export default {
    data() {
        return {
            baseURL: 'http://10.20.33.202:1337/customer',
            customers: '',
            fields: ['nama_perusahaan', 'email', 'kode', 'action'],
            items: [],
        }
    },

    methods: {
        addCustomer() {
            axios.post(this.baseURL, {
                    nama_perusahaan : document.getElementById('nama_perusahaan').value,
                    email : document.getElementById('email').value,
                    kode_file: document.getElementById('kode_file').value
                })
                .then((response) => {
                    if (response) {
                        console.log('sukses')
                    }
                    this.getCustomer()
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        getCustomer() {
            axios.get(this.baseURL)
                .then((response) => {
                    this.items = []
                    this.customers = response.data
                    for (let i = 0; i<(response.data).length; i++) {
                        this.items.push(
                            {
                                nama_perusahaan: this.customers[i].nama_perusahaan,
                                email:this.customers[i].email,
                                kode:this.customers[i].kode_file,
                                action: '',
                                id: this.customers[i].id
                            }
                            // response.data
                        )
                        // console.log(response.data[i])
                    }
                })
                .catch((err) =>  {
                    console.log(err)
                })
        },

        updateCustomer() {
            axios.get(this.baseURL)
                .then((response) => {
                    this.customers = response.data
                    for (let i = 0; i<(response.data).length; i++) {
                        this.items.push(
                            {
                                nama_perusahaan: this.customers[i].nama_perusahaan,
                                email:this.customers[i].email,
                                kode:this.customers[i].kode_file,
                                action: ''
                            }
                        )
                        // console.log(response.data[i])
                    }
                })
                .catch((err) =>  {
                    console.log(err)
                })
        },

        deleteCustomer(index) {
            let id = this.items[index].id
            console.log(id)
            axios.delete(this.baseURL + '/' + id)
                .then((response) => {
                    if (response) {
                        console.log('sukses')
                    }
                    this.getCustomer()
                })
                .catch((err) =>  {
                    console.log(err)
                })
        }

    },
    created() {
        this.getCustomer()
    }
}
</script>


<style lang="scss">

</style>
