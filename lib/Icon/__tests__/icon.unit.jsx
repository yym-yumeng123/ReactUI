// 单元测试一般要先失败一次, 在成功一次
import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Icon from '../icon'
// 一个 react 测试框架
import { mount } from  'enzyme'

describe('测试Icon', () => {
  it('render success', () => {
    const json = renderer.create(<Icon name="time" />).toJSON()
    // snapshot 快照
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    let n = 1
    const fn = () => {
      n = 2
    }

    // mount 加载
    const component = mount(<Icon name="time" onClick={fn} />)
    // 找到 svg 模仿点击
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })
  it('onClick jest.fn()', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="time" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
});
