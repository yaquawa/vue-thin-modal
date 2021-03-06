module.exports = {
  testRegex: '/test/.+\\.spec\\.js$',
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ]
}
