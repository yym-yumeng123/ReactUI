const base = require("./jest.config");

Object.assign({}, base, {
  collectCoverage: true,
  reporters: ["jest-junit"],
  // 测试那些, 不测试哪些
  collectCoverageFrom: ["lib/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  // 生成的报告放在那里
  coverageDirectory: "coverage",
  // 用哪些报告
  coverageReporters: ["text", "lcov"]
});
