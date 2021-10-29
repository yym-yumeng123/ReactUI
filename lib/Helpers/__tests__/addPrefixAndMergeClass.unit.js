import addPrefixAndMergeClass from '../addPrefixAndMergeClass'

describe('addPrefixAndMergeClass', () => {

  it('可以使用 字符串 或 对象 合并 class', () => {
    const sc = addPrefixAndMergeClass('yui')
    expect(sc('')).toEqual('yui')
    expect(sc('x')).toEqual('yui-x')
    expect(sc({y: true, z: false})).toEqual('yui-y')
    expect(sc({y: true, z: true})).toEqual('yui-y yui-z')
    expect(sc({y: true, z: true}, {extra: 'hi'})).toEqual('yui-y yui-z hi')
  });
});
