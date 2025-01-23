import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'
import AlpineResize from '@alpinejs/resize'

window.Alpine = Alpine

Alpine.data('setup', () => {
    return {
        loading: true,
        isSidebarOpen: window.innerWidth > 1024,
        toggleSidbarMenu() {
            this.isSidebarOpen = !this.isSidebarOpen
        },
        isSettingsPanelOpen: false,
        watchScreen() {
            if (window.innerWidth <= 1024) {
                this.isSidebarOpen = false
            } else {
                this.isSidebarOpen = true
            }
        }
    }
})

Alpine.store('darkMode', {
    value: false,
    setValue(value) {
        window.localStorage.setItem('dark', value)
        document.dispatchEvent(new CustomEvent('scheme:changed', {}))
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
Alpine.plugin(AlpineResize)

// Alpine.start()
