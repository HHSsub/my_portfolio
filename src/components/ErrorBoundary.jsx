import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'Unknown error' }
  }
  componentDidCatch(error, info) {
    console.error('React ErrorBoundary:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-lg bg-red-500/10 border border-red-500/40">
          <div className="font-semibold">렌더링 중 오류가 발생했어요.</div>
          <div className="text-sm opacity-80 mt-1">{this.state.message}</div>
        </div>
      )
    }
    return this.props.children
  }
}
