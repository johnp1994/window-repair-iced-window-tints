/**
 * Composable that uses IntersectionObserver to add 'visible' class
 * to elements with 'animate-in' class when they scroll into view.
 */
export function useScrollAnimation() {
  onMounted(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with animate-in class
    const elements = document.querySelectorAll('.animate-in')
    elements.forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.1}s`
      observer.observe(el)
    })
  })
}
