### 设计原则
- S 单一职责原则
- O 开放封闭原则：对扩展开放，对修改封闭
- L 里氏替换原则
- I 接口独立原则
- D 依赖倒置原则

### 应用
#### 工厂模式
jQuery的window.$，React.createElement。

#### 单例模式
登陆框，Redux的store。单一职责原则。

#### 适配器模式
封装旧接口，Vue computed。

#### 装饰器模式
TypeScript装饰器，ES6+使用需要babel插件，core-decorator。

#### 代理模式
addEventListener事件代理，ES6 Proxy。

VS适配器
- 适配器： 提供一个不同接口。可以用目标类，但是你用不了。
- 代理： 提供一模一样的接口。没权使用，但是想达到一样效果。

VS装饰器
- 装饰器：扩展功能，原有功能不变可直接使用。
- 代理：原有功能，经过限制之后的。
#### 观察者模式
DOM事件绑定，Promise，Node的EventEmitter自定义事件，Vue和React设革命周期的触发，Vue和Mobx的watch。

#### 迭代器模式
ES6 Iterator, [Symbol.iterator], ES6中有序数据类型（Array,Map,Set,String,arguments,NodeList）。generator函数返回结果实现了iterator。