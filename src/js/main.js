import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'

window.Alpine = Alpine

Alpine.data('setup', () => {
    return {
        loading: true,
        isSidebarOpen: window.innerWidth > 1024,
        toggleSidbarMenu() {
            this.isSidebarOpen = !this.isSidebarOpen
        },
        isSettingsPanelOpen: false,
    }
})

Alpine.store('darkMode', {
    value: false,
    setValue(value) {
        window.localStorage.setItem('dark', value)
    },
    getValue() {
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'))
        }
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    toggle() {
        this.value = !this.value
        this.setValue(this.value)
    },
    init() {
        this.value = this.getValue()
    },
})

Alpine.store('search', {
    isOpen: false,
    open() {
        this.isOpen = true
    },
    close() {
        this.isOpen = false
    },
})

Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineFocus)

// Alpine.start()
