
import ElProTableSearch from './table-search'

const components = [
    ElProTableSearch
]

const install = (app) => {
    components.forEach(item => {
        app.component(item.name, item)
    })
}

export default {
    install
}