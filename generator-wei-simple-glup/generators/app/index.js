'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the divine ${chalk.red('generator-wei-simple-glup')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      // 复制templates文件夹下所有
      this.templatePath('**'),
      // 复制到工程目录根目录
      this.destinationPath('./')
    );
  }

  install() {
    this.installDependencies({
      // 取消使用bower安装
      bower: false
    });
  }
};
