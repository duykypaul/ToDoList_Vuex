<template>
    <b-col cols="12" lg="6">
        <b-row>
            <control-sort />
            <control-search />
        </b-row>
    </b-col>
</template>

<script>
import ControlSort from "./ControlSort";
import ControlSearch from "./ControlSearch";
export default {
    name: 'comp-control',
    data() {
        return {
            
        }
    },
    components: {
        ControlSearch,
        ControlSort
    },
    methods: {
        
    }
}
</script>

<style>

</style>
