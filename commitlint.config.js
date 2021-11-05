// 完善commitlint.config.js
module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    // type 的类型定义：表示 git 提交的 type 必须在以下类型范围之内
    'type-enum': [
      //  错误级别分为三种：
      //  "off" 或 0 -关闭规则
      //  "warn" 或 1 - 开启规则，使用警告级别的错误：warn 不会导致程序退出
      //  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
      2,
      // 在什么情况下进行验证
      'always',
      // 泛型类型
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不增加新功能，也不是修复bug）
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
