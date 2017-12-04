<template>
    <div>
        <b-container class="custom-container">
            <h4>Bulan {{getMonthNow}}</h4>
            <input type="file" name="file[]" id="uploadFile" @change="loadFiles" multiple />

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
                        <b-button size="sm" variant="success">
                            Send
                        </b-button>
                    </template>
            </b-table>

            <b-button size="md" variant="info" @click="uploadAll()">
                Send All Email
            </b-button>
            <!-- {{filesArray}} -->
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            baseURL: 'http://10.20.33.202:1337/customer',
            filesArray : [],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ],
            customers: '',
            fields: ['nama_perusahaan', 'email', 'action'],
            items: [],
        }
    },
    // components: {
    //     FileUpload
    // },
    computed: {
        getMonthNow() {
            let thisMonth = new Date()
            return this.months[thisMonth.getMonth()]
        }
    },
    methods: {
        loadFiles() {
            let filesLoad = document.getElementById('uploadFile')
            let filesLength = filesLoad.files.length
            this.filesArray = filesLoad.files
            // for (let i=0; i<filesLength; i++) {
            //     this.filesArray.push(
            //         filesLoad.files[i]
            //         )
            //     // document.write(filesLoad.files[i].name)
            // }
            this.showFiles()
        },
        getCustomer(kode) {
            // console.log('?where={"kode_file":"' + kode + '"}')
            axios.get(this.baseURL+ '?where={"kode_file":"' + kode + '"}')
                .then((response) => {
                    console.log(response)
                    this.customers = response.data
                    // this.items = []
                    this.items.push(
                        {
                            nama_perusahaan: this.customers[0].nama_perusahaan,
                            email:this.customers[0].email,
                            kode:this.customers[0].kode_file,
                            id: this.customers[0].id
                        }
                        // response.data
                    )
                })
                .catch((err) =>  {
                    console.log(err)
                })
        },
        showFiles() {
            // this.filesArray = []
            for(let i=0; i<this.filesArray.length; i++) {
                this.getCustomer(this.filesArray[i].name[2]+this.filesArray[i].name[3])
            }
        },
        uploadAll() {
            console.log('masuk function')
            console.log(this.filesArray.length)
            console.log(this.items.length)
            for (let i=0; i<this.filesArray.length; i++) {
                // {
                //     subject: 'Hello, World!',
                //     text: 'This mail has been sent from the frontend',
                //     html: '<p>This mail has been sent from the frontend</p>',
                //     to: 'gregor@martynus.net',
                //     attachments: [
                //         convert( document.body ).to("screenshot.png"),
                //         { filename: "info.text", data: "Some info about the page"}
                //     ]
                // }

                let email = this.items[i].email

                let file = this.filesArray[i];
                console.log(file);
                let reader = new FileReader();
                reader.readAsBinaryString(file);
                reader.onload = function () {
                let datauri = 'data:' + file.type + ';base64,' + btoa(reader.result);
                Email.sendWithAttachment('irfanrsatrio@gmail.com',
                email,
                'Cobain cuy',
                'bodi cihuy',
                'smtp.elasticemail.com',
                'irfanrsatrio@gmail.com',
                'fba94182-2f62-4319-8077-bf35439bcf48',
                datauri,
                function done(message) { console.log('Message sent OK') }
                );
                };
                reader.onerror = function() {
                    console.log('there are some problems');
                };
            }
        }
    }
}
</script>

<style lang="scss">
    input {
        margin-bottom: 20px;
    }
</style>

