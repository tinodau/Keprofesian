<template>
    <div>
        <b-container class="custom-container">
            <h4>Bulan {{getMonthNow}}</h4>
            <b-table
                striped
                bordered
                foot-clone
                hover
                :items="items"
                :fields="fields"
                >
                <template slot="action" scope="row">
                    <div style="float:left">

                    <b-button size="sm" variant="danger">
                        Delete
                    </b-button>
                    <b-button size="sm" variant="warning">
                        Reupload
                    </b-button>
                    </div>
                </template>
            </b-table>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            months: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            fields: ['nama_perusahaan', 'email', 'deadline', 'send', 'action'],
            items: [
                { nama_perusahaan: 'A', email: 40, deadline: 'Dickerson', send: 'Macdonald', action: '' },
                { nama_perusahaan: 'B', email: 21, deadline: 'Larsen', send: 'Shaw', action: '' },
                { nama_perusahaan: 'C', email: 89, deadline: 'Geneva', send: 'Wilson', action: '' },
                { nama_perusahaan: 'D', email: 38, deadline: 'Jami', send: 'Carney', action: '' }
            ],
        }
    },
    computed: {
        getMonthNow() {
            let thisMonth = new Date()
            return this.months[thisMonth.getMonth()]
        }
    }
}
</script>


<style>

</style>

