import ProTableSearch from './src/index.vue'

ProTableSearch.install = (app) => {
    app.component(ProTableSearch.name, ProTableSearch)
}

export default ProTableSearch