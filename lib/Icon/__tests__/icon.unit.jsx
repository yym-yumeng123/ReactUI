import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Icon from '../icon'
import { mount } from  'enzyme'

describe('测试Icon', () => {
  it('render success', () => {
    const json = renderer.create(<Icon name="qq" />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    let n = 1
    const fn = () => {
      n = 2
    }
    const component = mount(<Icon name="qq" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })
  it('onClick jest.fn()', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="qq" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
});
