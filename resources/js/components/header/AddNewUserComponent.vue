<template>
    <div>

        <!-- Модальное окно с добавлением нового Курьера -->

        <b-modal id="addNewUser" title="Добавьте нового Курьера" @ok="" @hidden="closeModal" centered ok-only
                 ok-title="Добавить">

            <div class="card-body py-0">
                <form ref="formSettingsGroup" @submit.stop.prevent="saveKurer">

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Фамилия</label>
                        <div class="col-sm-8">
                            <input class="form-control" v-model="surname" placeholder="Введите фамилию">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Имя</label>
                        <div class="col-sm-8">
                            <input class="form-control" v-model="name" placeholder="Введите имя">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Телефон</label>
                        <div class="col-sm-8">
                            <input class="form-control" v-model="phone" v-mask="'+38 (###)-###-##-##'"
                                   placeholder="+38 (###)-###-##-##">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Автомобиль</label>
                        <div class="col-sm-8">
                            <input class="form-control" v-model="car" placeholder="Укажите марку, цвет, номер">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Логин</label>
                        <div class="col-sm-8">
                            <input class="form-control" v-model="login" placeholder="Введите email адресс">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Пароль</label>
                        <div class="col-sm-8">
                            <input class="form-control" v-model="password" placeholder="Придумайте надежный пароль">
                        </div>
                    </div>

                    <div class="form-group row">
                        <textarea v-model="coment" class="form-control" rows="3" placeholder="Примечание"></textarea>
                    </div>

                </form>
            </div>

            <template #modal-footer="{ ok, cancel, hide }">

                <b-button v-if="notLenthPhone" show variant="danger" class="mr-5">Вы ввели не полный номер
                    телефона
                </b-button>

                <b-button size="sm" variant="success" @click="saveKurer">
                    Готово
                </b-button>

            </template>

        </b-modal>

    </div>

</template>

<script>

import {TheMask} from 'vue-the-mask'
import {mapActions, mapGetters} from "vuex";

// import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
    components: {TheMask},

    data() {
        return {
            name: '',
            surname: '',
            phone: '',
            car: '',
            login: '',
            password: '',
            coment: '',

            users: {},
            submitStatus: null,
            showErrors: false,
            modalShow: true,
            notLenthPhone: false,
        }
    },

    // validations: {
    //     name: {
    //         required,
    //         minLength: minLength(4)
    //     },
    //     surname: {
    //         required,
    //     },
    //     phone: {
    //         required,
    //     },
    //     login: {
    //         required,
    //         email
    //     },
    //     password: {
    //         required,
    //     }
    // },

    methods: {
        ...mapActions(['GetAllKurer']),

        addNewUserModal() {

            this.$bvModal.show('addNewUser')

        },

        saveKurer() {
if(this.phone.length < 19){
    this.notLenthPhone = true
}else {
    axios.post('api/v1/kurer', {

        name: this.name,
        surname: this.surname,
        phone: this.phone,
        car: this.car,
        email: this.login,
        coment: this.coment,
        full_name: this.surname + ' ' + this.name,
        password: this.password,
        secret_id: this.password,

    }).then((response) => {

        if (response.data === "Создан") {

            Vue.$toast.open({
                message: 'Курьер Добавлен',
                type: 'success',
                duration: 3000,
                position: 'top'
            });
            this.$bvModal.hide('addNewUser')
        }
    });
}

        },

        closeModal() {

            this.GetAllKurer()
            this.name = ''
            this.surname = ''
            this.phone = ''
            this.login = ''
            this.password = ''
            this.car = ''
            this.notLenthPhone = false

        },
    },
}
</script>

<style>

.form-control:focus {
    color: #12263f;
    outline: 0;
}
</style>
