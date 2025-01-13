import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'

window.Alpine = Alpine

Alpine.data('setup', () => {
    return {
        loading: true,
        isSidebarOpen: false,
        toggleSidbarMenu() {
            this.isSidebarOpen = !this.isSidebarOpen
        },
        isSettingsPanelOpen: false,
    }
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
