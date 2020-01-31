<template>
    <b-col cols="12">
        <b-input-group >
            <b-form-input 
                v-bind:value="strSearch" 
                v-on:input="handleSearch" 
                type="text" class="form-control" placeholder="Search for..."
            />
            <span class="input-group-append">
                <b-button v-on:click="handleClear" variant="info" type="button">Clear!</b-button>
            </span>
        </b-input-group>
    </b-col>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'control-search',
    data() {
        return {}
    },
    computed: {
        ...mapState(['strSearch'])
    },
    methods: {
        handleSearch(e){
            // console.log("handlesearch: ", e);
            this.$store.dispatch('handleSearch', e);
        },
        handleClear(){
            this.$store.dispatch('handleClear');
        }
    }
}
</script>

<style>

</style>
