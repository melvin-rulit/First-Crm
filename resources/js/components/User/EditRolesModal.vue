<template>

   <div>

        <!-- Модальное окно UserCard -->
        <b-modal id="EditRoles"  title="Отредактируйте нужные поля"  v-on:hide="closeEditRolesModal" centered ok-only ok-title="Готово">
<p>
    <!-- {{this.rolesdata}} -->
</p>
        </b-modal>
    </div>

</template>

<script>
export default {

    data(){
     return{
        rolesdata: {},
        }
    },

    methods:{

        ShowModalEditRoles(items){
            this.rolesdata = items
            this.$bvModal.show('EditRoles')
},
        closeEditRolesModal(){
            this.$emit('get-method')
        },

}

}
</script>

<style>

</style>