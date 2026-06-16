import "@testing-library/jest-dom";

// jsdom doesn't implement IntersectionObserver, which Nav's scroll-spy uses.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
global.IntersectionObserver = MockIntersectionObserver;
