export const initDialog = () => {
  let lastFocused: HTMLElement | null = null
  let closingTimer: number | null = null

  /* bodyスクロール制御 */
  const lockScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlockScroll = () => {
    document.body.style.overflow = ''
  }

  const getDialogTransitionDuration = (dialog: HTMLDialogElement) => {
    const duration = getComputedStyle(dialog)
      .getPropertyValue('--dialog-transition-duration')
      .trim()

    if (duration.endsWith('ms')) {
      return Number.parseFloat(duration)
    }

    if (duration.endsWith('s')) {
      return Number.parseFloat(duration) * 1000
    }

    return 250
  }

  const closeDialog = (dialog: HTMLDialogElement) => {
    if (dialog.dataset.dialogClosing === 'true') return

    const transitionDuration = getDialogTransitionDuration(dialog)
    dialog.dataset.dialogClosing = 'true'

    closingTimer = window.setTimeout(() => {
      dialog.close()
      delete dialog.dataset.dialogClosing
      closingTimer = null
    }, transitionDuration)
  }

  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target
    if (!(target instanceof Element)) return

    const openBtn = target.closest<HTMLElement>('[data-dialog-open]')
    const closeBtn = target.closest<HTMLElement>('[data-dialog-close]')

    if (openBtn) {
      const id = openBtn.getAttribute('data-dialog-open')
      if (!id) return

      const dialog = document.getElementById(id)
      if (!(dialog instanceof HTMLDialogElement)) return

      lastFocused = openBtn

      if (closingTimer !== null) {
        window.clearTimeout(closingTimer)
        closingTimer = null
      }

      delete dialog.dataset.dialogClosing
      lockScroll()
      dialog.showModal()
    }

    if (closeBtn) {
      const dialog = closeBtn.closest('dialog')
      if (!(dialog instanceof HTMLDialogElement)) return

      closeDialog(dialog)
    }
  })

  document.querySelectorAll('dialog').forEach((dialog) => {
    if (!(dialog instanceof HTMLDialogElement)) return

    dialog.addEventListener('click', (e: MouseEvent) => {
      if (e.target === dialog) {
        closeDialog(dialog)
      }
    })

    dialog.addEventListener('close', () => {
      lastFocused?.focus()
      lastFocused = null

      unlockScroll()
    })
  })
}
